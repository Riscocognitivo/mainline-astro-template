import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Input,
  Label,
} from "mainline-astro-template";

export const Default = () => (
  <Dialog defaultOpen>
    <DialogTrigger asChild>
      <Button variant="outline">Assinar newsletter</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Receba os novos artigos</DialogTitle>
        <DialogDescription>
          Um e-mail por semana sobre atenção, memória de trabalho e funções executivas. Sem spam.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-2">
        <Label htmlFor="email-newsletter">E-mail</Label>
        <Input id="email-newsletter" type="email" placeholder="voce@exemplo.com.br" />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Agora não</Button>
        </DialogClose>
        <Button>Assinar</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const SemBotaoFechar = () => (
  <Dialog defaultOpen>
    <DialogContent showCloseButton={false}>
      <DialogHeader>
        <DialogTitle>Avaliação concluída</DialogTitle>
        <DialogDescription>
          Suas respostas sobre controle inibitório e flexibilidade cognitiva foram salvas. O relatório fica
          disponível no seu painel.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button>Ver relatório</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
