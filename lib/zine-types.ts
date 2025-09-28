export interface ZineMetadata {
  title: string
  subtitle?: string
  issue?: string
  version?: string
  date?: string
  context?: string
  readTime?: string
  complexity?: string
  tags?: string[]
  accent?: string
  author?: string
}

export interface ZineSection {
  id: string
  title: string
  icon?: string
  color?: string
  type?: "article" | "interactive" | "visual" | "data"
}

// Content types for different zine styles
export interface ArticleContent {
  hook?: string
  story?: string
  technical?: string
  insight?: string
}

export interface ListContent {
  items: string[]
  ordered?: boolean
}

export interface ProfileContent {
  label: string
  tags: string[]
  description?: string
}

export interface InteractiveContent {
  component: string
  props?: Record<string, any>
}

export interface ZineItem {
  id: string
  type: "text" | "list" | "profile" | "code" | "quote" | "interactive" | "article"
  title?: string
  content: ArticleContent | ListContent | ProfileContent | InteractiveContent | string
  metadata?: Record<string, any>
}

export interface ZineData {
  meta: ZineMetadata
  sections: (ZineSection & {
    items?: ZineItem[]
    content?: ArticleContent
  })[]
  theme?: ZineTheme
}

export interface ZineTheme {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    border: string
  }
  fonts: {
    mono: string
    sans: string
    serif?: string
  }
  layout: "terminal" | "magazine" | "academic" | "cyberpunk" | "minimal"
}

// Predefined themes for consistency
export const ZINE_THEMES: Record<string, ZineTheme> = {
  terminal: {
    name: "Terminal",
    colors: {
      primary: "#00ff41",
      secondary: "#ff006e",
      accent: "#00ffff",
      background: "#0d1117",
      text: "#c9d1d9",
      border: "#30363d",
    },
    fonts: {
      mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
      sans: "system-ui, -apple-system, sans-serif",
    },
    layout: "terminal",
  },
  cyberpunk: {
    name: "Cyberpunk",
    colors: {
      primary: "#9945ff",
      secondary: "#ff0099",
      accent: "#00ffff",
      background: "#0a0014",
      text: "#e0ffe0",
      border: "#9945ff",
    },
    fonts: {
      mono: "Courier New, monospace",
      sans: "system-ui, -apple-system, sans-serif",
    },
    layout: "cyberpunk",
  },
  academic: {
    name: "Academic",
    colors: {
      primary: "#2563eb",
      secondary: "#7c3aed",
      accent: "#059669",
      background: "#1f2937",
      text: "#f3f4f6",
      border: "#374151",
    },
    fonts: {
      mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
      sans: "system-ui, -apple-system, sans-serif",
    },
    layout: "academic",
  },
  minimal: {
    name: "Minimal",
    colors: {
      primary: "#000000",
      secondary: "#666666",
      accent: "#0066cc",
      background: "#ffffff",
      text: "#333333",
      border: "#e5e5e5",
    },
    fonts: {
      mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
      sans: "system-ui, -apple-system, sans-serif",
    },
    layout: "minimal",
  },
}
