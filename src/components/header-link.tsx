import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

type HeaderLinkProps = ComponentProps<"a">;

export default function HeaderLink({
  className,
  children,
  ...props
}: HeaderLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "text-link inline-block underline-offset-[3px] hover:underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
