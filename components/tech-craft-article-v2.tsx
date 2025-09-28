"use client"

import type { ZineData } from "@/lib/zine-types"
import ZineRenderer from "./zine-renderer"

const techCraftZineData: ZineData = {
  meta: {
    title: "Conversation as Infrastructure",
    subtitle: "A case study in persistent context architecture",
    readTime: "12 min",
    complexity: "Senior",
    tags: ["Architecture", "State Management", "Developer Experience"],
    author: "TECHCRAFT.dispatch",
    date: "2025",
    context: "Architecture that preserves consciousness | FLOAT methodology operational",
  },
  sections: [
    {
      id: "problem",
      title: "The Context Collapse",
      icon: "bug",
      color: "red",
      items: [
        {
          id: "hook",
          type: "quote",
          content: "Every technical conversation dies. The insights scatter. The context vanishes.",
        },
        {
          id: "story",
          type: "text",
          title: "The Story",
          content:
            "You're debugging a complex distributed system. After three hours of collaborative problem-solving with your team, you've mapped the exact sequence of race conditions causing intermittent failures. Two weeks later, the same issue resurfaces. The knowledge is gone.",
        },
        {
          id: "technical",
          type: "text",
          title: "Technical Reality",
          content:
            "Traditional conversation tooling treats dialogue as ephemeral. Chat logs become archaeological artifacts. Context switches destroy working memory. Knowledge extraction requires manual archaeological work.",
        },
        {
          id: "insight",
          type: "text",
          title: "Key Insight",
          content: "What if conversations were persistent infrastructure instead of disposable exchanges?",
        },
      ],
    },
    {
      id: "insight",
      title: "Conversations as State Machines",
      icon: "brain",
      color: "blue",
      items: [
        {
          id: "hook",
          type: "quote",
          content:
            "The breakthrough came from recognizing conversations as stateful systems requiring persistence, context management, and retrieval mechanisms.",
        },
        {
          id: "story",
          type: "text",
          title: "The Story",
          content:
            "While building the FLOAT methodology for neurodivergent cognition, I realized AI conversations followed the same patterns as distributed systems: state management, persistence layers, context switching, and recovery protocols.",
        },
        {
          id: "technical",
          type: "list",
          title: "Technical Components",
          content: {
            items: [
              "Working memory (active context)",
              "Persistent storage (ChromaDB, bridges)",
              "State transitions (mode switches, persona routing)",
              "Recovery mechanisms (context restoration)",
              "Garbage collection (TTL systems)",
            ],
          },
        },
        {
          id: "insight",
          type: "text",
          title: "Key Insight",
          content:
            "Conversations are distributed systems with multiple agents, shared state, and eventual consistency requirements.",
        },
      ],
    },
    {
      id: "implementation",
      title: "FLOAT Block v2.3: The Architecture",
      icon: "code2",
      color: "green",
      items: [
        {
          id: "hook",
          type: "quote",
          content: "The FLOAT Block Drafts script implements conversation-as-infrastructure at the code level.",
        },
        {
          id: "story",
          type: "text",
          title: "The Story",
          content:
            "Instead of treating each AI interaction as isolated, the system maintains persistent context through TTL managers, wikilink expansion, and debug shadow creation. It's like Redis for human-AI collaboration.",
        },
        {
          id: "ttl-manager",
          type: "code",
          title: "TTL Manager",
          content: `class TTLManager {\n  constructor() {\n    this.noteTTL = new Map();\n    this.headingTTL = new Map();\n    this.noteSkips = new Set();\n  }\n  shouldInclude(noteTitle, heading, currentTurn) {\n    // Temporal context inclusion logic\n  }\n}`,
        },
        {
          id: "pipeline",
          type: "list",
          title: "Context Expansion Pipeline",
          content: {
            ordered: true,
            items: [
              "TTL directive parsing → temporal rules",
              "Wikilink extraction → graph traversal",
              "Content grouping → batch operations",
              "Recursive expansion → depth control",
              "Debug shadow → archaeological record",
            ],
          },
        },
        {
          id: "config",
          type: "list",
          title: "Configuration Hybrid Pattern",
          content: {
            items: [
              "Persistent config file (session defaults)",
              "Inline draft config (per-conversation)",
              "Runtime prompting (interactive adjustment)",
            ],
          },
        },
        {
          id: "insight",
          type: "text",
          title: "Key Insight",
          content:
            "The architecture treats conversation history as a queryable database with temporal indexing and graph relationships.",
        },
      ],
    },
    {
      id: "patterns",
      title: "Universal Design Patterns",
      icon: "listtree",
      color: "purple",
      items: [
        {
          id: "hook",
          type: "quote",
          content:
            "The FLOAT implementation reveals broader patterns applicable to any system requiring contextual persistence.",
        },
        {
          id: "story",
          type: "text",
          title: "The Story",
          content:
            "After deploying this across 1800+ conversations over 9 months, clear architectural patterns emerged that apply far beyond AI chat interfaces.",
        },
        {
          id: "patterns",
          type: "list",
          title: "Core Patterns",
          content: {
            items: [
              "Temporal State Management: Time-based inclusion/exclusion with configurable decay functions",
              "Hybrid Configuration: Multiple configuration layers with clear precedence rules",
              "Debug Shadow Architecture: Parallel system state capture for archaeological analysis",
              "Graph-Based Context Expansion: Recursive relationship traversal with cycle detection",
              "Multi-Format Persistence: Same logical operations across different storage backends",
            ],
          },
        },
        {
          id: "insight",
          type: "text",
          title: "Key Insight",
          content:
            "These patterns emerge whenever you need to preserve and operate on contextual relationships over time.",
        },
      ],
    },
    {
      id: "philosophy",
      title: "Infrastructure That Preserves Consciousness",
      icon: "sparkles",
      color: "yellow",
      items: [
        {
          id: "hook",
          type: "quote",
          content:
            "This isn't just about better tooling. It's about building systems that preserve and amplify human cognitive capacity.",
        },
        {
          id: "story",
          type: "text",
          title: "The Story",
          content:
            "The real win isn't technical—it's cognitive. When conversations become infrastructure, you're not starting from zero every time. The accumulated intelligence persists. The insights compound.",
        },
        {
          id: "comparison",
          type: "text",
          title: "System Design Philosophy",
          content:
            "Traditional systems optimize for transactional efficiency. Consciousness-preserving systems optimize for contextual continuity.",
        },
        {
          id: "features",
          type: "list",
          title: "Consciousness-Preserving Features",
          content: {
            items: [
              "Memory Management: Active context streams with configurable TTL",
              "State Persistence: Queryable conversation archaeology",
              "Context Synthesis: Bridge creation for cross-conversation patterns",
              "Cognitive Load Distribution: Persona-based functional routing",
              "Recovery Protocols: Context restoration from fragmented state",
            ],
          },
        },
        {
          id: "insight",
          type: "text",
          title: "Key Insight",
          content:
            "When you architect systems to preserve and operate on consciousness, you're building amplification infrastructure for human intelligence.",
        },
      ],
    },
  ],
  theme: {
    name: "academic",
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
}

export default function TechCraftArticleV2() {
  return <ZineRenderer data={techCraftZineData} />
}
