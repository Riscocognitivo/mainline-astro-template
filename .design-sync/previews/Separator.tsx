import { Separator } from "mainline-astro-template";

export const Horizontal = () => (
  <div style={{ maxWidth: 360 }}>
    <div className="space-y-2">
      <p className="text-sm font-medium">Memória de trabalho</p>
      <p className="text-sm text-muted-foreground">
        O sistema que mantém informações ativas enquanto você decide.
      </p>
    </div>
    <Separator style={{ margin: "var(--space-4) 0" }} />
    <p className="text-sm text-muted-foreground">Funções executivas · 6 min de leitura</p>
  </div>
);

export const Vertical = () => (
  <div className="flex items-center gap-3 text-sm" style={{ height: 20 }}>
    <span>Artigos</span>
    <Separator orientation="vertical" />
    <span>Avaliação</span>
    <Separator orientation="vertical" />
    <span>Sobre</span>
  </div>
);
