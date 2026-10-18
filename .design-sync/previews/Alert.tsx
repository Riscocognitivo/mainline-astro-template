import { Alert, AlertDescription, AlertTitle } from "mainline-astro-template";
import { Info, TriangleAlert } from "lucide-react";

export const Default = () => (
  <Alert className="max-w-md">
    <Info />
    <AlertTitle>Conteúdo educativo</AlertTitle>
    <AlertDescription>Este material não substitui avaliação clínica.</AlertDescription>
  </Alert>
);

export const Destructive = () => (
  <Alert variant="destructive" className="max-w-md">
    <TriangleAlert />
    <AlertTitle>Não foi possível salvar</AlertTitle>
    <AlertDescription>Verifique a conexão e tente de novo.</AlertDescription>
  </Alert>
);
