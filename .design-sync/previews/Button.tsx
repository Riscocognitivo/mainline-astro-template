import { Button } from "mainline-astro-template";
import { ArrowRight, Brain, Search } from "lucide-react";

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button>Começar avaliação</Button>
    <Button variant="outline">Saiba mais</Button>
    <Button variant="secondary">Salvar rascunho</Button>
    <Button variant="ghost">Cancelar</Button>
    <Button variant="link">Ler o artigo</Button>
    <Button variant="destructive">Excluir</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button size="sm">Avaliar</Button>
    <Button>Avaliar</Button>
    <Button size="lg">Avaliar</Button>
  </div>
);

export const WithIcon = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button>
      <Brain /> Explorar o cérebro
    </Button>
    <Button variant="outline">
      Ver todos os temas <ArrowRight />
    </Button>
    <Button size="icon" variant="outline" aria-label="Buscar">
      <Search />
    </Button>
  </div>
);

export const Disabled = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button disabled>Indisponível</Button>
    <Button variant="outline" disabled>
      Em breve
    </Button>
  </div>
);
