import { Input, Label } from "mainline-astro-template";

export const Default = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 360 }}>
    <Label htmlFor="email-newsletter">E-mail</Label>
    <Input id="email-newsletter" type="email" placeholder="voce@exemplo.com.br" />
  </div>
);

export const Filled = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 360 }}>
    <Label htmlFor="nome-leitor">Nome</Label>
    <Input id="nome-leitor" defaultValue="Ana Ribeiro" />
  </div>
);

export const Invalid = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 360 }}>
    <Label htmlFor="email-invalido">E-mail</Label>
    <Input id="email-invalido" type="email" aria-invalid defaultValue="ana.ribeiro@" />
    <p className="text-sm" style={{ color: "var(--destructive)" }}>
      Informe um e-mail completo.
    </p>
  </div>
);

export const Disabled = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 360 }}>
    <Label htmlFor="codigo-avaliacao">Código da avaliação</Label>
    <Input id="codigo-avaliacao" disabled defaultValue="RC-2026-0418" />
  </div>
);
