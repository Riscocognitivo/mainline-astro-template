import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
  Input,
  Label,
} from "mainline-astro-template";

export const Direita = () => (
  <Sheet defaultOpen>
    <SheetTrigger asChild>
      <Button variant="outline">Editar perfil</Button>
    </SheetTrigger>
    <SheetContent onOpenAutoFocus={(e) => e.preventDefault()}>
      <SheetHeader>
        <SheetTitle>Preferências de leitura</SheetTitle>
        <SheetDescription>Escolha os temas que aparecem primeiro no seu feed do blog.</SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 p-4">
        <div className="grid gap-2">
          <Label htmlFor="nome-leitor">Nome</Label>
          <Input id="nome-leitor" defaultValue="Ana Ribeiro" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tema-leitor">Tema principal</Label>
          <Input id="tema-leitor" defaultValue="Memória de trabalho" />
        </div>
      </div>
      <SheetFooter>
        <Button>Salvar</Button>
        <SheetClose asChild>
          <Button variant="outline">Cancelar</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export const Esquerda = () => (
  <Sheet defaultOpen>
    <SheetContent side="left" onOpenAutoFocus={(e) => e.preventDefault()}>
      <SheetHeader>
        <SheetTitle>Temas do blog</SheetTitle>
        <SheetDescription>Navegue pelos artigos por área.</SheetDescription>
      </SheetHeader>
      <nav className="grid gap-2 p-4 text-sm">
        <a href="#">Funções executivas</a>
        <a href="#">Atenção e foco</a>
        <a href="#">Memória de trabalho</a>
        <a href="#">Córtex pré-frontal</a>
        <a href="#">Avaliação de risco cognitivo</a>
      </nav>
    </SheetContent>
  </Sheet>
);
