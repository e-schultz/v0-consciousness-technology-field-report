import { ComponentRegistry } from "./component-registry"

export interface ValidationResult {
  success: boolean
  errors: string[]
  warnings: string[]
  stats: {
    totalComponents: number
    categoriesCount: number
    componentsPerCategory: Record<string, number>
  }
}

export function validateComponentRegistry(): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  try {
    // Get all registered components
    const allComponents = ComponentRegistry.getAll()
    const categories = ComponentRegistry.getCategories()

    // Validate each component
    allComponents.forEach(({ metadata, component }) => {
      // Check required fields
      if (!metadata.id) {
        errors.push(`Component missing ID: ${metadata.name}`)
      }

      if (!metadata.name) {
        errors.push(`Component missing name: ${metadata.id}`)
      }

      if (!metadata.category) {
        errors.push(`Component missing category: ${metadata.name}`)
      }

      if (!component) {
        errors.push(`Component missing implementation: ${metadata.name}`)
      }

      // Check for deprecated components without replacement
      if (metadata.deprecated && !metadata.replacedBy) {
        warnings.push(`Deprecated component without replacement: ${metadata.name}`)
      }

      // Validate props structure
      if (metadata.props) {
        Object.entries(metadata.props).forEach(([propName, propType]) => {
          if (typeof propType !== "string") {
            warnings.push(`Invalid prop type for ${metadata.name}.${propName}: expected string, got ${typeof propType}`)
          }
        })
      }
    })

    // Calculate stats
    const componentsPerCategory: Record<string, number> = {}
    categories.forEach((category) => {
      componentsPerCategory[category] = ComponentRegistry.getByCategory(category).length
    })

    const stats = {
      totalComponents: allComponents.length,
      categoriesCount: categories.length,
      componentsPerCategory,
    }

    return {
      success: errors.length === 0,
      errors,
      warnings,
      stats,
    }
  } catch (error) {
    return {
      success: false,
      errors: [`Registry validation failed: ${error instanceof Error ? error.message : "Unknown error"}`],
      warnings: [],
      stats: {
        totalComponents: 0,
        categoriesCount: 0,
        componentsPerCategory: {},
      },
    }
  }
}

export function logValidationResults(result: ValidationResult): void {
  console.log("=== Component Registry Validation ===")
  console.log(`Status: ${result.success ? "✅ PASSED" : "❌ FAILED"}`)
  console.log(`Total Components: ${result.stats.totalComponents}`)
  console.log(`Categories: ${result.stats.categoriesCount}`)

  if (Object.keys(result.stats.componentsPerCategory).length > 0) {
    console.log("Components per category:")
    Object.entries(result.stats.componentsPerCategory).forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`)
    })
  }

  if (result.errors.length > 0) {
    console.log("\n❌ Errors:")
    result.errors.forEach((error) => console.log(`  - ${error}`))
  }

  if (result.warnings.length > 0) {
    console.log("\n⚠️ Warnings:")
    result.warnings.forEach((warning) => console.log(`  - ${warning}`))
  }

  console.log("=====================================")
}

// Test component retrieval
export function testComponentRetrieval(): boolean {
  try {
    // Test getting components by name
    const bridgeCard = ComponentRegistry.get("BridgeCard")
    const codeBlock = ComponentRegistry.get("CodeBlock")
    const fetchResult = ComponentRegistry.get("FetchResult")
    const quoteBlock = ComponentRegistry.get("QuoteBlock")

    if (!bridgeCard || !codeBlock || !fetchResult || !quoteBlock) {
      console.error("Failed to retrieve core components")
      return false
    }

    // Test category retrieval
    const uiComponents = ComponentRegistry.getByCategory("ui")
    if (uiComponents.length === 0) {
      console.error("No UI components found")
      return false
    }

    // Test search functionality
    const searchResults = ComponentRegistry.search("bridge")
    if (searchResults.length === 0) {
      console.error("Search functionality not working")
      return false
    }

    console.log("✅ Component retrieval tests passed")
    return true
  } catch (error) {
    console.error("❌ Component retrieval tests failed:", error)
    return false
  }
}
