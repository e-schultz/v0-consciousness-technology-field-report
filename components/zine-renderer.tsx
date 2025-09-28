"use client"

import { useState } from "react"
import type { ZineData, ZineItem, ZineSection } from "@/lib/zine-types"
import { getZineTheme } from "@/lib/zine-utils"
import {
  ChevronDown,
  ChevronRight,
  Circle,
  Square,
  Triangle,
  Zap,
  Brain,
  Code2,
  BookOpen,
  Info,
  Bug,
  ListTree,
  Terminal,
  Sparkles,
} from "lucide-react"

interface ZineRendererProps {
  data: ZineData
  className?: string
}

const IconMap = {
  circle: Circle,
  square: Square,
  triangle: Triangle,
  zap: Zap,
  brain: Brain,
  code2: Code2,
  bookopen: BookOpen,
  info: Info,
  bug: Bug,
  listtree: ListTree,
  terminal: Terminal,
  sparkles: Sparkles,
}

function ZineIcon({ name, size = 16, className = "" }: { name?: string; size?: number; className?: string }) {
  if (!name) return null
  const IconComponent = IconMap[name.toLowerCase() as keyof typeof IconMap] || Terminal
  return <IconComponent size={size} className={className} />
}

function ZineItemRenderer({
  item,
  theme,
  sectionColor,
}: {
  item: ZineItem
  theme: any
  sectionColor?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  switch (item.type) {
    case "text":
      return (
        <div
          className="mb-4 p-4 rounded-lg border"
          style={{
            borderColor: `${sectionColor || theme.colors.border}40`,
            backgroundColor: `${theme.colors.background}80`,
          }}
        >
          {item.title && (
            <h4 className="font-semibold mb-2" style={{ color: sectionColor || theme.colors.primary }}>
              {item.title}
            </h4>
          )}
          <div className="text-sm leading-relaxed" style={{ color: theme.colors.text }}>
            {typeof item.content === "string" ? item.content : JSON.stringify(item.content)}
          </div>
        </div>
      )

    case "list":
      const listContent = item.content as { items: string[]; ordered?: boolean }
      const ListTag = listContent.ordered ? "ol" : "ul"
      return (
        <div
          className="mb-4 p-4 rounded-lg border"
          style={{
            borderColor: `${sectionColor || theme.colors.border}40`,
            backgroundColor: `${theme.colors.background}80`,
          }}
        >
          {item.title && (
            <h4 className="font-semibold mb-2" style={{ color: sectionColor || theme.colors.primary }}>
              {item.title}
            </h4>
          )}
          <ListTag className="text-sm space-y-1 pl-4" style={{ color: theme.colors.text }}>
            {listContent.items.map((listItem, idx) => (
              <li key={idx}>{listItem}</li>
            ))}
          </ListTag>
        </div>
      )

    case "article":
      const articleContent = item.content as { hook?: string; story?: string; technical?: string; insight?: string }
      return (
        <div className="mb-6">
          {item.title && (
            <h3 className="text-xl font-bold mb-4" style={{ color: sectionColor || theme.colors.primary }}>
              {item.title}
            </h3>
          )}

          {articleContent.hook && (
            <div className="border-l-4 pl-6 mb-6" style={{ borderColor: sectionColor || theme.colors.primary }}>
              <div className="text-lg font-medium leading-relaxed" style={{ color: theme.colors.text }}>
                {articleContent.hook}
              </div>
            </div>
          )}

          {articleContent.story && (
            <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: `${theme.colors.secondary}20` }}>
              <h4 className="font-bold mb-3" style={{ color: theme.colors.accent }}>
                The Story
              </h4>
              <p className="leading-relaxed whitespace-pre-line" style={{ color: theme.colors.text }}>
                {articleContent.story}
              </p>
            </div>
          )}

          {articleContent.technical && (
            <div
              className="mb-6 p-4 rounded-lg border"
              style={{
                backgroundColor: `${theme.colors.background}80`,
                borderColor: theme.colors.border,
              }}
            >
              <h4 className="font-bold mb-3" style={{ color: theme.colors.accent }}>
                Technical Implementation
              </h4>
              <div className="leading-relaxed space-y-4" style={{ color: theme.colors.text }}>
                {articleContent.technical.split("\n\n").map((paragraph, index) => (
                  <div key={index}>
                    {paragraph.includes("```") ? (
                      <pre
                        className="p-4 rounded overflow-x-auto text-sm"
                        style={{
                          backgroundColor: theme.colors.background,
                          color: theme.colors.accent,
                        }}
                      >
                        <code>{paragraph.replace(/```\w*\n?|```\n?/g, "")}</code>
                      </pre>
                    ) : paragraph.startsWith("**") ? (
                      <div>
                        {paragraph.split("\n").map((line, lineIndex) => (
                          <div
                            key={lineIndex}
                            className={line.startsWith("**") ? "font-bold mt-3" : "ml-4"}
                            style={{ color: line.startsWith("**") ? theme.colors.primary : theme.colors.text }}
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
          )}

          {articleContent.insight && (
            <div
              className="p-6 rounded-lg border"
              style={{
                background: `linear-gradient(to right, ${theme.colors.primary}20, ${theme.colors.accent}20)`,
                borderColor: `${theme.colors.primary}30`,
              }}
            >
              <h4 className="font-bold mb-3" style={{ color: theme.colors.accent }}>
                Key Insight
              </h4>
              <div className="font-medium text-lg leading-relaxed" style={{ color: theme.colors.text }}>
                {articleContent.insight}
              </div>
            </div>
          )}
        </div>
      )

    case "profile":
      const profileContent = item.content as { label: string; tags: string[]; description?: string }
      return (
        <div
          className="mb-4 p-4 rounded-lg border"
          style={{
            borderColor: `${sectionColor || theme.colors.border}40`,
            backgroundColor: `${theme.colors.background}80`,
          }}
        >
          {item.title && (
            <h4 className="font-semibold mb-2" style={{ color: sectionColor || theme.colors.primary }}>
              {item.title}
            </h4>
          )}
          <div className="space-y-2">
            <div style={{ color: theme.colors.text }}>{profileContent.label}</div>
            {profileContent.description && (
              <div className="text-sm opacity-80" style={{ color: theme.colors.text }}>
                {profileContent.description}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {profileContent.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded text-xs border"
                  style={{
                    borderColor: theme.colors.border,
                    backgroundColor: `${sectionColor || theme.colors.primary}20`,
                    color: theme.colors.text,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )

    case "interactive":
      return (
        <div
          className="mb-4 p-4 rounded-lg border"
          style={{
            borderColor: `${sectionColor || theme.colors.border}40`,
            backgroundColor: `${theme.colors.background}80`,
          }}
        >
          {item.title && (
            <h4 className="font-semibold mb-2" style={{ color: sectionColor || theme.colors.primary }}>
              {item.title}
            </h4>
          )}
          <div className="text-sm" style={{ color: theme.colors.text }}>
            Interactive component:{" "}
            {typeof item.content === "object" && "component" in item.content ? item.content.component : "Unknown"}
          </div>
        </div>
      )

    default:
      return (
        <div
          className="mb-4 p-4 rounded-lg border"
          style={{
            borderColor: `${sectionColor || theme.colors.border}40`,
            backgroundColor: `${theme.colors.background}80`,
          }}
        >
          <div className="text-sm" style={{ color: theme.colors.text }}>
            Unknown item type: {item.type}
          </div>
        </div>
      )
  }
}

function ZineSectionRenderer({
  section,
  theme,
  isExpanded,
  onToggle,
}: {
  section: ZineSection & { items?: ZineItem[]; content?: any }
  theme: any
  isExpanded: boolean
  onToggle: () => void
}) {
  const sectionColor = section.color
    ? theme.colors[section.color as keyof typeof theme.colors] || section.color
    : theme.colors.primary

  return (
    <section
      className="mb-6 rounded-lg border overflow-hidden"
      style={{
        borderColor: `${sectionColor}40`,
        backgroundColor: theme.colors.background,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex items-center justify-between hover:opacity-80 transition-opacity"
        style={{ backgroundColor: `${sectionColor}10` }}
      >
        <div className="flex items-center gap-3">
          <ZineIcon name={section.icon} size={18} className="" style={{ color: sectionColor }} />
          <h2 className="text-lg font-bold" style={{ color: sectionColor }}>
            {section.title}
          </h2>
        </div>
        {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4">
          {section.content && (
            <ZineItemRenderer
              item={{ id: "content", type: "article", content: section.content }}
              theme={theme}
              sectionColor={sectionColor}
            />
          )}
          {section.items?.map((item) => (
            <ZineItemRenderer key={item.id} item={item} theme={theme} sectionColor={sectionColor} />
          ))}
        </div>
      )}
    </section>
  )
}

export default function ZineRenderer({ data, className = "" }: ZineRendererProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(data.sections.slice(0, 2).map((s) => s.id)), // Expand first 2 sections by default
  )

  const theme = getZineTheme(data.theme?.name || "terminal")

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId)
      } else {
        newSet.add(sectionId)
      }
      return newSet
    })
  }

  return (
    <div
      className={`min-h-screen font-mono ${className}`}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.mono,
      }}
    >
      {/* Header */}
      <header className="p-6 border-b" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: theme.colors.primary }}>
            {data.meta.title}
          </h1>
          {data.meta.subtitle && (
            <p className="text-lg mb-4" style={{ color: theme.colors.text }}>
              {data.meta.subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-sm opacity-80">
            {data.meta.author && <span>By {data.meta.author}</span>}
            {data.meta.date && <span>{data.meta.date}</span>}
            {data.meta.readTime && <span>{data.meta.readTime} read</span>}
            {data.meta.version && <span>{data.meta.version}</span>}
          </div>

          {data.meta.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {data.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded text-xs border"
                  style={{
                    borderColor: theme.colors.border,
                    backgroundColor: `${theme.colors.primary}20`,
                    color: theme.colors.text,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-6">
        {data.sections.map((section) => (
          <ZineSectionRenderer
            key={section.id}
            section={section}
            theme={theme}
            isExpanded={expandedSections.has(section.id)}
            onToggle={() => toggleSection(section.id)}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t p-6 text-center text-sm opacity-60" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-4xl mx-auto">
          {data.meta.context && <p>{data.meta.context}</p>}
          <p className="mt-2">Generated with unified zine architecture</p>
        </div>
      </footer>
    </div>
  )
}
