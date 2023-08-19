import { ReactNode } from "react";

import { cn } from "lib";

type Props = {
  children: ReactNode;
  className?: string;
};

export function H1({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight leading-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
