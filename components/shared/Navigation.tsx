import { ComponentRegistry } from "@/lib/component-registry"

ComponentRegistry.register("Navigation", Navigation, {
  category: "shared",
  description: "Main navigation component",
  dependencies: ["react", "next/link"],
  props: {
    currentPath: "string",
    onNavigate: "(path: string) => void",
  },
})

export default Navigation
