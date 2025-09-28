import { lazy, type ComponentType, type LazyExoticComponent } from "react"
import { componentRegistry, type RegisteredComponent } from "./component-registry"

// Dynamic component loader
export class ComponentLoader {
  private loadedComponents = new Map<string, ComponentType<any>>()
  private loadingPromises = new Map<string, Promise<ComponentType<any>>>()

  // Load component dynamically
  async load(id: string): Promise<ComponentType<any> | undefined> {
    // Check if already loaded
    if (this.loadedComponents.has(id)) {
      return this.loadedComponents.get(id)
    }

    // Check if currently loading
    if (this.loadingPromises.has(id)) {
      return this.loadingPromises.get(id)
    }

    // Get component from registry
    const registered = componentRegistry.get(id)
    if (!registered) {
      console.warn(`Component ${id} not found in registry`)
      return undefined
    }

    // If not lazy, return immediately
    if (!registered.lazy) {
      this.loadedComponents.set(id, registered.component)
      return registered.component
    }

    // Load lazy component
    const loadPromise = this.loadLazyComponent(id, registered)
    this.loadingPromises.set(id, loadPromise)

    try {
      const component = await loadPromise
      this.loadedComponents.set(id, component)
      this.loadingPromises.delete(id)
      return component
    } catch (error) {
      console.error(`Failed to load component ${id}:`, error)
      this.loadingPromises.delete(id)
      return undefined
    }
  }

  private async loadLazyComponent(id: string, registered: RegisteredComponent): Promise<ComponentType<any>> {
    // For lazy components, we assume they're React.lazy components
    const LazyComponent = registered.component as LazyExoticComponent<ComponentType<any>>

    // Preload the component
    const loadedModule = await (LazyComponent as any)._payload._result
    return loadedModule.default || loadedModule
  }

  // Preload components
  async preload(ids: string[]): Promise<void> {
    const promises = ids.map((id) => this.load(id))
    await Promise.allSettled(promises)
  }

  // Clear cache
  clearCache(): void {
    this.loadedComponents.clear()
    this.loadingPromises.clear()
  }
}

export const componentLoader = new ComponentLoader()

// Helper hook for loading components
export function useComponentLoader() {
  return {
    load: componentLoader.load.bind(componentLoader),
    preload: componentLoader.preload.bind(componentLoader),
    clearCache: componentLoader.clearCache.bind(componentLoader),
  }
}

// Component factory for creating components from registry
export function createComponent(id: string, props: any = {}) {
  const RegisteredComponent = componentRegistry.get(id)?.component

  if (!RegisteredComponent) {
    console.warn(`Component ${id} not found in registry`)
    return null
  }

  return <RegisteredComponent {...props} />
}

// Lazy component factory
export function createLazyComponent(importFn: () => Promise<{ default: ComponentType<any> }>) {
  return lazy(importFn)
}
