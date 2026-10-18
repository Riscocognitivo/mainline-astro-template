import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "mainline-astro-template";

export const Default = () => (
  <AlertDialog defaultOpen>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Recomeçar avaliação</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Recomeçar a avaliação?</AlertDialogTitle>
        <AlertDialogDescription>
          As respostas sobre atenção sustentada já registradas serão descartadas e o questionário volta à
          primeira pergunta.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Continuar de onde parei</AlertDialogCancel>
        <AlertDialogAction>Recomeçar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const Destrutivo = () => (
  <AlertDialog defaultOpen>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Excluir seu histórico?</AlertDialogTitle>
        <AlertDialogDescription>
          Esta ação remove de forma permanente todas as avaliações de risco cognitivo e as anotações
          salvas. Não é possível desfazer.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button variant="destructive">Excluir histórico</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
