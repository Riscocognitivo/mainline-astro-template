import { BlogPosts } from "mainline-astro-template";
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

const posts = [
  {
    id: "memoria-de-trabalho",
    data: {
      title: "O que a memória de trabalho segura, e por quanto tempo",
      description:
        "A memória de trabalho mantém poucas informações ativas por alguns segundos. Entenda o limite e como ele afeta decisões no dia a dia.",
      image: "/about/1.webp",
      authorImage: "/avatar/avatar1.png",
      authorName: "Marina Lopes",
    },
  },
  {
    id: "cortex-pre-frontal",
    data: {
      title: "Córtex pré-frontal: o maestro das funções executivas",
      description:
        "Planejar, inibir impulsos e trocar de tarefa dependem de redes que amadurecem até os 25 anos. Veja o que a pesquisa mostra.",
      image: "/about/2.webp",
      authorImage: "/avatar/avatar2.png",
      authorName: "Rafael Antunes",
    },
  },
  {
    id: "atencao-sustentada",
    data: {
      title: "Atenção sustentada em tempos de notificação constante",
      description:
        "Estudos associam interrupções frequentes a mais erros em tarefas longas. Associação não é causalidade: o que dá para afirmar hoje.",
      image: "/about/3.webp",
      authorImage: "/avatar/avatar1.png",
      authorName: "Marina Lopes",
    },
  },
];

export const Default = () => (
  <SitePublic>
    <BlogPosts posts={posts} />
  </SitePublic>
);

export const PostUnico = () => (
  <SitePublic>
    <BlogPosts posts={posts.slice(0, 1)} />
  </SitePublic>
);
