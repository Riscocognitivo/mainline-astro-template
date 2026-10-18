import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from "mainline-astro-template";

export const Default = () => (
  <Drawer defaultOpen>
    <DrawerTrigger asChild>
      <Button variant="outline">Ver resumo</Button>
    </DrawerTrigger>
    <DrawerContent>
      <div style={{ maxWidth: 420, margin: "0 auto", width: "100%" }}>
        <DrawerHeader>
          <DrawerTitle>Resumo do artigo</DrawerTitle>
          <DrawerDescription>
            A memória de trabalho guarda poucas informações por alguns segundos. Interrupções frequentes
            reduzem o desempenho em tarefas que exigem planejamento.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Ler o artigo</Button>
          <DrawerClose asChild>
            <Button variant="outline">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
);
