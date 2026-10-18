import { DashedLine } from "mainline-astro-template";

export const Horizontal = () => (
  <div style={{ width: 360 }}>
    <p className="text-sm text-foreground">Atenção sustentada</p>
    <div style={{ margin: "var(--space-3) 0" }}>
      <DashedLine />
    </div>
    <p className="text-sm text-foreground">Controle inibitório</p>
  </div>
);

export const Vertical = () => (
  <div className="flex items-center" style={{ height: 120, gap: "var(--space-4)" }}>
    <span className="text-sm text-foreground">Memória de trabalho</span>
    <DashedLine orientation="vertical" />
    <span className="text-sm text-foreground">Flexibilidade cognitiva</span>
  </div>
);
