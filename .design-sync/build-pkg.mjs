// Monta o pacote local que o design-sync converte para o Claude Design.
// O blog não é um pacote publicado: este script gera, em .design-sync/.cache/pkg/,
//   - blog.css: src/styles/global.css (Tailwind 4 + tokens do design system) compilado,
//     escaneando src/ e as prévias de .design-sync/previews/, mais a fonte Inter;
//   - types/: .d.ts reais dos componentes (tsc), para o conversor não ler os tipos
//     antigos de design-system/components/;
//   - package.json, links para src/, node_modules/ e tsconfig.json, e default-exports.ts.
// Uso: node .design-sync/build-pkg.mjs
import { compile, optimize } from '@tailwindcss/node';
import { Scanner } from '@tailwindcss/oxide';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const pkg = join(root, '.design-sync/.cache/pkg');
rmSync(pkg, { recursive: true, force: true });
mkdirSync(pkg, { recursive: true });

// 1. CSS
const entry = join(root, 'src/styles/global.css');
const compiler = await compile(readFileSync(entry, 'utf8'), { base: dirname(entry), onDependency: () => {} });
const scanner = new Scanner({
  sources: [
    { base: join(root, 'src'), pattern: '**/*', negated: false },
    { base: join(root, '.design-sync/previews'), pattern: '**/*', negated: false },
  ],
});
const css = optimize(compiler.build(scanner.scan()), { minify: false }).code;
writeFileSync(
  join(pkg, 'blog.css'),
  '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");\n' + css,
);

// 2. Tipos (erros de tipo pré-existentes não impedem a emissão)
try {
  execFileSync(join(root, 'node_modules/.bin/tsc'), ['-p', join(root, '.design-sync/tsconfig.types.json')], { stdio: 'pipe' });
} catch { /* noEmitOnError: false */ }

// 3. Barril de tipos: um export * por componente + os export default nomeados
const defaults = {
  HeaderLink: 'components/header-link',
  LoginSection: 'components/blocks/login-section',
  SignupSection: 'components/blocks/signup-section',
};
const files = [];
for (const dir of ['components', 'components/ui', 'components/blocks']) {
  for (const f of readdirSync(join(pkg, 'types', dir))) if (f.endsWith('.d.ts')) files.push(`${dir}/${f.slice(0, -5)}`);
}
writeFileSync(
  join(pkg, 'types/index.d.ts'),
  files.map((f) => `export * from "./${f}";`).join('\n') + '\n' +
    Object.entries(defaults).map(([n, f]) => `export { default as ${n} } from "./${f}";`).join('\n') + '\n',
);
writeFileSync(
  join(pkg, 'default-exports.ts'),
  Object.entries(defaults).map(([n, f]) => `export { default as ${n} } from "./src/${f}";`).join('\n') + '\n',
);

// 4. package.json + links
const { version } = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
writeFileSync(join(pkg, 'package.json'), JSON.stringify({ name: 'mainline-astro-template', version, types: 'types/index.d.ts' }, null, 2));
for (const l of ['src', 'node_modules', 'tsconfig.json']) symlinkSync(relative(pkg, join(root, l)), join(pkg, l));
console.log(`pkg: ${files.length} .d.ts, blog.css ${(css.length / 1024).toFixed(0)} KiB -> ${relative(root, pkg)}`);
