import type React from "react"
interface BridgeCardProps {
  title: string
  children: React.ReactNode
}

export function BridgeCard({ title, children }: BridgeCardProps) {
  return (
    <div className="bridge-card">
      <h3 className="text-[#00ffff] mb-2 font-mono">{title}</h3>
      {children}
    </div>
  )
}
