# design-sync — notas do repositório

Projeto Claude Design: "Design System" (`1a9a97b3-bb61-48b5-a87b-a875df63c762`). Shape: package, sem Storybook.

## Como o pacote é montado
- O blog não é um pacote publicado (sem `main`, `types` ou `dist/`). `node .design-sync/build-pkg.mjs` (o `buildCmd`) gera um pacote local em `.design-sync/.cache/pkg/` com:
  - `blog.css`: `src/styles/global.css` compilado com `@tailwindcss/node` + oxide, escaneando `src/` **e `.design-sync/previews/`**, mais o `@import` da Inter (o site a carrega no `BaseHead.astro`). Prévia nova com classe nova → rode o `buildCmd` antes do `package-build`.
  - `types/`: `.d.ts` reais via `tsc -p .design-sync/tsconfig.types.json`. Sem isso, o conversor varre a raiz do repo e pega os `.d.ts` antigos de `design-system/components/` (Button, Card, Dialog, Table e RadioGroup saíam com a API errada). O `tsc` acusa 2 erros pré-existentes (blog-post.tsx, sidebar.tsx); a emissão continua (`noEmitOnError: false`).
  - `default-exports.ts`: HeaderLink, LoginSection e SignupSection usam `export default`, que o `export *` da entrada sintetizada não alcança. Vai em `extraEntries`. O aviso `[EXPORT_COLLISION]` para esses três é esperado.
- Antes do conversor, em cada clone: `ln -sfn ../.design-sync/.cache/pkg node_modules/mainline-astro-template` (o link fica em `node_modules`, fora do git).
- Comandos:
  ```sh
  node .design-sync/build-pkg.mjs
  ln -sfn ../.design-sync/.cache/pkg node_modules/mainline-astro-template
  node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./node_modules --out ./ds-bundle
  node .ds-sync/package-validate.mjs ./ds-bundle
  ```
- Playwright: chromium em `/opt/pw-browsers/chromium-1194` → `playwright@1.56.1` em `.ds-sync/`.

## Componentes
- Um card por arquivo de `src/components/` (ui, blocks e os 5 da raiz). Subpartes (CardHeader, DialogContent…) ficam no bundle sem card: `componentSrcMap: null`. Raízes especiais: `ChartContainer` (chart.tsx) e `ResizablePanelGroup` (resizable.tsx).
- `FAQ` (blocks/faq.tsx) não ganha card: o conversor trata nome só em maiúsculas como constante. Continua exportado no bundle (`window.RiscoCognitivoBlog.FAQ`).
- Seções (group blocks) usam imagens de `/public` por caminho absoluto. As prévias as reescrevem para `raw.githubusercontent.com/Riscocognitivo/mainline-astro-template/master/public` (helper `SitePublic` em cada prévia de seção). Num design gerado pelo Claude Design, essas imagens não carregam.

## Re-sync risks
- `build-pkg.mjs` depende de APIs internas do `@tailwindcss/node`/`@tailwindcss/oxide` 4.1 (`compile`, `Scanner`). Um upgrade do Tailwind pode quebrar o script.
- O helper `SitePublic` aponta para o branch `master` do GitHub: imagens renomeadas ou removidas de `public/` quebram as prévias das seções.
- Os textos de demonstração do Mainline nas seções (inglês, depoimentos, logos) vão para o Claude Design como estão.
- `design-system/` (export antigo do Claude Design) continua no repo e contém `.d.ts`. Se o `types` do pacote local deixar de ser gerado, a contaminação volta.
