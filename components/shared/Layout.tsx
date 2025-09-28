import type React from "react"
import { ComponentRegistry } from "@/lib/component-registry"

const Layout: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

ComponentRegistry.register("Layout", Layout, {
  category: "shared",
  description: "Main layout wrapper component",
  dependencies: ["react"],
  props: {
    children: "React.ReactNode",
    title: "string",
  },
})

export default Layout
