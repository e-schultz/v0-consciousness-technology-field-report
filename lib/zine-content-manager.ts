import { type ZineData, type ZineItem, type ZineSection, ZINE_THEMES } from "./zine-types"
import { generateZineId, validateZineData } from "./zine-utils"

export class ZineContentManager {
  private zines: Map<string, ZineData> = new Map()

  constructor() {
    // Initialize with any existing zines
  }

  // Core CRUD operations
  createZine(data: Partial<ZineData>): string {
    const id = generateZineId(data.meta?.title || "untitled")

    const zineData: ZineData = {
      meta: {
        title: "Untitled Zine",
        ...data.meta,
      },
      sections: data.sections || [],
      theme: data.theme || ZINE_THEMES.terminal,
    }

    if (!validateZineData(zineData)) {
      throw new Error("Invalid zine data structure")
    }

    this.zines.set(id, zineData)
    return id
  }

  getZine(id: string): ZineData | null {
    return this.zines.get(id) || null
  }

  updateZine(id: string, updates: Partial<ZineData>): boolean {
    const existing = this.zines.get(id)
    if (!existing) return false

    const updated = {
      ...existing,
      ...updates,
      meta: { ...existing.meta, ...updates.meta },
    }

    if (!validateZineData(updated)) {
      throw new Error("Invalid zine data structure")
    }

    this.zines.set(id, updated)
    return true
  }

  deleteZine(id: string): boolean {
    return this.zines.delete(id)
  }

  listZines(): Array<{ id: string; meta: ZineData["meta"] }> {
    return Array.from(this.zines.entries()).map(([id, data]) => ({
      id,
      meta: data.meta,
    }))
  }

  // Section management
  addSection(zineId: string, section: ZineSection & { items?: ZineItem[] }): boolean {
    const zine = this.zines.get(zineId)
    if (!zine) return false

    zine.sections.push(section)
    return true
  }

  updateSection(zineId: string, sectionId: string, updates: Partial<ZineSection>): boolean {
    const zine = this.zines.get(zineId)
    if (!zine) return false

    const sectionIndex = zine.sections.findIndex((s) => s.id === sectionId)
    if (sectionIndex === -1) return false

    zine.sections[sectionIndex] = { ...zine.sections[sectionIndex], ...updates }
    return true
  }

  deleteSection(zineId: string, sectionId: string): boolean {
    const zine = this.zines.get(zineId)
    if (!zine) return false

    const sectionIndex = zine.sections.findIndex((s) => s.id === sectionId)
    if (sectionIndex === -1) return false

    zine.sections.splice(sectionIndex, 1)
    return true
  }

  reorderSections(zineId: string, sectionIds: string[]): boolean {
    const zine = this.zines.get(zineId)
    if (!zine) return false

    const reorderedSections = sectionIds
      .map((id) => zine.sections.find((s) => s.id === id))
      .filter(Boolean) as ZineSection[]

    if (reorderedSections.length !== zine.sections.length) return false

    zine.sections = reorderedSections
    return true
  }

  // Item management
  addItem(zineId: string, sectionId: string, item: ZineItem): boolean {
    const zine = this.zines.get(zineId)
    if (!zine) return false

    const section = zine.sections.find((s) => s.id === sectionId)
    if (!section) return false

    if (!section.items) section.items = []
    section.items.push(item)
    return true
  }

  updateItem(zineId: string, sectionId: string, itemId: string, updates: Partial<ZineItem>): boolean {
    const zine = this.zines.get(zineId)
    if (!zine) return false

    const section = zine.sections.find((s) => s.id === sectionId)
    if (!section?.items) return false

    const itemIndex = section.items.findIndex((i) => i.id === itemId)
    if (itemIndex === -1) return false

    section.items[itemIndex] = { ...section.items[itemIndex], ...updates }
    return true
  }

  deleteItem(zineId: string, sectionId: string, itemId: string): boolean {
    const zine = this.zines.get(zineId)
    if (!zine) return false

    const section = zine.sections.find((s) => s.id === sectionId)
    if (!section?.items) return false

    const itemIndex = section.items.findIndex((i) => i.id === itemId)
    if (itemIndex === -1) return false

    section.items.splice(itemIndex, 1)
    return true
  }

  // Content transformation utilities
  convertToMarkdown(zineId: string): string {
    const zine = this.zines.get(zineId)
    if (!zine) return ""

    let markdown = `# ${zine.meta.title}\n\n`

    if (zine.meta.subtitle) {
      markdown += `*${zine.meta.subtitle}*\n\n`
    }

    if (zine.meta.author || zine.meta.date) {
      markdown += `**Author:** ${zine.meta.author || "Unknown"} | **Date:** ${zine.meta.date || "Unknown"}\n\n`
    }

    zine.sections.forEach((section) => {
      markdown += `## ${section.title}\n\n`

      if (section.items) {
        section.items.forEach((item) => {
          if (item.title) {
            markdown += `### ${item.title}\n\n`
          }

          switch (item.type) {
            case "text":
              markdown += `${typeof item.content === "string" ? item.content : JSON.stringify(item.content)}\n\n`
              break
            case "list":
              const listContent = item.content as { items: string[]; ordered?: boolean }
              listContent.items.forEach((listItem, index) => {
                const prefix = listContent.ordered ? `${index + 1}.` : "-"
                markdown += `${prefix} ${listItem}\n`
              })
              markdown += "\n"
              break
            case "code":
              markdown += `\`\`\`\n${typeof item.content === "string" ? item.content : JSON.stringify(item.content)}\n\`\`\`\n\n`
              break
            case "quote":
              markdown += `> ${typeof item.content === "string" ? item.content : JSON.stringify(item.content)}\n\n`
              break
            default:
              markdown += `${typeof item.content === "string" ? item.content : JSON.stringify(item.content)}\n\n`
          }
        })
      }
    })

    return markdown
  }

  convertToJSON(zineId: string): string {
    const zine = this.zines.get(zineId)
    if (!zine) return "{}"

    return JSON.stringify(zine, null, 2)
  }

  importFromMarkdown(markdown: string, metadata?: Partial<ZineData["meta"]>): string {
    const lines = markdown.split("\n")
    const sections: ZineSection[] = []
    let currentSection: ZineSection | null = null
    let currentItem: ZineItem | null = null
    let content = ""

    // Extract title from first H1
    const titleMatch = lines.find((line) => line.startsWith("# "))
    const title = titleMatch ? titleMatch.substring(2).trim() : "Imported Zine"

    lines.forEach((line, index) => {
      if (line.startsWith("# ")) {
        // Skip title line
        return
      } else if (line.startsWith("## ")) {
        // New section
        if (currentSection && currentItem) {
          if (!currentSection.items) currentSection.items = []
          currentSection.items.push({ ...currentItem, content })
        }
        if (currentSection) {
          sections.push(currentSection)
        }

        currentSection = {
          id: generateZineId(line.substring(3).trim()),
          title: line.substring(3).trim(),
          items: [],
        }
        currentItem = null
        content = ""
      } else if (line.startsWith("### ")) {
        // New item
        if (currentItem && currentSection) {
          if (!currentSection.items) currentSection.items = []
          currentSection.items.push({ ...currentItem, content })
        }

        currentItem = {
          id: generateZineId(line.substring(4).trim()),
          type: "text",
          title: line.substring(4).trim(),
          content: "",
        }
        content = ""
      } else if (line.trim()) {
        // Content line
        content += line + "\n"
      }
    })

    // Add final item and section
    if (currentSection && currentItem) {
      if (!currentSection.items) currentSection.items = []
      currentSection.items.push({ ...currentItem, content: content.trim() })
    }
    if (currentSection) {
      sections.push(currentSection)
    }

    const zineData: ZineData = {
      meta: {
        title,
        ...metadata,
      },
      sections,
      theme: ZINE_THEMES.terminal,
    }

    return this.createZine(zineData)
  }

  // Template creation
  createFromTemplate(templateName: string, customData?: Partial<ZineData>): string {
    const templates = {
      article: this.createArticleTemplate(),
      technical: this.createTechnicalTemplate(),
      "field-manual": this.createFieldManualTemplate(),
      zine: this.createZineTemplate(),
    }

    const template = templates[templateName as keyof typeof templates] || templates.article

    if (customData) {
      template.meta = { ...template.meta, ...customData.meta }
      if (customData.sections) {
        template.sections = customData.sections
      }
      if (customData.theme) {
        template.theme = customData.theme
      }
    }

    return this.createZine(template)
  }

  private createArticleTemplate(): ZineData {
    return {
      meta: {
        title: "New Article",
        subtitle: "Article subtitle",
        readTime: "5 min",
        tags: ["Article"],
      },
      sections: [
        {
          id: "introduction",
          title: "Introduction",
          icon: "info",
          items: [
            {
              id: "hook",
              type: "quote",
              content: "Compelling opening statement",
            },
            {
              id: "overview",
              type: "text",
              title: "Overview",
              content: "Brief overview of what this article covers",
            },
          ],
        },
        {
          id: "main-content",
          title: "Main Content",
          icon: "bookopen",
          items: [
            {
              id: "content",
              type: "text",
              title: "Content",
              content: "Main article content goes here",
            },
          ],
        },
        {
          id: "conclusion",
          title: "Conclusion",
          icon: "sparkles",
          items: [
            {
              id: "summary",
              type: "text",
              title: "Summary",
              content: "Key takeaways and conclusions",
            },
          ],
        },
      ],
      theme: ZINE_THEMES.academic,
    }
  }

  private createTechnicalTemplate(): ZineData {
    return {
      meta: {
        title: "Technical Documentation",
        subtitle: "Technical guide or documentation",
        complexity: "Intermediate",
        tags: ["Technical", "Documentation"],
      },
      sections: [
        {
          id: "overview",
          title: "Overview",
          icon: "info",
          items: [
            {
              id: "description",
              type: "text",
              title: "Description",
              content: "What this documentation covers",
            },
          ],
        },
        {
          id: "implementation",
          title: "Implementation",
          icon: "code2",
          items: [
            {
              id: "code-example",
              type: "code",
              title: "Code Example",
              content: "// Code example goes here\nconsole.log('Hello, world!');",
            },
          ],
        },
        {
          id: "usage",
          title: "Usage",
          icon: "terminal",
          items: [
            {
              id: "instructions",
              type: "list",
              title: "Instructions",
              content: {
                ordered: true,
                items: ["Step 1: First step", "Step 2: Second step", "Step 3: Third step"],
              },
            },
          ],
        },
      ],
      theme: ZINE_THEMES.terminal,
    }
  }

  private createFieldManualTemplate(): ZineData {
    return {
      meta: {
        title: "Field Manual",
        subtitle: "Operational guide and reference",
        version: "v1.0.0",
        tags: ["Manual", "Reference"],
      },
      sections: [
        {
          id: "protocols",
          title: "Protocols",
          icon: "circle",
          items: [
            {
              id: "protocol-1",
              type: "profile",
              title: "Protocol Name",
              content: {
                label: "Brief description of the protocol",
                tags: ["tag1", "tag2", "tag3"],
                description: "Detailed protocol instructions",
              },
            },
          ],
        },
        {
          id: "procedures",
          title: "Procedures",
          icon: "square",
          items: [
            {
              id: "procedure-1",
              type: "list",
              title: "Procedure Name",
              content: {
                ordered: true,
                items: ["Step 1 of procedure", "Step 2 of procedure", "Step 3 of procedure"],
              },
            },
          ],
        },
      ],
      theme: ZINE_THEMES.terminal,
    }
  }

  private createZineTemplate(): ZineData {
    return {
      meta: {
        title: "New Zine",
        subtitle: "Creative publication",
        issue: "Issue 001",
        date: new Date().toLocaleDateString(),
        tags: ["Zine", "Creative"],
      },
      sections: [
        {
          id: "manifesto",
          title: "Manifesto",
          icon: "brain",
          items: [
            {
              id: "statement",
              type: "quote",
              content: "Core belief or statement",
            },
          ],
        },
        {
          id: "content",
          title: "Content",
          icon: "bookopen",
          items: [
            {
              id: "main-content",
              type: "text",
              title: "Main Content",
              content: "Main zine content goes here",
            },
          ],
        },
      ],
      theme: ZINE_THEMES.cyberpunk,
    }
  }

  // Export utilities
  exportAll(): { [id: string]: ZineData } {
    return Object.fromEntries(this.zines.entries())
  }

  importAll(data: { [id: string]: ZineData }): void {
    Object.entries(data).forEach(([id, zineData]) => {
      if (validateZineData(zineData)) {
        this.zines.set(id, zineData)
      }
    })
  }
}

// Singleton instance for global use
export const zineContentManager = new ZineContentManager()
