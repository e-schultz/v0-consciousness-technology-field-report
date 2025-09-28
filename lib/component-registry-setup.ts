import { ComponentRegistry } from "./component-registry"
import { validateComponentRegistry, logValidationResults } from "./registry-validator"

// Initialize the registry
export function initializeComponentRegistry() {
  ComponentRegistry.initialize()

  // Import components to trigger registration
  import("@/components/bridge-card")
  import("@/components/code-block")
  import("@/components/fetch-result")
  import("@/components/quote-block")

  // Validate registry in development
  if (process.env.NODE_ENV === "development") {
    setTimeout(() => {
      const result = validateComponentRegistry()
      if (!result.success || result.warnings.length > 0) {
        logValidationResults(result)
      } else {
        console.log(`✅ Component registry initialized with ${result.stats.totalComponents} components`)
      }
    }, 100)
  }
}

// Auto-initialize when module loads
initializeComponentRegistry()

export { ComponentRegistry }
