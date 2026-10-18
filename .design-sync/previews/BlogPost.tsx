import { BlogPost } from "mainline-astro-template";
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

const post = {
  id: "memoria-de-trabalho",
  data: {
    title: "O que a memória de trabalho segura, e por quanto tempo",
    description:
      "A memória de trabalho mantém poucas informações ativas por alguns segundos. Entenda o limite e como ele afeta decisões no dia a dia.",
    pubDate: new Date(2026, 8, 14),
    image: "/about/1.webp",
    authorImage: "/avatar/avatar1.png",
    authorName: "Marina Lopes",
  },
};

export const Default = () => (
  <SitePublic>
    <BlogPost post={post as any}>
      <h2>Quanto cabe na memória de trabalho?</h2>
      <p>
        A memória de trabalho é o espaço mental onde mantemos e manipulamos
        informações por poucos segundos. Pesquisas recentes estimam que um
        adulto sustenta de três a cinco itens ao mesmo tempo, não os sete
        citados com frequência.
      </p>
      <p>
        Esse limite pesa em decisões complexas: quando a carga aumenta, o
        córtex pré-frontal passa a priorizar e descartar informações, e a
        chance de erro sobe.
      </p>
      <h2>Como reduzir a carga no dia a dia?</h2>
      <ul>
        <li>Anote os passos de uma tarefa longa antes de começar.</li>
        <li>Agrupe informações parecidas em blocos com nome.</li>
        <li>Evite alternar entre tarefas que disputam o mesmo recurso.</li>
      </ul>
    </BlogPost>
  </SitePublic>
);
