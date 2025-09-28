import type React from "react"
import type { ComponentType } from "react"

// Component registry interfaces
export interface ComponentMetadata {
  id: string
  name: string
  description?: string
  category: "consciousness" | "field-report" | "technology" | "shared" | "ui" | "zine"
  version: string
  deprecated?: boolean
  replacedBy?: string
  dependencies?: string[]
  props?: Record<string, any>
  examples?: ComponentExample[]
}

export interface ComponentExample {
  name: string
  description: string
  props: Record<string, any>
  code?: string
}

export interface RegisteredComponent {
  metadata: ComponentMetadata
  component: ComponentType<any>
  lazy?: boolean
}

// Global component registry
class ComponentRegistryClass {
  private components = new Map<string, RegisteredComponent>()
  private categories = new Map<string, Set<string>>()
  private aliases = new Map<string, string>()

  // Register a component with simplified API
  register(
    name: string,
    component: ComponentType<any>,
    config: Partial<ComponentMetadata> & { category: ComponentMetadata["category"] },
  ): void {
    const metadata: ComponentMetadata = {
      id: name,
      name,
      version: "1.0.0",
      ...config,
    }

    // Validate component isn't already registered
    if (this.components.has(metadata.id)) {
      console.warn(`Component ${metadata.id} is already registered. Overwriting.`)
    }

    // Register component
    this.components.set(metadata.id, { metadata, component })

    // Update category index
    if (!this.categories.has(metadata.category)) {
      this.categories.set(metadata.category, new Set())
    }
    this.categories.get(metadata.category)!.add(metadata.id)

    // Handle deprecated components
    if (metadata.deprecated && metadata.replacedBy) {
      this.aliases.set(metadata.id, metadata.replacedBy)
    }
  }

  // Get component by ID
  get(id: string): RegisteredComponent | undefined {
    // Check for alias first
    const actualId = this.aliases.get(id) || id
    const component = this.components.get(actualId)

    if (!component && this.aliases.has(id)) {
      console.warn(`Component ${id} is deprecated. Use ${this.aliases.get(id)} instead.`)
    }

    return component
  }

  // Get all components in a category
  getByCategory(category: string): RegisteredComponent[] {
    const componentIds = this.categories.get(category) || new Set()
    return Array.from(componentIds)
      .map((id) => this.components.get(id))
      .filter(Boolean) as RegisteredComponent[]
  }

  // Get all registered components
  getAll(): RegisteredComponent[] {
    return Array.from(this.components.values())
  }

  // Get component metadata
  getMetadata(id: string): ComponentMetadata | undefined {
    return this.get(id)?.metadata
  }

  // Check if component exists
  has(id: string): boolean {
    return this.components.has(id) || this.aliases.has(id)
  }

  // Get available categories
  getCategories(): string[] {
    return Array.from(this.categories.keys())
  }

  // Search components
  search(query: string): RegisteredComponent[] {
    const lowerQuery = query.toLowerCase()
    return this.getAll().filter(
      ({ metadata }) =>
        metadata.name.toLowerCase().includes(lowerQuery) ||
        metadata.description?.toLowerCase().includes(lowerQuery) ||
        metadata.category.toLowerCase().includes(lowerQuery),
    )
  }

  // Remove deprecated components
  cleanup(): void {
    const deprecated = this.getAll().filter(({ metadata }) => metadata.deprecated)
    deprecated.forEach(({ metadata }) => {
      if (metadata.replacedBy && this.has(metadata.replacedBy)) {
        this.components.delete(metadata.id)
        this.categories.get(metadata.category)?.delete(metadata.id)
      }
    })
  }

  // Get component by name with lazy loading
  async getComponent(name: string): Promise<React.ComponentType<any> | null> {
    const registered = this.get(name)
    if (!registered) return null

    return registered.component
  }

  // Initialize registry with all components
  initialize() {
    // This will be called to trigger component registration
    console.log("Component registry initialized")
  }
}

// Create singleton instance
export const ComponentRegistry = new ComponentRegistryClass()

export const componentRegistry = ComponentRegistry

// Zine-specific registry extensions
export interface ZineComponentMetadata extends ComponentMetadata {
  zineTypes: Array<"terminal" | "article" | "zine" | "forum" | "aesthetic">
  contentTypes: Array<"text" | "list" | "profile" | "code" | "quote" | "interactive" | "article">
}

export interface ZineRegisteredComponent extends RegisteredComponent {
  metadata: ZineComponentMetadata
}

// Zine component registry
class ZineComponentRegistryClass extends ComponentRegistryClass {
  // Get components compatible with zine type
  getByZineType(zineType: string): ZineRegisteredComponent[] {
    return this.getAll().filter(
      (comp): comp is ZineRegisteredComponent =>
        "zineTypes" in comp.metadata && (comp.metadata as ZineComponentMetadata).zineTypes.includes(zineType as any),
    )
  }

  // Get components that handle specific content types
  getByContentType(contentType: string): ZineRegisteredComponent[] {
    return this.getAll().filter(
      (comp): comp is ZineRegisteredComponent =>
        "contentTypes" in comp.metadata &&
        (comp.metadata as ZineComponentMetadata).contentTypes.includes(contentType as any),
    )
  }
}

export const zineComponentRegistry = new ZineComponentRegistryClass()
