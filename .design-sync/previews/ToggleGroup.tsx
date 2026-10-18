import { ToggleGroup, ToggleGroupItem } from "mainline-astro-template";
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from "lucide-react";

export const Single = () => (
  <ToggleGroup type="single" defaultValue="left" aria-label="Alinhamento do texto">
    <ToggleGroupItem value="left" aria-label="Alinhar à esquerda">
      <AlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Centralizar">
      <AlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Alinhar à direita">
      <AlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Multiple = () => (
  <ToggleGroup type="multiple" variant="outline" defaultValue={["bold"]} aria-label="Formatação">
    <ToggleGroupItem value="bold" aria-label="Negrito">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Itálico">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Sublinhado">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Filter = () => (
  <ToggleGroup type="single" variant="outline" defaultValue="todos" aria-label="Filtrar artigos">
    <ToggleGroupItem value="todos" className="px-3">Todos</ToggleGroupItem>
    <ToggleGroupItem value="atencao" className="px-3">Atenção</ToggleGroupItem>
    <ToggleGroupItem value="memoria" className="px-3">Memória</ToggleGroupItem>
  </ToggleGroup>
);
