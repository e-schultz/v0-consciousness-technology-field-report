"use client"

import type { ZineItem, ZineTheme } from "@/lib/zine-types"
import { useState } from "react"
import { ChevronDown, ChevronRight, Code, Quote, List, User, Zap } from "lucide-react"

interface ZineContentProps {
  item: ZineItem
  theme: ZineTheme
  sectionColor?: string
}

export function TextContent({ item, theme, sectionColor }: ZineContentProps) {
  const content = typeof item.content === "string" ? item.content : ""

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
      <div
        className="text-sm leading-relaxed whitespace-pre-wrap"
        style={{ color: theme.colors.text }}
        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br>") }}
      />
    </div>
  )
}

export function CodeContent({ item, theme, sectionColor }: ZineContentProps) {
  const content = typeof item.content === "string" ? item.content : ""

  return (
    <div
      className="mb-4 rounded-lg border"
      style={{
        borderColor: `${sectionColor || theme.colors.border}40`,
        backgroundColor: theme.colors.background,
      }}
    >
      {item.title && (
        <div className="p-3 border-b flex items-center gap-2" style={{ borderColor: theme.colors.border }}>
          <Code size={16} style={{ color: sectionColor || theme.colors.primary }} />
          <h4 className="font-semibold" style={{ color: sectionColor || theme.colors.primary }}>
            {item.title}
          </h4>
        </div>
      )}
      <pre
        className="p-4 overflow-x-auto text-sm"
        style={{
          color: theme.colors.accent,
          fontFamily: theme.fonts.mono,
        }}
      >
        <code>{content}</code>
      </pre>
    </div>
  )
}

export function QuoteContent({ item, theme, sectionColor }: ZineContentProps) {
  const content = typeof item.content === "string" ? item.content : ""

  return (
    <div className="mb-4">
      <blockquote
        className="border-l-4 pl-6 py-4 italic"
        style={{
          borderColor: sectionColor || theme.colors.primary,
          color: theme.colors.text,
        }}
      >
        <Quote size={20} className="mb-2 opacity-50" />
        <div className="text-lg leading-relaxed">{content}</div>
        {item.title && <cite className="block mt-3 text-sm opacity-80 not-italic">— {item.title}</cite>}
      </blockquote>
    </div>
  )
}

export function ListContent({ item, theme, sectionColor }: ZineContentProps) {
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
        <div className="flex items-center gap-2 mb-3">
          <List size={16} style={{ color: sectionColor || theme.colors.primary }} />
          <h4 className="font-semibold" style={{ color: sectionColor || theme.colors.primary }}>
            {item.title}
          </h4>
        </div>
      )}
      <ListTag
        className={`text-sm space-y-2 ${listContent.ordered ? "list-decimal" : "list-disc"} pl-6`}
        style={{ color: theme.colors.text }}
      >
        {listContent.items.map((listItem, idx) => (
          <li key={idx} className="leading-relaxed">
            {listItem}
          </li>
        ))}
      </ListTag>
    </div>
  )
}

export function ProfileContent({ item, theme, sectionColor }: ZineContentProps) {
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
        <div className="flex items-center gap-2 mb-3">
          <User size={16} style={{ color: sectionColor || theme.colors.primary }} />
          <h4 className="font-semibold" style={{ color: sectionColor || theme.colors.primary }}>
            {item.title}
          </h4>
        </div>
      )}
      <div className="space-y-3">
        <div className="font-medium" style={{ color: theme.colors.text }}>
          {profileContent.label}
        </div>
        {profileContent.description && (
          <div className="text-sm opacity-80" style={{ color: theme.colors.text }}>
            {profileContent.description}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {profileContent.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs border"
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
}

export function InteractiveContent({ item, theme, sectionColor }: ZineContentProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="mb-4 rounded-lg border"
      style={{
        borderColor: `${sectionColor || theme.colors.border}40`,
        backgroundColor: `${theme.colors.background}80`,
      }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left flex items-center justify-between hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-2">
          <Zap size={16} style={{ color: sectionColor || theme.colors.primary }} />
          <h4 className="font-semibold" style={{ color: sectionColor || theme.colors.primary }}>
            {item.title || "Interactive Component"}
          </h4>
        </div>
        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4">
          <div className="p-4 rounded border-2 border-dashed" style={{ borderColor: theme.colors.border }}>
            <div className="text-center text-sm opacity-60" style={{ color: theme.colors.text }}>
              Interactive component placeholder
              <br />
              Component:{" "}
              {typeof item.content === "object" && "component" in item.content ? item.content.component : "Unknown"}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function ZineContentRenderer({ item, theme, sectionColor }: ZineContentProps) {
  switch (item.type) {
    case "text":
      return <TextContent item={item} theme={theme} sectionColor={sectionColor} />
    case "code":
      return <CodeContent item={item} theme={theme} sectionColor={sectionColor} />
    case "quote":
      return <QuoteContent item={item} theme={theme} sectionColor={sectionColor} />
    case "list":
      return <ListContent item={item} theme={theme} sectionColor={sectionColor} />
    case "profile":
      return <ProfileContent item={item} theme={theme} sectionColor={sectionColor} />
    case "interactive":
      return <InteractiveContent item={item} theme={theme} sectionColor={sectionColor} />
    default:
      return <TextContent item={item} theme={theme} sectionColor={sectionColor} />
  }
}
