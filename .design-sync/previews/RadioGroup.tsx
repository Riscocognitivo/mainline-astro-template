import { Label, RadioGroup, RadioGroupItem } from "mainline-astro-template";

export const Default = () => (
  <RadioGroup defaultValue="as-vezes">
    <div className="flex items-center gap-2">
      <RadioGroupItem value="nunca" id="rg-nunca" />
      <Label htmlFor="rg-nunca">Nunca</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="as-vezes" id="rg-as-vezes" />
      <Label htmlFor="rg-as-vezes">Às vezes</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="frequente" id="rg-frequente" />
      <Label htmlFor="rg-frequente">Com frequência</Label>
    </div>
  </RadioGroup>
);

export const WithQuestion = () => (
  <div className="flex flex-col gap-3" style={{ maxWidth: 420 }}>
    <p className="text-sm font-medium">Com que frequência você esquece o que ia fazer ao mudar de cômodo?</p>
    <RadioGroup defaultValue="semanal">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="raro" id="rq-raro" />
        <Label htmlFor="rq-raro">Raramente</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="semanal" id="rq-semanal" />
        <Label htmlFor="rq-semanal">Algumas vezes por semana</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="diario" id="rq-diario" />
        <Label htmlFor="rq-diario">Todos os dias</Label>
      </div>
    </RadioGroup>
  </div>
);

export const Disabled = () => (
  <RadioGroup defaultValue="online" disabled>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="online" id="rd-online" />
      <Label htmlFor="rd-online">Avaliação on-line</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="presencial" id="rd-presencial" />
      <Label htmlFor="rd-presencial">Avaliação presencial</Label>
    </div>
  </RadioGroup>
);
