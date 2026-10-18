import { Label, Switch } from "mainline-astro-template";

export const Default = () => (
  <div className="flex items-center gap-3">
    <Switch id="sw-modo-foco" />
    <Label htmlFor="sw-modo-foco">Modo foco</Label>
  </div>
);

export const Checked = () => (
  <div className="flex items-center gap-3">
    <Switch id="sw-lembretes" defaultChecked />
    <Label htmlFor="sw-lembretes">Lembretes de pausa</Label>
  </div>
);

export const SettingsList = () => (
  <div className="flex flex-col gap-4" style={{ maxWidth: 420 }}>
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <Label htmlFor="sw-resumo">Resumo semanal</Label>
        <p className="text-sm text-muted-foreground">Os artigos novos sobre atenção e memória.</p>
      </div>
      <Switch id="sw-resumo" defaultChecked />
    </div>
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <Label htmlFor="sw-alertas">Alertas de pesquisa</Label>
        <p className="text-sm text-muted-foreground">Avisos quando sair um estudo relevante.</p>
      </div>
      <Switch id="sw-alertas" />
    </div>
  </div>
);

export const Disabled = () => (
  <div className="flex items-center gap-3">
    <Switch id="sw-sync" disabled defaultChecked />
    <Label htmlFor="sw-sync">Sincronizar com o app (em breve)</Label>
  </div>
);
