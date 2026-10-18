import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "mainline-astro-template";

const temas = ["Atenção", "Memória de trabalho", "Controle inibitório", "Flexibilidade", "Planejamento"];

const Slide = ({ titulo, n }: { titulo: string; n: number }) => (
  <Card>
    <CardContent
      className="flex flex-col items-center justify-center gap-2"
      style={{ minHeight: 160 }}
    >
      <span className="text-muted-foreground text-sm">Artigo {n}</span>
      <span className="text-2xl font-semibold" style={{ textAlign: "center" }}>{titulo}</span>
    </CardContent>
  </Card>
);

export const Default = () => (
  <div style={{ padding: "0 56px", maxWidth: 480 }}>
    <Carousel>
      <CarouselContent>
        {temas.map((t, i) => (
          <CarouselItem key={t}>
            <Slide titulo={t} n={i + 1} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export const MultipleVisible = () => (
  <div style={{ padding: "0 56px", maxWidth: 720 }}>
    <Carousel opts={{ align: "start" }}>
      <CarouselContent>
        {temas.map((t, i) => (
          <CarouselItem key={t} style={{ flexBasis: "50%" }}>
            <Slide titulo={t} n={i + 1} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);
