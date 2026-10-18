import { Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "mainline-astro-template";
import { ChevronDown, Minus, Plus } from "lucide-react";

export const Default = () => (
  <ButtonGroup>
    <Button variant="outline">Artigos</Button>
    <Button variant="outline">Guias</Button>
    <Button variant="outline">Avaliações</Button>
  </ButtonGroup>
);

export const SplitAction = () => (
  <ButtonGroup>
    <Button>Salvar</Button>
    <ButtonGroupSeparator />
    <Button size="icon" aria-label="Mais opções de salvar">
      <ChevronDown />
    </Button>
  </ButtonGroup>
);

export const WithText = () => (
  <ButtonGroup>
    <ButtonGroupText>Tamanho do texto</ButtonGroupText>
    <Button variant="outline" size="icon" aria-label="Diminuir">
      <Minus />
    </Button>
    <Button variant="outline" size="icon" aria-label="Aumentar">
      <Plus />
    </Button>
  </ButtonGroup>
);

export const Vertical = () => (
  <ButtonGroup orientation="vertical">
    <Button variant="outline">Atenção</Button>
    <Button variant="outline">Memória</Button>
    <Button variant="outline">Decisão</Button>
  </ButtonGroup>
);
