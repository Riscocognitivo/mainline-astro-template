import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "mainline-astro-template";
import { BookOpen, SearchX } from "lucide-react";

export const NoArticles = () => (
  <Empty className="border" style={{ maxWidth: 480 }}>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <BookOpen />
      </EmptyMedia>
      <EmptyTitle>Nenhum artigo salvo</EmptyTitle>
      <EmptyDescription>
        Salve artigos sobre funções executivas para ler depois, sem perder o fio da leitura.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button>Explorar artigos</Button>
    </EmptyContent>
  </Empty>
);

export const NoResults = () => (
  <Empty style={{ maxWidth: 480 }}>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <SearchX />
      </EmptyMedia>
      <EmptyTitle>Nada encontrado</EmptyTitle>
      <EmptyDescription>
        Nenhum resultado para "neuroplasticidade". Tente outro termo ou navegue pelos temas.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button variant="outline">Limpar busca</Button>
    </EmptyContent>
  </Empty>
);
