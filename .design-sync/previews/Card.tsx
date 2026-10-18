import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "mainline-astro-template";

export const Topic = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Memória de trabalho</CardTitle>
      <CardDescription>Funções executivas · 6 min de leitura</CardDescription>
      <CardAction>
        <Badge>Novo</Badge>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-sm">
        Como o córtex pré-frontal mantém informações ativas por alguns segundos, e o que
        acontece quando a sobrecarga cognitiva passa do limite.
      </p>
    </CardContent>
    <CardFooter>
      <Button variant="link" className="px-0">
        Ler o artigo
      </Button>
    </CardFooter>
  </Card>
);

export const Simple = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Avaliação de risco</CardTitle>
      <CardDescription>Responda 12 perguntas e veja onde a atenção falha.</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button>Começar avaliação</Button>
    </CardFooter>
  </Card>
);
