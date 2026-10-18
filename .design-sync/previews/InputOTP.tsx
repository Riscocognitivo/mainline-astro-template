import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label } from "mainline-astro-template";

export const Default = () => (
  <div className="flex flex-col gap-3">
    <Label>Código de verificação</Label>
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    <p className="text-sm text-muted-foreground">Enviamos o código para o seu e-mail.</p>
  </div>
);

export const Filled = () => (
  <InputOTP maxLength={6} defaultValue="418273">
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
);

export const Invalid = () => (
  <div className="flex flex-col gap-3">
    <InputOTP maxLength={4} defaultValue="9021">
      <InputOTPGroup>
        <InputOTPSlot index={0} aria-invalid />
        <InputOTPSlot index={1} aria-invalid />
        <InputOTPSlot index={2} aria-invalid />
        <InputOTPSlot index={3} aria-invalid />
      </InputOTPGroup>
    </InputOTP>
    <p className="text-sm" style={{ color: "var(--destructive)" }}>
      Código incorreto. Confira e tente de novo.
    </p>
  </div>
);
