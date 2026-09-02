import * as React from "react"
import { cn } from "@/lib/utils"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  withLine?: boolean
}

export function Heading({
  className,
  level = 2,
  withLine = false,
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {withLine && <div className="h-1 w-16 bg-brand-orange" />}
      <Tag
        className={cn(
          "font-bold uppercase tracking-wider text-white",
          {
            "text-4xl md:text-5xl lg:text-6xl": level === 1,
            "text-3xl md:text-4xl": level === 2,
            "text-2xl md:text-3xl": level === 3,
            "text-xl md:text-2xl": level === 4,
            "text-lg md:text-xl": level === 5,
            "text-base md:text-lg": level === 6,
          }
        )}
      >
        {children}
      </Tag>
    </div>
  )
}
