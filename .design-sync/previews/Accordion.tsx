import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "mainline-astro-template";

export const Single = () => (
  <Accordion type="single" collapsible defaultValue="memoria" className="w-full max-w-md">
    <AccordionItem value="memoria">
      <AccordionTrigger>O que é memória de trabalho?</AccordionTrigger>
      <AccordionContent>
        É a capacidade de manter e manipular poucas informações por alguns segundos, como um
        número de telefone que você repete até anotar.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="atencao">
      <AccordionTrigger>Atenção e foco são a mesma coisa?</AccordionTrigger>
      <AccordionContent>
        Não. Foco é sustentar a atenção em um alvo; atenção inclui também filtrar distrações e
        alternar entre tarefas.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="avaliacao">
      <AccordionTrigger>A avaliação substitui um diagnóstico?</AccordionTrigger>
      <AccordionContent>
        Não. Ela aponta sinais de sobrecarga cognitiva e indica quando procurar um profissional.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Multiple = () => (
  <Accordion type="multiple" defaultValue={["cortex", "funcoes"]} className="w-full max-w-md">
    <AccordionItem value="cortex">
      <AccordionTrigger>Córtex pré-frontal</AccordionTrigger>
      <AccordionContent>
        Região que coordena planejamento, controle inibitório e tomada de decisão.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="funcoes">
      <AccordionTrigger>Funções executivas</AccordionTrigger>
      <AccordionContent>
        Memória de trabalho, flexibilidade cognitiva e controle inibitório, trabalhando juntas.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="sono">
      <AccordionTrigger>Sono e desempenho</AccordionTrigger>
      <AccordionContent>
        Noites curtas reduzem a precisão em tarefas que exigem atenção sustentada.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
