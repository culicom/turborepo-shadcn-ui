import { ReactNode } from "react";

import { cn } from "lib";

type Props = {
  children: ReactNode;
  className?: string;
};

export function H2({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}
