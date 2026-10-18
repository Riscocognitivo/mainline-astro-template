import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "mainline-astro-template";
import { ArrowUp, Mail, Search } from "lucide-react";

export const WithIcon = () => (
  <InputGroup style={{ maxWidth: 400 }}>
    <InputGroupInput placeholder="Buscar artigos sobre atenção" />
    <InputGroupAddon>
      <Search />
    </InputGroupAddon>
  </InputGroup>
);

export const WithButton = () => (
  <InputGroup style={{ maxWidth: 400 }}>
    <InputGroupAddon>
      <Mail />
    </InputGroupAddon>
    <InputGroupInput type="email" placeholder="voce@exemplo.com.br" />
    <InputGroupAddon align="inline-end">
      <InputGroupButton variant="secondary">Assinar</InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export const WithText = () => (
  <InputGroup style={{ maxWidth: 400 }}>
    <InputGroupAddon>
      <InputGroupText>riscocognitivo.com.br/</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput defaultValue="memoria-de-trabalho" />
  </InputGroup>
);

export const WithTextarea = () => (
  <InputGroup style={{ maxWidth: 440 }}>
    <InputGroupTextarea placeholder="Pergunte sobre funções executivas e córtex pré-frontal" />
    <InputGroupAddon align="block-end">
      <InputGroupText>0 de 500 caracteres</InputGroupText>
      <InputGroupButton variant="default" size="icon-xs" className="ml-auto" aria-label="Enviar pergunta">
        <ArrowUp />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);
