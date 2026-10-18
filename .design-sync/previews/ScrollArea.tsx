import { ScrollArea, ScrollBar, Separator } from "mainline-astro-template";

const temas = [
  "Atenção sustentada",
  "Atenção seletiva",
  "Memória de trabalho",
  "Controle inibitório",
  "Flexibilidade cognitiva",
  "Planejamento",
  "Fadiga de decisão",
  "Sobrecarga cognitiva",
  "Córtex pré-frontal",
  "Sono e consolidação",
  "Multitarefa",
  "Vieses de julgamento",
];

export const Vertical = () => (
  <ScrollArea type="always" className="rounded-md border" style={{ height: 220, width: 260 }}>
    <div className="p-4">
      <p className="text-sm font-medium" style={{ marginBottom: "var(--space-3)" }}>
        Temas do blog
      </p>
      {temas.map((t) => (
        <div key={t}>
          <div className="text-sm">{t}</div>
          <Separator style={{ margin: "var(--space-2) 0" }} />
        </div>
      ))}
    </div>
  </ScrollArea>
);

export const Horizontal = () => (
  <ScrollArea type="always" className="rounded-md border whitespace-nowrap" style={{ width: 360 }}>
    <div className="flex gap-3 p-4" style={{ width: "max-content" }}>
      {temas.slice(0, 7).map((t) => (
        <div
          key={t}
          className="bg-muted rounded-md flex items-center justify-center text-sm"
          style={{ width: 140, height: 80 }}
        >
          {t}
        </div>
      ))}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);
