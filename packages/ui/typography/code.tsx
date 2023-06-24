import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
}

export function Code({ children, className }: Props) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-inherit",
        className
      )}
    >
      {children}
    </code>
  )
}
