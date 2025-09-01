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
