import type React from "react"
interface QuoteBlockProps {
  children: React.ReactNode
}

export function QuoteBlock({ children }: QuoteBlockProps) {
  return <div className="quote-block">{children}</div>
}
