import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg"
  muted?: boolean
}

export function Text({ className, size = "base", muted = false, children, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "leading-relaxed",
        {
          "text-sm": size === "sm",
          "text-base": size === "base",
          "text-lg": size === "lg",
          "text-gray-400": muted,
          "text-gray-200": !muted,
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
