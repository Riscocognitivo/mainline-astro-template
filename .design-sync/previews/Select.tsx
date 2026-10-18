import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "mainline-astro-template";

export const Open = () => (
  <div className="flex flex-col gap-2" style={{ width: 280 }}>
    <Label>Tema do artigo</Label>
    <Select defaultOpen defaultValue="memoria">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Escolha um tema" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Funções executivas</SelectLabel>
          <SelectItem value="atencao">Atenção</SelectItem>
          <SelectItem value="memoria">Memória de trabalho</SelectItem>
          <SelectItem value="controle">Controle inibitório</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Neurociência</SelectLabel>
          <SelectItem value="cortex">Córtex pré-frontal</SelectItem>
          <SelectItem value="sono">Sono e cognição</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

export const Closed = () => (
  <div className="flex flex-col gap-2" style={{ width: 280 }}>
    <Label>Faixa etária</Label>
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione a faixa" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="18-39">18 a 39 anos</SelectItem>
        <SelectItem value="40-59">40 a 59 anos</SelectItem>
        <SelectItem value="60+">60 anos ou mais</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export const Small = () => (
  <Select defaultValue="recentes">
    <SelectTrigger size="sm" style={{ width: 200 }}>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="recentes">Mais recentes</SelectItem>
      <SelectItem value="lidos">Mais lidos</SelectItem>
    </SelectContent>
  </Select>
);
