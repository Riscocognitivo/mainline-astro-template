import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Design system: tag em pílula; cor só com rótulo em texto (COR-04).
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-colors overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--tag-accent-bg)] text-[var(--tag-accent-fg)]",
        secondary:
          "bg-[var(--tag-neutral-bg)] text-[var(--tag-neutral-fg)]",
        destructive:
          "bg-destructive/16 text-destructive",
        outline:
          "border border-link text-link",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
