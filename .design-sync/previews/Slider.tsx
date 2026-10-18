import { Label, Slider } from "mainline-astro-template";

export const Default = () => (
  <div className="flex flex-col gap-3" style={{ maxWidth: 360 }}>
    <Label>Horas de sono por noite</Label>
    <Slider defaultValue={[7]} min={3} max={11} step={1} />
    <p className="text-sm text-muted-foreground">7 horas</p>
  </div>
);

export const Range = () => (
  <div className="flex flex-col gap-3" style={{ maxWidth: 360 }}>
    <Label>Tempo de leitura (minutos)</Label>
    <Slider defaultValue={[5, 15]} min={0} max={30} step={1} />
    <p className="text-sm text-muted-foreground">De 5 a 15 minutos</p>
  </div>
);

export const Disabled = () => (
  <div className="flex flex-col gap-3" style={{ maxWidth: 360 }}>
    <Label>Nível de atenção relatado</Label>
    <Slider defaultValue={[60]} max={100} disabled />
  </div>
);
