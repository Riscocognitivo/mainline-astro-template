import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "mainline-astro-template";

const Pane = ({ children }: { children: string }) => (
  <div className="flex h-full items-center justify-center p-6">
    <span className="font-semibold">{children}</span>
  </div>
);

export const Horizontal = () => (
  <ResizablePanelGroup
    direction="horizontal"
    className="rounded-lg border"
    style={{ maxWidth: 520, height: 200 }}
  >
    <ResizablePanel defaultSize={40}>
      <Pane>Sumário</Pane>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={60}>
      <Pane>Artigo</Pane>
    </ResizablePanel>
  </ResizablePanelGroup>
);

export const Nested = () => (
  <ResizablePanelGroup
    direction="horizontal"
    className="rounded-lg border"
    style={{ maxWidth: 520, height: 260 }}
  >
    <ResizablePanel defaultSize={50}>
      <Pane>Atenção</Pane>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={35}>
          <Pane>Memória</Pane>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={65}>
          <Pane>Decisão</Pane>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
);
