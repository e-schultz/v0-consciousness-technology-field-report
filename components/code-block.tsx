import { ComponentRegistry } from "@/lib/component-registry"

interface CodeBlockProps {
  children: string
}

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <div className="code-block">
      <code className="text-[#00ffff] text-sm whitespace-pre-wrap">{children}</code>
    </div>
  )
}

ComponentRegistry.register("CodeBlock", CodeBlock, {
  category: "ui",
  description: "Code block component with terminal styling",
  dependencies: ["react"],
  props: {
    children: "string",
  },
})
