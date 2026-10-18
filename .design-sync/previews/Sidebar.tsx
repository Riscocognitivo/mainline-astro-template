import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "mainline-astro-template";
import { BookOpen, Brain, ClipboardList, House, Settings } from "lucide-react";

const itens = [
  { titulo: "Início", icon: House, ativo: false },
  { titulo: "Artigos", icon: BookOpen, ativo: true, badge: "12" },
  { titulo: "Avaliações", icon: ClipboardList, ativo: false },
  { titulo: "Funções executivas", icon: Brain, ativo: false },
];

const Nav = () => (
  <>
    <SidebarHeader>
      <span className="px-2 text-sm font-semibold">Risco Cognitivo</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Blog</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {itens.map((it) => (
              <SidebarMenuItem key={it.titulo}>
                <SidebarMenuButton isActive={it.ativo}>
                  <it.icon />
                  <span>{it.titulo}</span>
                </SidebarMenuButton>
                {it.badge && <SidebarMenuBadge>{it.badge}</SidebarMenuBadge>}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Settings />
            <span>Preferências</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </>
);

const Main = () => (
  <SidebarInset>
    <header className="flex items-center gap-2 border-b px-4 py-2">
      <SidebarTrigger />
      <span className="text-sm font-medium">Artigos</span>
    </header>
    <div className="flex flex-col gap-2 p-6">
      <h1 className="text-2xl font-semibold">Memória de trabalho no dia a dia</h1>
      <p className="text-muted-foreground text-sm">
        Como o córtex pré-frontal mantém informações ativas e o que fazer quando a sobrecarga
        cognitiva aparece.
      </p>
    </div>
  </SidebarInset>
);

export const Default = () => (
  <SidebarProvider>
    <Sidebar>
      <Nav />
    </Sidebar>
    <Main />
  </SidebarProvider>
);

export const Static = () => (
  <SidebarProvider style={{ minHeight: 0, height: 640 }}>
    <Sidebar collapsible="none" className="border-r">
      <Nav />
    </Sidebar>
    <Main />
  </SidebarProvider>
);
