import { Badge } from "mainline-astro-template";
import { Brain, Clock } from "lucide-react";

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge>Novo artigo</Badge>
    <Badge variant="secondary">Atenção</Badge>
    <Badge variant="outline">Memória de trabalho</Badge>
    <Badge variant="destructive">Risco alto</Badge>
  </div>
);

export const WithIcon = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge>
      <Brain />
      Funções executivas
    </Badge>
    <Badge variant="secondary">
      <Clock />6 min de leitura
    </Badge>
  </div>
);

export const ArticleTags = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 360 }}>
    <p className="text-sm text-muted-foreground">Temas do artigo</p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">Córtex pré-frontal</Badge>
      <Badge variant="secondary">Sobrecarga cognitiva</Badge>
      <Badge variant="secondary">Tomada de decisão</Badge>
    </div>
  </div>
);
