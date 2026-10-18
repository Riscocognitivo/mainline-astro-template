import { HeaderLink } from "mainline-astro-template";

export const Default = () => <HeaderLink href="#artigos">Ver todos os artigos</HeaderLink>;

export const NaNavegacao = () => (
  <nav className="flex items-center gap-6 text-sm">
    <HeaderLink href="#blog">Blog</HeaderLink>
    <HeaderLink href="#avaliacao">Avaliação</HeaderLink>
    <HeaderLink href="#sobre">Sobre</HeaderLink>
  </nav>
);
