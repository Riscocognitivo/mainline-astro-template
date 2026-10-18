import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
};

// Marca do design system: cérebro tricolor + nome na fonte de títulos (600).
// Não redesenhar nem recolorir o símbolo; .blend o assenta sobre o fundo nos dois temas.
export function Logo({ className, markClassName }: LogoProps) {
  return (
    <span
      className={cn(
        "font-display text-foreground inline-flex items-center gap-2 text-base",
        className,
      )}
    >
      <img
        src="/brand/brain-mark.png"
        alt=""
        width={24}
        height={24}
        className={cn("blend size-6", markClassName)}
      />
      Risco Cognitivo
    </span>
  );
}
