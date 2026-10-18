import { Background } from "mainline-astro-template";
import type { ReactNode } from "react";

// O fundo da seção é a cor da página; a moldura em bg-muted mostra o recorte arredondado.
const Pagina = ({ children }: { children: ReactNode }) => (
  <div className="bg-muted" style={{ paddingBottom: "var(--space-3)", paddingTop: "var(--space-1)", width: 640 }}>
    {children}
  </div>
);

export const Topo = () => (
  <Pagina>
    <Background>
      <div className="px-6 py-12" style={{ maxWidth: 560 }}>
        <h2 className="font-display text-3xl text-foreground">Como a memória de trabalho sustenta suas decisões</h2>
        <p className="text-muted-foreground" style={{ marginTop: "var(--space-3)" }}>
          O córtex pré-frontal mantém poucas informações ativas por vez. Quando a carga passa do limite, a avaliação de risco piora antes de você perceber.
        </p>
      </div>
    </Background>
  </Pagina>
);

export const Base = () => (
  <Pagina>
    <Background variant="bottom">
      <div className="px-6 py-12" style={{ maxWidth: 560 }}>
        <h2 className="font-display text-3xl text-foreground">Receba os próximos artigos</h2>
        <p className="text-muted-foreground" style={{ marginTop: "var(--space-3)" }}>
          Um texto por semana sobre atenção, funções executivas e as evidências por trás de cada recomendação.
        </p>
      </div>
    </Background>
  </Pagina>
);
