import { ComponentRegistry } from "@/lib/component-registry"
import ArchitectureDiagram from "./ArchitectureDiagram" // Declare the variable before using it

ComponentRegistry.register("ArchitectureDiagram", ArchitectureDiagram, {
  category: "technology",
  description: "System architecture visualization",
  dependencies: ["react", "react-flow-renderer"],
  props: {
    nodes: "Node[]",
    edges: "Edge[]",
    onNodeClick: "(node: Node) => void",
  },
})

export default ArchitectureDiagram
