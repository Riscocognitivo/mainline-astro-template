import { Avatar, AvatarFallback, AvatarImage } from "mainline-astro-template";

const PUBLIC = "https://raw.githubusercontent.com/Riscocognitivo/mainline-astro-template/master/public";

export const WithImage = () => (
  <div className="flex items-center gap-3">
    <Avatar>
      <AvatarImage src={`${PUBLIC}/avatar/avatar1.png`} alt="Foto do autor" />
      <AvatarFallback>RS</AvatarFallback>
    </Avatar>
    <Avatar className="size-10">
      <AvatarImage src={`${PUBLIC}/avatar/avatar2.png`} alt="Foto do revisor" />
      <AvatarFallback>RC</AvatarFallback>
    </Avatar>
  </div>
);

export const Fallback = () => (
  <div className="flex items-center gap-3">
    <Avatar>
      <AvatarFallback className="text-xs font-medium">AL</AvatarFallback>
    </Avatar>
    <Avatar className="size-10">
      <AvatarFallback className="text-sm font-medium">JP</AvatarFallback>
    </Avatar>
  </div>
);

export const Byline = () => (
  <div className="flex items-center gap-3">
    <Avatar className="size-10">
      <AvatarImage src={`${PUBLIC}/avatar/avatar1.png`} alt="Foto do autor" />
      <AvatarFallback>RS</AvatarFallback>
    </Avatar>
    <div className="flex flex-col">
      <span className="text-sm font-medium">Rafael Souza</span>
      <span className="text-xs text-muted-foreground">Neuropsicólogo · 12 de outubro</span>
    </div>
  </div>
);
