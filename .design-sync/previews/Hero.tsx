import { Hero } from "mainline-astro-template";
import { useEffect, useRef, type ReactNode } from "react";

// As seções do Mainline usam imagens de /public por caminho absoluto do site.
// Fora do site, aponta para os mesmos arquivos no repositório público.
const PUBLIC = "https://raw.githubusercontent.com/Riscocognitivo/mainline-astro-template/master/public";
const SitePublic = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.querySelectorAll<HTMLImageElement>('img[src^="/"]').forEach((img) => {
      img.src = PUBLIC + img.getAttribute("src");
    });
  });
  return <div ref={ref}>{children}</div>;
};

export const Default = () => (
  <SitePublic>
    <Hero />
  </SitePublic>
);
