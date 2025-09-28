import type React from "react"
import { ComponentRegistry } from "@/lib/component-registry"

interface QuoteBlockProps {
  children: React.ReactNode
}

export function QuoteBlock({ children }: QuoteBlockProps) {
  return <div className="quote-block">{children}</div>
}

ComponentRegistry.register("QuoteBlock", QuoteBlock, {
  category: "ui",
  description: "Quote block component for displaying quoted text",
  dependencies: ["react"],
  props: {
    children: "React.ReactNode",
  },
})
