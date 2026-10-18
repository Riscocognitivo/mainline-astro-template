import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Design system: ação em pílula, um único azul preenchido por vista, foco 2px com 2px de afastamento.
// Alvo de toque >= 44px (DES-13): os tamanhos menores estendem a área clicável com ::after.
const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full text-base font-normal transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-invalid:outline-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[var(--action-primary-hover)] active:bg-[var(--action-primary-press)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-link text-link hover:bg-link/10 active:bg-link/18",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-link underline-offset-[3px] hover:underline",
      },
      size: {
        default: "h-11 px-5 has-[>svg]:px-4",
        sm: "h-9 px-3 text-sm has-[>svg]:px-2.5 after:absolute after:inset-x-0 after:-inset-y-1",
        lg: "h-12 px-6 has-[>svg]:px-5",
        icon: "size-11",
        "icon-sm": "size-9 after:absolute after:-inset-1",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
