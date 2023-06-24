import { ReactNode } from "react";

import { cn } from "utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export function H3({ children, className }: Props) {
  return (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}
