import { ComponentRegistry } from "@/lib/component-registry"
import DataVisualization from "./DataVisualization" // Declare the variable before using it

ComponentRegistry.register("DataVisualization", DataVisualization, {
  category: "field-report",
  description: "Interactive data visualization components",
  dependencies: ["react", "recharts"],
  props: {
    data: "any[]",
    type: "string",
    config: "VisualizationConfig",
  },
})

export default DataVisualization
