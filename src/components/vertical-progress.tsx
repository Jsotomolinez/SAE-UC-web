import type * as React from "react"
import { cn } from "@/lib/utils"

interface VerticalProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
}

export function VerticalProgress({ className, value = 0, ...props }: VerticalProgressProps) {
  return (
    <div className={cn("relative h-full w-4", className)} {...props}>
      <div className="absolute inset-0 w-full h-full rounded-full bg-secondary" />
      <div className="absolute top-0 w-full rounded-full bg-primary transition-all" style={{ height: `${value}%` }} />
    </div>
  )
}
