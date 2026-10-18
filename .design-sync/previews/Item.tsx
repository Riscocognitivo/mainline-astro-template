import {
  Badge,
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "mainline-astro-template";
import { Brain, ChevronRight, Eye, Timer } from "lucide-react";

export const Outline = () => (
  <Item variant="outline" style={{ maxWidth: 440 }}>
    <ItemMedia variant="icon">
      <Brain />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Avaliação de risco cognitivo</ItemTitle>
      <ItemDescription>12 perguntas sobre atenção, memória e controle inibitório.</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="sm">Começar</Button>
    </ItemActions>
  </Item>
);

export const Muted = () => (
  <Item variant="muted" size="sm" style={{ maxWidth: 440 }}>
    <ItemContent>
      <ItemTitle>
        Memória de trabalho <Badge variant="secondary">Novo</Badge>
      </ItemTitle>
    </ItemContent>
    <ItemActions>
      <ChevronRight className="size-4" />
    </ItemActions>
  </Item>
);

export const Group = () => (
  <ItemGroup className="border rounded-lg" style={{ maxWidth: 440 }}>
    <Item>
      <ItemMedia variant="icon">
        <Eye />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Atenção seletiva</ItemTitle>
        <ItemDescription>Como o cérebro filtra estímulos irrelevantes.</ItemDescription>
      </ItemContent>
    </Item>
    <ItemSeparator />
    <Item>
      <ItemMedia variant="icon">
        <Timer />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Fadiga de decisão</ItemTitle>
        <ItemDescription>Por que escolhas pioram ao fim do dia.</ItemDescription>
      </ItemContent>
    </Item>
  </ItemGroup>
);
