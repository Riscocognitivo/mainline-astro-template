# Risco Cognitivo — blog (base: Mainline Astro)

O design system deste site é o **Risco Cognitivo**, em `design-system/`. Ele substituiu o design system do template Mainline (shadcn/oklch, DM Sans). Antes de criar ou alterar qualquer tela, leia:

1. `design-system/readme.md`: fundamentos visuais, conteúdo, iconografia e marca.
2. `design-system/docs/guidelines.md`: regras verificáveis (COR, TIP, ESP, DES, ACE…) com severidade. A fonte é o `.docx` na mesma pasta.
3. `.claude/skills/estilo-risco-cognitivo/`: estilo de escrita (artigo JF-02 e relatório executivo), com o validador `scripts/validate_style.py`.

## Como o design system chega ao código

- `design-system/tokens/*.css` é a **fonte única** dos valores. Não copie hex nem px para componentes.
- `src/styles/global.css` só liga esses tokens ao Tailwind 4 e aos papéis do shadcn/ui (`--background`, `--primary`…). A escala `text-xs…text-9xl`, os raios `rounded-*` e as sombras `shadow-*` foram remapeados para os tokens.
- O `base.css` do design system entra na camada `ds-base`, abaixo do reset do Tailwind. As classes de `components/components.css` (`.btn`, `.tag`, `.card`…) ficam disponíveis em `@layer components` para HTML puro.
- Tema escuro: `data-theme="dark"` no `<html>` (variante `dark:` do Tailwind). Não use a classe `.dark`.
- Marca: `src/components/logo.tsx` (cérebro tricolor + nome em 600). Não redesenhe nem recolora o símbolo.

## Regras que mais quebram

- Um único azul preenchido (`variant="default"`) por vista. Botões em pílula com alvo de toque ≥ 44px.
- Sem gradientes, texturas ou cards com borda colorida. Cards: superfície plana, raio 18, sem sombra.
- Títulos com peso máximo de 600 e nada abaixo de 400. Texto ≥ 4,5:1 de contraste nos dois temas.
- Sem "Lorem ipsum" em material publicado (ESC-13). Sem "clique aqui" (ESC-03).

## Claude Design

`design-system/` é o export do projeto no Claude Design (`_ds_manifest.json`, `_ds_bundle.js`, `guidelines/*.html` com `@dsCard`). Para atualizar, reexporte do Claude Design e substitua a pasta inteira. Os nomes dos tokens são o contrato com o `global.css`: renomear um token exige atualizar esse arquivo.
