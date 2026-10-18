import { Checkbox, Input, Label } from "mainline-astro-template";

export const Default = () => <Label>Funções executivas</Label>;

export const WithInput = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 360 }}>
    <Label htmlFor="label-idade">Idade</Label>
    <Input id="label-idade" type="number" defaultValue={42} />
  </div>
);

export const WithCheckbox = () => (
  <div className="flex items-center gap-2">
    <Checkbox id="label-termos" defaultChecked />
    <Label htmlFor="label-termos">Aceito os termos da avaliação</Label>
  </div>
);
