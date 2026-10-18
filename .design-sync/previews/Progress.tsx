import { Progress } from "mainline-astro-template";

export const Assessment = () => (
  <div className="flex flex-col gap-2" style={{ width: 320 }}>
    <div className="flex items-center justify-between text-sm">
      <span className="font-medium">Avaliação de risco cognitivo</span>
      <span className="text-muted-foreground">7 de 12</span>
    </div>
    <Progress value={58} aria-label="Progresso da avaliação" />
  </div>
);

export const Values = () => (
  <div className="flex flex-col gap-4" style={{ width: 320 }}>
    <Progress value={15} aria-label="Leitura 15%" />
    <Progress value={50} aria-label="Leitura 50%" />
    <Progress value={90} aria-label="Leitura 90%" />
  </div>
);
