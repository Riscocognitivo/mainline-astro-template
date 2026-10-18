import { Tooltip, TooltipContent, TooltipTrigger, Button } from "mainline-astro-template";
import { Bookmark } from "lucide-react";

export const Default = () => (
  <div className="flex justify-center p-6" style={{ paddingTop: 64 }}>
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Salvar artigo">
          <Bookmark />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Salvar para ler depois</TooltipContent>
    </Tooltip>
  </div>
);

export const Lados = () => (
  <div className="flex justify-center p-6" style={{ paddingTop: 64 }}>
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button variant="outline">Tempo de leitura</Button>
      </TooltipTrigger>
      <TooltipContent side="right">Cerca de 8 minutos</TooltipContent>
    </Tooltip>
  </div>
);
