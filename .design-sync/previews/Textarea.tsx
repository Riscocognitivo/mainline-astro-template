import { Label, Textarea } from "mainline-astro-template";

export const Default = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 420 }}>
    <Label htmlFor="duvida">Sua dúvida sobre o artigo</Label>
    <Textarea id="duvida" placeholder="Escreva o que ficou pouco claro sobre memória de trabalho." />
  </div>
);

export const Filled = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 420 }}>
    <Label htmlFor="relato">Relato</Label>
    <Textarea
      id="relato"
      defaultValue="Percebo que perco o fio da tarefa quando sou interrompido por notificações. Isso tem relação com o córtex pré-frontal?"
    />
  </div>
);

export const Invalid = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 420 }}>
    <Label htmlFor="comentario">Comentário</Label>
    <Textarea id="comentario" aria-invalid defaultValue="Ok" />
    <p className="text-sm" style={{ color: "var(--destructive)" }}>
      Escreva pelo menos 20 caracteres.
    </p>
  </div>
);

export const Disabled = () => (
  <div className="flex flex-col gap-2" style={{ maxWidth: 420 }}>
    <Label htmlFor="resposta">Resposta da equipe</Label>
    <Textarea id="resposta" disabled defaultValue="Comentários encerrados para este artigo." />
  </div>
);
