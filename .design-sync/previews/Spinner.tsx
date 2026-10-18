import { Spinner, Button } from "mainline-astro-template";

export const Sizes = () => (
  <div className="flex items-center gap-4">
    <Spinner />
    <Spinner className="size-6" />
    <Spinner className="size-8" />
  </div>
);

export const InButton = () => (
  <Button disabled>
    <Spinner />
    Salvando
  </Button>
);

export const Loading = () => (
  <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <Spinner />
    Calculando seu resultado
  </div>
);
