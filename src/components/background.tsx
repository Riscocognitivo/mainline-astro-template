import React from "react";

import { cn } from "@/lib/utils";

type BackgroundProps = {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
};

export const Background = ({
  children,
  variant = "top",
  className,
}: BackgroundProps) => {
  return (
    <div
      className={cn(
        "relative mx-2.5 mt-2.5 lg:mx-4",
        // Cenas planas, sem gradiente (design system: fundos sólidos).
        variant === "top" && "bg-background rounded-b-2xl",
        variant === "bottom" && "bg-background rounded-t-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
};
