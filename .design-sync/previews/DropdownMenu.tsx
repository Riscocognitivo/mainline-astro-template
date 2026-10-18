import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Button,
} from "mainline-astro-template";
import { Bookmark, LogOut, Settings, User } from "lucide-react";

export const Default = () => (
  <div className="flex justify-center p-6">
    <DropdownMenu defaultOpen modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Minha conta</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{ width: 224 }}>
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User /> Perfil
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bookmark /> Artigos salvos
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings /> Configurações
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export const Selecao = () => (
  <div className="flex justify-center p-6">
    <DropdownMenu defaultOpen modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filtrar artigos</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{ width: 240 }}>
        <DropdownMenuLabel>Temas</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked>Funções executivas</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>Atenção</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Córtex pré-frontal</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="recentes">
          <DropdownMenuRadioItem value="recentes">Mais recentes</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="lidos">Mais lidos</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
