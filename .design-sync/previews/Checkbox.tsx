import { Checkbox, Label } from "mainline-astro-template";

export const States = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <Checkbox id="cb-1" />
      <Label htmlFor="cb-1">Receber novos artigos</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="cb-2" defaultChecked />
      <Label htmlFor="cb-2">Resumo semanal por e-mail</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="cb-3" disabled />
      <Label htmlFor="cb-3">Convites para pesquisas (em breve)</Label>
    </div>
  </div>
);

export const WithDescription = () => (
  <div className="flex items-start gap-3" style={{ maxWidth: 420 }}>
    <Checkbox id="cb-consent" defaultChecked />
    <div className="flex flex-col gap-2">
      <Label htmlFor="cb-consent">Autorizo o uso anônimo das respostas</Label>
      <p className="text-sm text-muted-foreground">
        Os dados ajudam a calibrar a avaliação de risco cognitivo e nunca são vendidos.
      </p>
    </div>
  </div>
);

export const Invalid = () => (
  <div className="flex items-center gap-2">
    <Checkbox id="cb-inv" aria-invalid />
    <Label htmlFor="cb-inv">Li o aviso sobre avaliação clínica</Label>
  </div>
);
