import { Popover, PopoverContent, PopoverTrigger, Button, Input, Label } from "mainline-astro-template";

export const Default = () => (
  <div className="flex justify-center p-6">
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant="outline">Ajustar lembretes</Button>
      </PopoverTrigger>
      <PopoverContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium">Pausas de foco</h4>
            <p className="text-sm text-muted-foreground">
              Defina o intervalo entre blocos de atenção sustentada.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bloco-foco">Bloco (min)</Label>
            <Input id="bloco-foco" defaultValue="25" />
            <Label htmlFor="pausa-foco">Pausa (min)</Label>
            <Input id="pausa-foco" defaultValue="5" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
);

export const Informativo = () => (
  <div className="flex justify-center p-6">
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant="ghost">O que é controle inibitório?</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm">
          É a capacidade de frear uma resposta automática para agir conforme o objetivo. Faz parte das
          funções executivas, junto com a memória de trabalho e a flexibilidade cognitiva.
        </p>
      </PopoverContent>
    </Popover>
  </div>
);
