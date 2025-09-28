import { ComponentRegistry } from "@/lib/component-registry"
import StateTransition from "./StateTransition" // Declare the variable before using it

ComponentRegistry.register("StateTransition", StateTransition, {
  category: "consciousness",
  description: "Animated transitions between consciousness states",
  dependencies: ["react", "framer-motion"],
  props: {
    from: "string",
    to: "string",
    duration: "number",
  },
})

export default StateTransition
