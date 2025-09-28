"use client"

import type { ReactNode } from "react"
import type { ZineTheme } from "@/lib/zine-types"

interface ZineLayoutProps {
  theme: ZineTheme
  children: ReactNode
  className?: string
}

export function TerminalLayout({ theme, children, className = "" }: ZineLayoutProps) {
  return (
    <div
      className={`min-h-screen font-mono text-sm ${className}`}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.mono,
      }}
    >
      <style jsx>{`
        .terminal-glow {
          box-shadow: 0 0 20px ${theme.colors.primary}40;
        }
        .terminal-border {
          border: 1px solid ${theme.colors.primary};
        }
        .terminal-flicker {
          animation: flicker 3s infinite alternate;
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
      `}</style>
      {children}
    </div>
  )
}

export function CyberpunkLayout({ theme, children, className = "" }: ZineLayoutProps) {
  return (
    <div
      className={`min-h-screen font-mono overflow-x-hidden ${className}`}
      style={{
        background: `linear-gradient(to br, ${theme.colors.background}, ${theme.colors.secondary}20)`,
        color: theme.colors.text,
        fontFamily: theme.fonts.mono,
      }}
    >
      <style jsx>{`
        .cyberpunk-glow {
          box-shadow: 0 0 20px ${theme.colors.accent};
        }
        .cyberpunk-border {
          border: 1px solid ${theme.colors.accent};
        }
        .cyberpunk-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, 
            ${theme.colors.primary} 0%, 
            ${theme.colors.secondary} 25%, 
            ${theme.colors.accent} 50%, 
            ${theme.colors.primary} 75%, 
            ${theme.colors.secondary} 100%);
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      {children}
    </div>
  )
}

export function AcademicLayout({ theme, children, className = "" }: ZineLayoutProps) {
  return (
    <div
      className={`min-h-screen ${className}`}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.sans,
      }}
    >
      <style jsx>{`
        .academic-section {
          border-left: 4px solid ${theme.colors.primary};
        }
        .academic-highlight {
          background: linear-gradient(to right, ${theme.colors.primary}20, ${theme.colors.accent}20);
        }
      `}</style>
      {children}
    </div>
  )
}

export function MinimalLayout({ theme, children, className = "" }: ZineLayoutProps) {
  return (
    <div
      className={`min-h-screen ${className}`}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.sans,
      }}
    >
      <style jsx>{`
        .minimal-border {
          border: 1px solid ${theme.colors.border};
        }
        .minimal-accent {
          color: ${theme.colors.accent};
        }
      `}</style>
      {children}
    </div>
  )
}

export function ZineLayoutWrapper({ theme, children, className }: ZineLayoutProps) {
  switch (theme.layout) {
    case "terminal":
      return (
        <TerminalLayout theme={theme} className={className}>
          {children}
        </TerminalLayout>
      )
    case "cyberpunk":
      return (
        <CyberpunkLayout theme={theme} className={className}>
          {children}
        </CyberpunkLayout>
      )
    case "academic":
      return (
        <AcademicLayout theme={theme} className={className}>
          {children}
        </AcademicLayout>
      )
    case "minimal":
      return (
        <MinimalLayout theme={theme} className={className}>
          {children}
        </MinimalLayout>
      )
    default:
      return (
        <TerminalLayout theme={theme} className={className}>
          {children}
        </TerminalLayout>
      )
  }
}
