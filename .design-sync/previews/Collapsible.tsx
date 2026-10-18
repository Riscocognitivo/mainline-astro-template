import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "mainline-astro-template";
import { ChevronsUpDown } from "lucide-react";

const Body = ({ open }: { open: boolean }) => (
  <Collapsible defaultOpen={open} className="flex flex-col gap-2 w-full max-w-sm">
    <div className="flex items-center justify-between gap-4">
      <h4 className="text-sm font-semibold">Referências do artigo</h4>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Mostrar referências">
          <ChevronsUpDown />
        </Button>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border px-4 py-2 text-sm">Baddeley (2000), memória de trabalho</div>
    <CollapsibleContent className="flex flex-col gap-2">
      <div className="rounded-md border px-4 py-2 text-sm">Diamond (2013), funções executivas</div>
      <div className="rounded-md border px-4 py-2 text-sm">Miller e Cohen (2001), córtex pré-frontal</div>
    </CollapsibleContent>
  </Collapsible>
);

export const Open = () => <Body open />;
export const Closed = () => <Body open={false} />;
