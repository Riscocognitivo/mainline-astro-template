import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "mainline-astro-template";

export const Default = () => (
  <div className="flex justify-center p-6">
    <Menubar defaultValue="artigo">
      <MenubarMenu value="artigo">
        <MenubarTrigger>Artigo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Novo rascunho <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Duplicar <MenubarShortcut>⌘D</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exportar PDF</MenubarItem>
          <MenubarItem disabled>Publicar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="editar">
        <MenubarTrigger>Editar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Desfazer</MenubarItem>
          <MenubarItem>Refazer</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="exibir">
        <MenubarTrigger>Exibir</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Mostrar referências</MenubarCheckboxItem>
          <MenubarCheckboxItem>Modo foco</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
);

export const Exibir = () => (
  <div className="flex justify-center p-6">
    <Menubar defaultValue="exibir">
      <MenubarMenu value="artigo">
        <MenubarTrigger>Artigo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Novo rascunho</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="exibir">
        <MenubarTrigger>Exibir</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Mostrar referências</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Tempo de leitura</MenubarCheckboxItem>
          <MenubarCheckboxItem>Modo foco</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>Tela cheia</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
);
