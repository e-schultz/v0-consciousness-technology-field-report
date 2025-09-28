import { type ZineData, type ZineTheme, ZINE_THEMES } from "./zine-types"

export function getZineTheme(themeName: string): ZineTheme {
  return ZINE_THEMES[themeName] || ZINE_THEMES.terminal
}

export function generateZineId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 50)
}

export function validateZineData(data: ZineData): boolean {
  if (!data.meta?.title) return false
  if (!data.sections?.length) return false

  return data.sections.every((section) => section.id && section.title && (section.items?.length || section.content))
}

export function extractZineMetadata(data: ZineData) {
  const wordCount = data.sections.reduce((count, section) => {
    if (section.items) {
      return (
        count +
        section.items.reduce((itemCount, item) => {
          const content = typeof item.content === "string" ? item.content : JSON.stringify(item.content)
          return itemCount + content.split(/\s+/).length
        }, 0)
      )
    }
    return count
  }, 0)

  const estimatedReadTime = Math.ceil(wordCount / 200) // 200 words per minute

  return {
    wordCount,
    estimatedReadTime: `${estimatedReadTime} min`,
    sectionCount: data.sections.length,
    itemCount: data.sections.reduce((count, section) => count + (section.items?.length || 0), 0),
  }
}

export function searchZineContent(
  data: ZineData,
  query: string,
): Array<{
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

  data.sections.forEach((section) => {
    // Search section title
    if (section.title.toLowerCase().includes(searchText)) {
      results.push({
        sectionId: section.id,
        sectionTitle: section.title,
        match: section.title,
      })
    }

    // Search section items
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

export function getZineNavigation(data: ZineData) {
  return data.sections.map((section) => ({
    id: section.id,
    title: section.title,
    icon: section.icon,
    color: section.color,
    itemCount: section.items?.length || 0,
  }))
}
