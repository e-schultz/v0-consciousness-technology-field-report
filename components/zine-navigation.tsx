"use client"

import { useState } from "react"
import type { ZineData } from "@/lib/zine-types"
import { getZineNavigation } from "@/lib/zine-utils"
import { ChevronDown, ChevronRight, Menu } from "lucide-react"
import { ZineIcon } from "./zine-renderer"

interface ZineNavigationProps {
  data: ZineData
  activeSection: string
  onSectionChange: (sectionId: string) => void
  theme: any
  variant?: "sidebar" | "horizontal" | "dropdown"
}

export function ZineNavigation({
  data,
  activeSection,
  onSectionChange,
  theme,
  variant = "horizontal",
}: ZineNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const navigation = getZineNavigation(data)

  if (variant === "sidebar") {
    return (
      <nav className="w-64 h-full border-r p-4" style={{ borderColor: theme.colors.border }}>
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-2" style={{ color: theme.colors.primary }}>
            {data.meta.title}
          </h2>
          {data.meta.subtitle && (
            <p className="text-sm opacity-80" style={{ color: theme.colors.text }}>
              {data.meta.subtitle}
            </p>
          )}
        </div>

        <div className="space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${
                activeSection === item.id ? "font-semibold" : "hover:opacity-80"
              }`}
              style={{
                backgroundColor: activeSection === item.id ? `${theme.colors.primary}20` : "transparent",
                color: activeSection === item.id ? theme.colors.primary : theme.colors.text,
              }}
            >
              <ZineIcon name={item.icon} size={16} />
              <span className="flex-1">{item.title}</span>
              {item.itemCount > 0 && <span className="text-xs opacity-60">{item.itemCount}</span>}
            </button>
          ))}
        </div>
      </nav>
    )
  }

  if (variant === "dropdown") {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 p-3 rounded-lg border"
          style={{
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
          }}
        >
          <Menu size={16} />
          <span>Sections</span>
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 mt-2 w-64 rounded-lg border shadow-lg z-50"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <div className="p-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left p-2 rounded flex items-center gap-3 transition-all ${
                    activeSection === item.id ? "font-semibold" : "hover:opacity-80"
                  }`}
                  style={{
                    backgroundColor: activeSection === item.id ? `${theme.colors.primary}20` : "transparent",
                    color: activeSection === item.id ? theme.colors.primary : theme.colors.text,
                  }}
                >
                  <ZineIcon name={item.icon} size={14} />
                  <span className="flex-1 text-sm">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Default horizontal navigation
  return (
    <nav className="flex flex-wrap gap-2 p-4 border-b" style={{ borderColor: theme.colors.border }}>
      {navigation.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`px-4 py-2 text-sm font-medium transition-all rounded flex items-center gap-2 ${
            activeSection === item.id ? "font-semibold" : "hover:opacity-80"
          }`}
          style={{
            backgroundColor: activeSection === item.id ? theme.colors.primary : `${theme.colors.border}40`,
            color: activeSection === item.id ? theme.colors.background : theme.colors.text,
          }}
        >
          <ZineIcon name={item.icon} size={14} />
          <span>
            {index + 1}. {item.title}
          </span>
        </button>
      ))}
    </nav>
  )
}
