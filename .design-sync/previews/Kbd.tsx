import { Kbd, KbdGroup } from "mainline-astro-template";

export const Single = () => (
  <div className="flex items-center gap-2">
    <Kbd>Esc</Kbd>
    <Kbd>Enter</Kbd>
    <Kbd>Tab</Kbd>
  </div>
);

export const Combo = () => (
  <KbdGroup>
    <Kbd>Ctrl</Kbd>
    <span className="text-sm text-muted-foreground">+</span>
    <Kbd>K</Kbd>
  </KbdGroup>
);

export const InText = () => (
  <p className="text-sm text-muted-foreground" style={{ maxWidth: 360 }}>
    Pressione{" "}
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>{" "}
    para buscar artigos sobre atenção e memória.
  </p>
);
