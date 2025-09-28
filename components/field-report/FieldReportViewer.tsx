import { ComponentRegistry } from "@/lib/component-registry"
import FieldReportViewer from "./FieldReportViewer" // Declare the variable before using it

ComponentRegistry.register("FieldReportViewer", FieldReportViewer, {
  category: "field-report",
  description: "Main viewer for field report data and visualizations",
  dependencies: ["react", "lucide-react"],
  props: {
    reportData: "FieldReportData",
    viewMode: "string",
  },
})

export default FieldReportViewer
