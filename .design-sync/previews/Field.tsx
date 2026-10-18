import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Input,
  Switch,
  Textarea,
} from "mainline-astro-template";

export const Vertical = () => (
  <Field style={{ maxWidth: 380 }}>
    <FieldLabel htmlFor="f-email">E-mail</FieldLabel>
    <Input id="f-email" type="email" placeholder="voce@exemplo.com.br" />
    <FieldDescription>Enviamos um artigo por semana, sem spam.</FieldDescription>
  </Field>
);

export const Horizontal = () => (
  <Field orientation="horizontal" style={{ maxWidth: 420 }}>
    <Checkbox id="f-resumo" defaultChecked />
    <FieldContent>
      <FieldLabel htmlFor="f-resumo">Resumo semanal</FieldLabel>
      <FieldDescription>Os artigos novos sobre atenção e memória.</FieldDescription>
    </FieldContent>
  </Field>
);

export const WithError = () => (
  <Field data-invalid="true" style={{ maxWidth: 380 }}>
    <FieldLabel htmlFor="f-idade">Idade</FieldLabel>
    <Input id="f-idade" aria-invalid defaultValue="12" />
    <FieldError>A avaliação é para maiores de 18 anos.</FieldError>
  </Field>
);

export const FieldSetExample = () => (
  <FieldSet style={{ maxWidth: 440 }}>
    <FieldLegend>Seu perfil</FieldLegend>
    <FieldDescription>Usamos estes dados só para personalizar a avaliação.</FieldDescription>
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fs-nome">Nome</FieldLabel>
        <Input id="fs-nome" defaultValue="Ana Ribeiro" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fs-rotina">Rotina de estudo</FieldLabel>
        <Textarea id="fs-rotina" placeholder="Conte como você organiza o tempo de foco." />
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="fs-lembrete">Lembretes de pausa</FieldLabel>
          <FieldDescription>A cada 50 minutos de leitura.</FieldDescription>
        </FieldContent>
        <Switch id="fs-lembrete" />
      </Field>
    </FieldGroup>
  </FieldSet>
);
