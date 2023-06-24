import { ReactNode } from "react"
import clsx from "clsx"

type Props = {
  children: ReactNode
  className?: string
}

export function P({ children, className }: Props) {
  return (
    <p className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  )
}
