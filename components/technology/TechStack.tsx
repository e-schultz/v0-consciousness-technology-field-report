import { ComponentRegistry } from "@/lib/component-registry"
import TechStack from "./TechStack" // Declare the TechStack variable

ComponentRegistry.register("TechStack", TechStack, {
  category: "technology",
  description: "Technology stack visualization and management",
  dependencies: ["react", "lucide-react"],
  props: {
    technologies: "Technology[]",
    onTechSelect: "(tech: Technology) => void",
  },
})

export default TechStack
