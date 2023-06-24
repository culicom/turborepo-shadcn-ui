import { ReactNode } from "react";
import { cn } from "utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export function H4({ children, className }: Props) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-bold tracking-tight text-blue-700 uppercase",
        className
      )}
    >
      {children}
    </h4>
  );
}
