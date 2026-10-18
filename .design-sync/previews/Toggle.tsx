import { Toggle } from "mainline-astro-template";
import { Bold, Bookmark, Italic } from "lucide-react";

export const States = () => (
  <div className="flex items-center gap-2">
    <Toggle aria-label="Negrito">
      <Bold />
    </Toggle>
    <Toggle aria-label="Itálico" defaultPressed>
      <Italic />
    </Toggle>
  </div>
);

export const Outline = () => (
  <div className="flex items-center gap-2">
    <Toggle variant="outline" aria-label="Salvar artigo">
      <Bookmark />
      Salvar
    </Toggle>
    <Toggle variant="outline" aria-label="Artigo salvo" defaultPressed>
      <Bookmark />
      Salvo
    </Toggle>
  </div>
);

export const Sizes = () => (
  <div className="flex items-center gap-2">
    <Toggle size="sm" variant="outline" aria-label="Pequeno">
      <Bold />
    </Toggle>
    <Toggle variant="outline" aria-label="Padrão">
      <Bold />
    </Toggle>
    <Toggle size="lg" variant="outline" aria-label="Grande">
      <Bold />
    </Toggle>
  </div>
);
