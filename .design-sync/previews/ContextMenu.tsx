import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "mainline-astro-template";
import { useEffect, useRef } from "react";

// O ContextMenu do Radix não aceita `open`: a prévia simula o clique direito no gatilho.
const useOpenOnMount = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.dispatchEvent(
      new MouseEvent("contextmenu", {
        bubbles: true,
        cancelable: true,
        clientX: r.left + r.width / 2 - 80,
        clientY: r.top + 40,
      }),
    );
  }, []);
  return ref;
};

export const Default = () => {
  const ref = useOpenOnMount();
  return (
    <div className="flex justify-center p-6">
      <ContextMenu modal={false}>
        <ContextMenuTrigger asChild>
          <div
            ref={ref}
            className="flex items-center justify-center rounded-md border text-sm text-muted-foreground"
            style={{ width: 420, height: 260, borderStyle: "dashed" }}
          >
            Clique com o botão direito no trecho do artigo
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent style={{ width: 240 }}>
          <ContextMenuLabel>Trecho selecionado</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Copiar citação
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Destacar trecho</ContextMenuItem>
          <ContextMenuItem>Compartilhar</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>Mostrar referências</ContextMenuCheckboxItem>
          <ContextMenuItem variant="destructive">Remover destaque</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};
