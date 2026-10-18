import { AspectRatio } from "mainline-astro-template";

const PUBLIC = "https://raw.githubusercontent.com/Riscocognitivo/mainline-astro-template/master/public";

export const Widescreen = () => (
  <div style={{ width: 360 }}>
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
      <img
        src={`${PUBLIC}/about/1.webp`}
        alt="Pessoa concentrada lendo no escritório"
        className="size-full object-cover"
      />
    </AspectRatio>
  </div>
);

export const Square = () => (
  <div style={{ width: 200 }}>
    <AspectRatio
      ratio={1}
      className="bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground"
    >
      Capa do artigo 1:1
    </AspectRatio>
  </div>
);
