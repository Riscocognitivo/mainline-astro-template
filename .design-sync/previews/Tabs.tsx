import { Tabs, TabsContent, TabsList, TabsTrigger } from "mainline-astro-template";

export const Default = () => (
  <Tabs defaultValue="artigos" className="w-full max-w-md">
    <TabsList>
      <TabsTrigger value="artigos">Artigos</TabsTrigger>
      <TabsTrigger value="guias">Guias</TabsTrigger>
      <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
    </TabsList>
    <TabsContent value="artigos">
      <p className="text-muted-foreground text-sm">
        Textos sobre atenção, memória de trabalho e o papel do córtex pré-frontal nas decisões do
        dia a dia.
      </p>
    </TabsContent>
    <TabsContent value="guias">
      <p className="text-muted-foreground text-sm">Roteiros práticos para reduzir distrações.</p>
    </TabsContent>
    <TabsContent value="avaliacoes">
      <p className="text-muted-foreground text-sm">Questionários de risco cognitivo.</p>
    </TabsContent>
  </Tabs>
);

export const SecondSelected = () => (
  <Tabs defaultValue="mes" className="w-full max-w-md">
    <TabsList>
      <TabsTrigger value="semana">Semana</TabsTrigger>
      <TabsTrigger value="mes">Mês</TabsTrigger>
      <TabsTrigger value="ano" disabled>
        Ano
      </TabsTrigger>
    </TabsList>
    <TabsContent value="mes">
      <p className="text-muted-foreground text-sm">
        Neste mês, 4 artigos novos sobre funções executivas.
      </p>
    </TabsContent>
  </Tabs>
);
