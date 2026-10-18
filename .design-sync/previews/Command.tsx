import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "mainline-astro-template";
import { Brain, Calculator, FileText, Search, Settings, User } from "lucide-react";

export const Default = () => (
  <Command className="rounded-lg border" style={{ maxWidth: 440 }}>
    <CommandInput placeholder="Buscar artigos ou comandos" />
    <CommandList>
      <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
      <CommandGroup heading="Artigos">
        <CommandItem>
          <FileText /> O que a memória de trabalho realmente guarda
        </CommandItem>
        <CommandItem>
          <Brain /> Córtex pré-frontal e tomada de decisão
        </CommandItem>
        <CommandItem>
          <Search /> Como medir a atenção sustentada
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Ações">
        <CommandItem>
          <Calculator /> Começar avaliação
          <CommandShortcut>⌘A</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <User /> Abrir perfil
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <Settings /> Configurações
          <CommandShortcut>⌘,</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);

export const SemResultado = () => (
  <Command className="rounded-lg border" style={{ maxWidth: 440 }}>
    <CommandInput placeholder="Buscar artigos ou comandos" value="neuroplasticidade infantil" />
    <CommandList>
      <CommandEmpty>Nenhum artigo encontrado para esse termo.</CommandEmpty>
      <CommandGroup heading="Artigos">
        <CommandItem>Funções executivas no dia a dia</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);
