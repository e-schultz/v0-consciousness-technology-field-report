"use client"

import { useState } from "react"

const TechCraftArticle = () => {
  const [activeSection, setActiveSection] = useState("problem")

  // Article data structure - token efficient
  const articleData = {
    title: "Conversation as Infrastructure",
    subtitle: "A case study in persistent context architecture",
    metadata: {
      readTime: "12 min",
      complexity: "Senior",
      tags: ["Architecture", "State Management", "Developer Experience"],
    },
    sections: {
      problem: {
        title: "The Context Collapse",
        content: {
          hook: "Every technical conversation dies. The insights scatter. The context vanishes.",
          story:
            "You're debugging a complex distributed system. After three hours of collaborative problem-solving with your team, you've mapped the exact sequence of race conditions causing intermittent failures. Two weeks later, the same issue resurfaces. The knowledge is gone.",
          technical:
            "Traditional conversation tooling treats dialogue as ephemeral. Chat logs become archaeological artifacts. Context switches destroy working memory. Knowledge extraction requires manual archaeological work.",
          insight: "What if conversations were persistent infrastructure instead of disposable exchanges?",
        },
      },
      insight: {
        title: "Conversations as State Machines",
        content: {
          hook: "The breakthrough came from recognizing conversations as stateful systems requiring persistence, context management, and retrieval mechanisms.",
          story:
            "While building the FLOAT methodology for neurodivergent cognition, I realized AI conversations followed the same patterns as distributed systems: state management, persistence layers, context switching, and recovery protocols.",
          technical:
            "Every conversation maintains:\n• Working memory (active context)\n• Persistent storage (ChromaDB, bridges)\n• State transitions (mode switches, persona routing)\n• Recovery mechanisms (context restoration)\n• Garbage collection (TTL systems)",
          insight:
            "Conversations are distributed systems with multiple agents, shared state, and eventual consistency requirements.",
        },
      },
      implementation: {
        title: "FLOAT Block v2.3: The Architecture",
        content: {
          hook: "The FLOAT Block Drafts script implements conversation-as-infrastructure at the code level.",
          story:
            "Instead of treating each AI interaction as isolated, the system maintains persistent context through TTL managers, wikilink expansion, and debug shadow creation. It's like Redis for human-AI collaboration.",
          technical: `**Core Components:**

**TTL Manager**
\`\`\`javascript
class TTLManager {
constructor() {
this.noteTTL = new Map();
this.headingTTL = new Map();
this.noteSkips = new Set();
}
shouldInclude(noteTitle, heading, currentTurn) {
// Temporal context inclusion logic
}
}
\`\`\`

**Context Expansion Pipeline**

1. TTL directive parsing → temporal rules
1. Wikilink extraction → graph traversal
1. Content grouping → batch operations
1. Recursive expansion → depth control
1. Debug shadow → archaeological record

**Configuration Hybrid Pattern**

- Persistent config file (session defaults)
- Inline draft config (per-conversation)
- Runtime prompting (interactive adjustment)`,
          insight:
            "The architecture treats conversation history as a queryable database with temporal indexing and graph relationships.",
        },
      },
      patterns: {
        title: "Universal Design Patterns",
        content: {
          hook: "The FLOAT implementation reveals broader patterns applicable to any system requiring contextual persistence.",
          story:
            "After deploying this across 1800+ conversations over 9 months, clear architectural patterns emerged that apply far beyond AI chat interfaces.",
          technical: `**Pattern 1: Temporal State Management**
  Time-based inclusion/exclusion with configurable decay functions. Critical for systems with evolving requirements.

**Pattern 2: Hybrid Configuration**
Multiple configuration layers (persistent, contextual, runtime) with clear precedence rules. Enables both consistency and flexibility.

**Pattern 3: Debug Shadow Architecture**  
Parallel system state capture for archaeological analysis. Essential for complex systems requiring forensic debugging.

**Pattern 4: Graph-Based Context Expansion**
Recursive relationship traversal with cycle detection and depth limits. Scales context without infinite loops.

**Pattern 5: Multi-Format Persistence**
Same logical operations across different storage backends (files, databases, APIs). Abstraction that preserves operational semantics.`,
          insight:
            "These patterns emerge whenever you need to preserve and operate on contextual relationships over time.",
        },
      },
      philosophy: {
        title: "Infrastructure That Preserves Consciousness",
        content: {
          hook: "This isn't just about better tooling. It's about building systems that preserve and amplify human cognitive capacity.",
          story:
            "The real win isn't technical—it's cognitive. When conversations become infrastructure, you're not starting from zero every time. The accumulated intelligence persists. The insights compound.",
          technical:
            "Traditional systems optimize for transactional efficiency. Consciousness-preserving systems optimize for contextual continuity:\n\n• **Memory Management**: Active context streams with configurable TTL\n• **State Persistence**: Queryable conversation archaeology  \n• **Context Synthesis**: Bridge creation for cross-conversation patterns\n• **Cognitive Load Distribution**: Persona-based functional routing\n• **Recovery Protocols**: Context restoration from fragmented state",
          insight:
            "When you architect systems to preserve and operate on consciousness, you're building amplification infrastructure for human intelligence.",
        },
      },
    },
  }

  const currentSection = articleData.sections[activeSection]
  const sectionKeys = Object.keys(articleData.sections)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Header */}
      <div className="border-b border-blue-500/30 bg-gray-900/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-blue-400 text-sm mb-2">TECHCRAFT.dispatch</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{articleData.title}</h1>
          <div className="text-gray-400 text-lg mb-4">{articleData.subtitle}</div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{articleData.metadata.readTime} read</span>
            <span>Target: {articleData.metadata.complexity}</span>
            <div className="flex gap-2">
              {articleData.metadata.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-blue-900/30 rounded text-blue-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <nav className="flex flex-wrap gap-2 mb-8">
          {sectionKeys.map((key, index) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded ${
                activeSection === key ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {index + 1}. {articleData.sections[key].title}
            </button>
          ))}
        </nav>

        {/* Content */}
        <article className="max-w-none">
          <header className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">{currentSection.title}</h2>
          </header>

          <div className="space-y-8">
            {/* Hook */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                {currentSection.content.hook}
              </div>
            </div>

            {/* Story */}
            <div className="prose prose-invert max-w-none">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-blue-300 font-bold mb-3 text-lg">The Story</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{currentSection.content.story}</p>
              </div>
            </div>

            {/* Technical */}
            <div className="prose prose-invert max-w-none">
              <div className="bg-gray-950/80 p-6 rounded-lg border border-gray-700">
                <h3 className="text-green-400 font-bold mb-3 text-lg">Technical Implementation</h3>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {currentSection.content.technical.split("\n\n").map((paragraph, index) => (
                    <div key={index}>
                      {paragraph.includes("```") ? (
                        <pre className="bg-black p-4 rounded text-green-300 overflow-x-auto text-sm">
                          <code>{paragraph.replace(/```javascript\n?|```\n?/g, "")}</code>
                        </pre>
                      ) : paragraph.startsWith("**") ? (
                        <div>
                          {paragraph.split("\n").map((line, lineIndex) => (
                            <div
                              key={lineIndex}
                              className={line.startsWith("**") ? "font-bold text-blue-300 mt-3" : "ml-4"}
                            >
                              {line.replace(/\*\*/g, "")}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="whitespace-pre-line">{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Insight */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-purple-300 font-bold mb-3 text-lg">Key Insight</h3>
              <div className="text-white font-medium text-lg leading-relaxed">{currentSection.content.insight}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
            <button
              onClick={() => {
                const currentIndex = sectionKeys.indexOf(activeSection)
                if (currentIndex > 0) {
                  setActiveSection(sectionKeys[currentIndex - 1])
                }
              }}
              disabled={sectionKeys.indexOf(activeSection) === 0}
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
            >
              ← Previous
            </button>

            <div className="text-gray-500 text-sm">
              {sectionKeys.indexOf(activeSection) + 1} of {sectionKeys.length}
            </div>

            <button
              onClick={() => {
                const currentIndex = sectionKeys.indexOf(activeSection)
                if (currentIndex < sectionKeys.length - 1) {
                  setActiveSection(sectionKeys[currentIndex + 1])
                }
              }}
              disabled={sectionKeys.indexOf(activeSection) === sectionKeys.length - 1}
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
            >
              Next →
            </button>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <div className="mb-2">techcraft.dispatch::conversation-infrastructure</div>
          <div>Architecture that preserves consciousness | FLOAT methodology operational</div>
        </div>
      </footer>
    </div>
  )
}

export default TechCraftArticle
