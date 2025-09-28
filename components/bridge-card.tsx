import type React from "react"
import { ComponentRegistry } from "@/lib/component-registry"

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

ComponentRegistry.register("BridgeCard", BridgeCard, {
  category: "ui",
  description: "Card component for displaying bridge information in terminal style",
  dependencies: ["react"],
  props: {
    title: "string",
    children: "React.ReactNode",
  },
})
