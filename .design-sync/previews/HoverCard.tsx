import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Avatar,
  AvatarFallback,
  Button,
} from "mainline-astro-template";

export const Default = () => (
  <div className="flex justify-center p-6">
    <HoverCard defaultOpen>
      <HoverCardTrigger asChild>
        <Button variant="link">@riscocognitivo</Button>
      </HoverCardTrigger>
      <HoverCardContent style={{ width: 320 }}>
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>RC</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Risco Cognitivo</h4>
            <p className="text-sm">
              Jornalismo científico sobre funções executivas, atenção e memória de trabalho.
            </p>
            <p className="text-xs text-muted-foreground">Publicando desde março de 2024</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);

export const Definicao = () => (
  <div className="flex justify-center p-6" style={{ paddingTop: 160 }}>
    <p className="text-sm" style={{ maxWidth: 420 }}>
      O desempenho cai quando a{" "}
      <HoverCard defaultOpen>
        <HoverCardTrigger asChild>
          <a href="#" className="font-medium underline">
            memória de trabalho
          </a>
        </HoverCardTrigger>
        <HoverCardContent side="top">
          <p className="text-sm">
            Sistema que mantém e manipula poucas informações por alguns segundos, como um número de
            telefone enquanto você o digita.
          </p>
        </HoverCardContent>
      </HoverCard>{" "}
      está sobrecarregada por interrupções.
    </p>
  </div>
);
