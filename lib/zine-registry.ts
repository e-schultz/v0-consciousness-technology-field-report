export interface ZineMetadata {
  id: string
  title: string
  subtitle?: string
  path: string
  accent: string
  issue?: string
  date?: string
  readTime?: string
  complexity?: string
  tags?: string[]
  theme: "terminal" | "article" | "zine" | "forum" | "aesthetic"
}

export interface ZineSection {
  id: string
  title: string
  icon?: string
  color?: string
  items: ZineItem[]
}

export interface ZineItem {
  id: string
  type: "text" | "list" | "profile" | "code" | "image" | "quote"
  title: string
  body?: string
  list?: string[]
  profile?: {
    label: string
    tags: string[]
  }
  code?: {
    language: string
    content: string
  }
}

export interface ZineData {
  meta: ZineMetadata
  sections: ZineSection[]
}

// Registry of all zines with their metadata and routing
export const ZINE_REGISTRY: Record<string, ZineMetadata> = {
  "bridge-walker": {
    id: "bridge-walker",
    title: "Bridge Walker",
    subtitle: "Consciousness Technology Field Report",
    path: "/",
    accent: "#9945ff",
    theme: "terminal",
  },
  techcraft: {
    id: "techcraft",
    title: "TechCraft",
    subtitle: "A case study in persistent context architecture",
    path: "/techcraft",
    accent: "#00d4aa",
    readTime: "12 min",
    complexity: "Senior",
    tags: ["Architecture", "State Management", "Developer Experience"],
    theme: "article",
  },
  "oracle-crosstalk": {
    id: "oracle-crosstalk",
    title: "Oracle Crosstalk",
    path: "/oracle-crosstalk",
    accent: "#ff6b6b",
    theme: "terminal",
  },
  "testing-fragments": {
    id: "testing-fragments",
    title: "Testing Fragments",
    path: "/testing-fragments",
    accent: "#4ecdc4",
    theme: "terminal",
  },
  "horror-healing": {
    id: "horror-healing",
    title: "Horror Healing",
    path: "/horror-healing",
    accent: "#00ff41",
    theme: "forum",
  },
  "aesthetic-synthesis": {
    id: "aesthetic-synthesis",
    title: "Aesthetic Synthesis",
    path: "/aesthetic-synthesis",
    accent: "#ff9ff3",
    theme: "aesthetic",
  },
  "cognitive-protocol": {
    id: "cognitive-protocol",
    title: "Cognitive Protocol",
    path: "/cognitive-protocol",
    accent: "#54a0ff",
    theme: "terminal",
  },
  "evan-field-manual": {
    id: "evan-field-manual",
    title: "Evan Field Manual",
    path: "/evan-field-manual",
    accent: "#feca57",
    theme: "terminal",
  },
  "curious-turtle-cascade": {
    id: "curious-turtle-cascade",
    title: "Curious Turtle Cascade",
    path: "/curious-turtle-cascade",
    accent: "#48dbfb",
    theme: "terminal",
  },
  "turtle-archaeology": {
    id: "turtle-archaeology",
    title: "Turtle Archaeology",
    path: "/turtle-archaeology",
    accent: "#0abde3",
    theme: "terminal",
  },
  "fuzzy-compiler-zine": {
    id: "fuzzy-compiler-zine",
    title: "Fuzzy Compiler Zine",
    subtitle: "How AI compiles messy thought into executable knowledge",
    path: "/fuzzy-compiler-zine",
    accent: "#00E5FF",
    issue: "Issue 001",
    date: "September 2025",
    theme: "zine",
  },
}

// Helper functions for working with the registry
export function getZineById(id: string): ZineMetadata | undefined {
  return ZINE_REGISTRY[id]
}

export function getAllZines(): ZineMetadata[] {
  return Object.values(ZINE_REGISTRY)
}

export function getZinesByTheme(theme: ZineMetadata["theme"]): ZineMetadata[] {
  return getAllZines().filter((zine) => zine.theme === theme)
}

export function getZineByPath(path: string): ZineMetadata | undefined {
  return getAllZines().find((zine) => zine.path === path)
}
