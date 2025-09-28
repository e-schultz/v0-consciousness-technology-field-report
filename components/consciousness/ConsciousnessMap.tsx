import { ComponentRegistry } from "@/lib/component-registry"
import ConsciousnessMap from "./ConsciousnessMap" // Declare the ConsciousnessMap variable

ComponentRegistry.register("ConsciousnessMap", ConsciousnessMap, {
  category: "consciousness",
  description: "Interactive visualization of consciousness states and transitions",
  dependencies: ["react", "lucide-react"],
  props: {
    data: "ConsciousnessData[]",
    onStateChange: "(state: string) => void",
  },
})

export default ConsciousnessMap
