import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "mainline-astro-template";

const temas = [
  { titulo: "Funções executivas", texto: "Planejamento, controle inibitório e flexibilidade." },
  { titulo: "Atenção", texto: "Foco sustentado, distração e multitarefa." },
  { titulo: "Memória de trabalho", texto: "O que cabe na mente por alguns segundos." },
  { titulo: "Córtex pré-frontal", texto: "A base neural da tomada de decisão." },
];

export const Default = () => (
  <div className="flex justify-center p-6" style={{ minHeight: 360 }}>
    <NavigationMenu defaultValue="temas">
      <NavigationMenuList>
        <NavigationMenuItem value="temas">
          <NavigationMenuTrigger>Temas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-3 p-4" style={{ width: 480 }}>
              {temas.map((t) => (
                <li key={t.titulo}>
                  <NavigationMenuLink href="#">
                    <div className="text-sm font-medium">{t.titulo}</div>
                    <p className="text-sm text-muted-foreground">{t.texto}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="avaliacao">
          <NavigationMenuTrigger>Avaliação</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4" style={{ width: 300 }}>
              <li>
                <NavigationMenuLink href="#">Como funciona</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Sobre
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

export const Fechado = () => (
  <div className="flex justify-center p-6">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Temas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4" style={{ width: 300 }}>
              <li>
                <NavigationMenuLink href="#">Funções executivas</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Artigos
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Sobre
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);
