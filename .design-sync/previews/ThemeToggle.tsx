import { ThemeToggle } from "mainline-astro-template";

export const Default = () => <ThemeToggle />;

export const NoCabecalho = () => (
  <div
    className="flex items-center justify-between"
    style={{ gap: "var(--space-4)", maxWidth: 360, padding: "var(--space-3) var(--space-4)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-pill)" }}
  >
    <span className="text-sm text-muted-foreground">Tema da leitura</span>
    <ThemeToggle />
  </div>
);
