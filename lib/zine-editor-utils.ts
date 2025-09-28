import type { ZineData, ZineItem, ZineSection } from "./zine-types"

export interface ZineEditAction {
  type:
    | "add_section"
    | "update_section"
    | "delete_section"
    | "reorder_sections"
    | "add_item"
    | "update_item"
    | "delete_item"
    | "reorder_items"
    | "update_meta"
    | "change_theme"
  payload: any
  timestamp: number
}

export class ZineEditor {
  private history: ZineEditAction[] = []
  private currentIndex = -1
  private maxHistorySize = 50

  constructor(private data: ZineData) {}

  // History management
  private addToHistory(action: ZineEditAction) {
    // Remove any actions after current index (for redo functionality)
    this.history = this.history.slice(0, this.currentIndex + 1)

    // Add new action
    this.history.push(action)
    this.currentIndex++

    // Limit history size
    if (this.history.length > this.maxHistorySize) {
      this.history.shift()
      this.currentIndex--
    }
  }

  canUndo(): boolean {
    return this.currentIndex >= 0
  }

  canRedo(): boolean {
    return this.currentIndex < this.history.length - 1
  }

  undo(): boolean {
    if (!this.canUndo()) return false

    const action = this.history[this.currentIndex]
    this.revertAction(action)
    this.currentIndex--
    return true
  }

  redo(): boolean {
    if (!this.canRedo()) return false

    this.currentIndex++
    const action = this.history[this.currentIndex]
    this.applyAction(action)
    return true
  }

  private applyAction(action: ZineEditAction) {
    switch (action.type) {
      case "add_section":
        this.data.sections.push(action.payload.section)
        break
      case "update_section":
        const sectionIndex = this.data.sections.findIndex((s) => s.id === action.payload.id)
        if (sectionIndex !== -1) {
          this.data.sections[sectionIndex] = { ...this.data.sections[sectionIndex], ...action.payload.updates }
        }
        break
      case "delete_section":
        const deleteIndex = this.data.sections.findIndex((s) => s.id === action.payload.id)
        if (deleteIndex !== -1) {
          this.data.sections.splice(deleteIndex, 1)
        }
        break
      // Add other action types as needed
    }
  }

  private revertAction(action: ZineEditAction) {
    // Implement action reversal logic
    switch (action.type) {
      case "add_section":
        const addedIndex = this.data.sections.findIndex((s) => s.id === action.payload.section.id)
        if (addedIndex !== -1) {
          this.data.sections.splice(addedIndex, 1)
        }
        break
      // Add other reversion logic
    }
  }

  // Content editing methods
  updateMetadata(updates: Partial<ZineData["meta"]>) {
    const action: ZineEditAction = {
      type: "update_meta",
      payload: { previous: { ...this.data.meta }, updates },
      timestamp: Date.now(),
    }

    this.data.meta = { ...this.data.meta, ...updates }
    this.addToHistory(action)
  }

  addSection(section: ZineSection & { items?: ZineItem[] }) {
    const action: ZineEditAction = {
      type: "add_section",
      payload: { section },
      timestamp: Date.now(),
    }

    this.data.sections.push(section)
    this.addToHistory(action)
  }

  updateSection(sectionId: string, updates: Partial<ZineSection>) {
    const sectionIndex = this.data.sections.findIndex((s) => s.id === sectionId)
    if (sectionIndex === -1) return false

    const action: ZineEditAction = {
      type: "update_section",
      payload: {
        id: sectionId,
        previous: { ...this.data.sections[sectionIndex] },
        updates,
      },
      timestamp: Date.now(),
    }

    this.data.sections[sectionIndex] = { ...this.data.sections[sectionIndex], ...updates }
    this.addToHistory(action)
    return true
  }

  deleteSection(sectionId: string) {
    const sectionIndex = this.data.sections.findIndex((s) => s.id === sectionId)
    if (sectionIndex === -1) return false

    const action: ZineEditAction = {
      type: "delete_section",
      payload: {
        id: sectionId,
        section: { ...this.data.sections[sectionIndex] },
        index: sectionIndex,
      },
      timestamp: Date.now(),
    }

    this.data.sections.splice(sectionIndex, 1)
    this.addToHistory(action)
    return true
  }

  addItem(sectionId: string, item: ZineItem) {
    const section = this.data.sections.find((s) => s.id === sectionId)
    if (!section) return false

    if (!section.items) section.items = []

    const action: ZineEditAction = {
      type: "add_item",
      payload: { sectionId, item },
      timestamp: Date.now(),
    }

    section.items.push(item)
    this.addToHistory(action)
    return true
  }

  updateItem(sectionId: string, itemId: string, updates: Partial<ZineItem>) {
    const section = this.data.sections.find((s) => s.id === sectionId)
    if (!section?.items) return false

    const itemIndex = section.items.findIndex((i) => i.id === itemId)
    if (itemIndex === -1) return false

    const action: ZineEditAction = {
      type: "update_item",
      payload: {
        sectionId,
        itemId,
        previous: { ...section.items[itemIndex] },
        updates,
      },
      timestamp: Date.now(),
    }

    section.items[itemIndex] = { ...section.items[itemIndex], ...updates }
    this.addToHistory(action)
    return true
  }

  deleteItem(sectionId: string, itemId: string) {
    const section = this.data.sections.find((s) => s.id === sectionId)
    if (!section?.items) return false

    const itemIndex = section.items.findIndex((i) => i.id === itemId)
    if (itemIndex === -1) return false

    const action: ZineEditAction = {
      type: "delete_item",
      payload: {
        sectionId,
        itemId,
        item: { ...section.items[itemIndex] },
        index: itemIndex,
      },
      timestamp: Date.now(),
    }

    section.items.splice(itemIndex, 1)
    this.addToHistory(action)
    return true
  }

  // Utility methods
  getData(): ZineData {
    return this.data
  }

  getHistory(): ZineEditAction[] {
    return [...this.history]
  }

  clearHistory() {
    this.history = []
    this.currentIndex = -1
  }

  // Content analysis
  getWordCount(): number {
    let count = 0

    this.data.sections.forEach((section) => {
      if (section.items) {
        section.items.forEach((item) => {
          const content = typeof item.content === "string" ? item.content : JSON.stringify(item.content)
          count += content.split(/\s+/).filter((word) => word.length > 0).length
        })
      }
    })

    return count
  }

  getReadingTime(wordsPerMinute = 200): number {
    return Math.ceil(this.getWordCount() / wordsPerMinute)
  }

  findContent(query: string): Array<{
    sectionId: string
    sectionTitle: string
    itemId?: string
    itemTitle?: string
    match: string
  }> {
    const results: Array<{
      sectionId: string
      sectionTitle: string
      itemId?: string
      itemTitle?: string
      match: string
    }> = []

    const searchText = query.toLowerCase()

    this.data.sections.forEach((section) => {
      if (section.title.toLowerCase().includes(searchText)) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          match: section.title,
        })
      }

      section.items?.forEach((item) => {
        const contentStr = typeof item.content === "string" ? item.content : JSON.stringify(item.content)

        if (contentStr.toLowerCase().includes(searchText)) {
          results.push({
            sectionId: section.id,
            sectionTitle: section.title,
            itemId: item.id,
            itemTitle: item.title,
            match: contentStr.substring(0, 100) + "...",
          })
        }
      })
    })

    return results
  }
}
