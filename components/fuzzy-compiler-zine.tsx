"use client"

import { useEffect, useRef, useState } from "react"
import {
  Cpu,
  Code2,
  Brain,
  Sparkles,
  Terminal,
  BookOpen,
  ListTree,
  Bug,
  Wand2,
  ChevronDown,
  ChevronRight,
  Info,
} from "lucide-react"

// ──────────────────────────────────────────────────────────────────────────────
// Data Source: all content flows from this single object
// ──────────────────────────────────────────────────────────────────────────────
const estateData = {
  meta: {
    title: "FUZZY COMPILER ZINE",
    subtitle: "How AI compiles messy thought into executable knowledge",
    issue: "Issue 001",
    date: "September 2025",
    accent: "cyan",
  },
  sections: [
    {
      id: "manifesto",
      title: "Manifesto: The Compiler With Feelings",
      icon: "Brain",
      color: "cyan",
      items: [
        {
          id: "m-1",
          type: "text",
          title: "Premise",
          body: "A fuzzy compiler doesn't demand purity. It ingests partials, metaphors, and typos, then resolves intent into structures the world can run.",
        },
        {
          id: "m-2",
          type: "list",
          title: "Five Properties",
          list: [
            "Tolerance to ambiguity without collapsing nuance",
            "Runtime negotiation between author intent and available patterns",
            "Semantic threading: keep trails across edits and contexts",
            "Progressive lowering: from story → schema → spec → code",
            "Reversible compilation: explain the path, not only the result",
          ],
        },
      ],
    },
    {
      id: "patterns",
      title: "Patterns: From Vibes to Vectors",
      icon: "ListTree",
      color: "purple",
      items: [
        {
          id: "p-1",
          type: "text",
          title: "ADP-T Lowering",
          body: "Analogy → Diagram → Plain Language → Technical Detail. Each pass compresses uncertainty while preserving links back to the source narration.",
        },
        {
          id: "p-2",
          type: "list",
          title: "Compiler Passes",
          list: [
            "Lex fuzzy tokens (metaphor, gesture, sketch)",
            "Bind to motifs (domains, constraints, data) via retrieval",
            "Type-hint with exemplars and counter-examples",
            "Emit portable artifacts (spec blocks, tests, stubs)",
          ],
        },
      ],
    },
    {
      id: "pipeline",
      title: "Reference Pipeline",
      icon: "Code2",
      color: "green",
      items: [
        {
          id: "pi-1",
          type: "list",
          title: "Stages",
          list: [
            "Capture: logs, sketches, voice, fragments",
            "Index: chunk, vectorize, thread",
            "Resolve: ask-for-intent, pick patterns, align constraints",
            "Lower: produce specs, diagrams, tests",
            "Run: generate scaffolds; verify with examples",
            "Explain: provenance and back-links for audit",
          ],
        },
        {
          id: "pi-2",
          type: "text",
          title: "Output",
          body: "Executable knowledge is not just code. It is code + evidence + reversible narrative so future you can recompile context.",
        },
      ],
    },
    {
      id: "failures",
      title: "Failure Modes & Safety Rails",
      icon: "Bug",
      color: "yellow",
      items: [
        {
          id: "f-1",
          type: "list",
          title: "Common Pitfalls",
          list: [
            "Premature coherence: polishing the wrong story",
            "Specious precision: confident but unfalsifiable output",
            "Context rot: broken threads, lost assumptions",
            "Unverifiable synthesis: no tests, no traces",
          ],
        },
        {
          id: "f-2",
          type: "list",
          title: "Rails",
          list: [
            "Always emit tests or checklists",
            "Track assumptions as data, not vibes",
            "Cite sources and link trails",
            "Prefer shacks you can move over cathedrals you can't",
          ],
        },
      ],
    },
    {
      id: "glossary",
      title: "Glossary for the Impatient",
      icon: "BookOpen",
      color: "magenta",
      items: [
        {
          id: "g-1",
          type: "profile",
          title: "Semantic Thread",
          profile: {
            label: "Trail of meaning linking artifacts across time",
            tags: ["provenance", "continuity", "auditability"],
          },
        },
        {
          id: "g-2",
          type: "profile",
          title: "Lowering",
          profile: {
            label: "Transforming high-level intent into specific, testable structures",
            tags: ["compilers", "design", "pedagogy"],
          },
        },
      ],
    },
    {
      id: "credits",
      title: "Colophon & Credits",
      icon: "Info",
      color: "white",
      items: [
        {
          id: "c-1",
          type: "text",
          title: "Built With",
          body: "React + lucide-react only. No frameworks. A11Y first. Dark terminal theme. Crafted for artifact canvases.",
        },
      ],
    },
  ],
}

// ──────────────────────────────────────────────────────────────────────────────
// Utilities
// ──────────────────────────────────────────────────────────────────────────────
const COLOR_MAP = {
  cyan: "#00E5FF",
  purple: "#B388FF",
  green: "#9AFF6B",
  yellow: "#F8E16C",
  magenta: "#FF66CC",
  white: "#E6E6E6",
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(!!mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])
  return reduced
}

function IconByName({ name, size = 16 }) {
  const map = { Brain, ListTree, Code2, Bug, BookOpen, Info }
  const Cmp = map[name] || Terminal
  return <Cmp size={size} aria-hidden />
}

// ──────────────────────────────────────────────────────────────────────────────
// Creative Coding Visualization: FuzzyField
// A canvas of wandering particles that try to align with an invisible phrase
// "compile meaning" expressed as a low-res raster field. Pure React + Canvas.
// ──────────────────────────────────────────────────────────────────────────────
function FuzzyField({ accent = "#00E5FF" }) {
  const ref = useRef(null)
  const container = useRef(null)
  const reduced = usePrefersReducedMotion()
  const phrase = "compile meaning"

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext("2d")

    // Resize to container
    function fit() {
      const w = Math.max(320, container.current?.clientWidth || 640)
      const h = Math.max(160, Math.floor(w * 0.35))
      canvas.width = w
      canvas.height = h
      drawMask()
    }

    // Draw phrase to offscreen for sampling
    let mask
    function drawMask() {
      const off = document.createElement("canvas")
      off.width = canvas.width
      off.height = canvas.height
      const octx = off.getContext("2d")
      octx.fillStyle = "#000"
      octx.fillRect(0, 0, off.width, off.height)
      octx.font = `bold ${Math.max(24, Math.floor(off.width / 10))}px ui-monospace, SFMono-Regular, Menlo, monospace`
      octx.textAlign = "center"
      octx.textBaseline = "middle"
      octx.fillStyle = "#fff"
      octx.fillText(phrase.toUpperCase(), off.width / 2, off.height / 2)
      mask = octx.getImageData(0, 0, off.width, off.height)
    }

    // Particles
    const N = 220
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: 0,
      vy: 0,
    }))

    function sample(x, y) {
      if (!mask) return 0
      const ix = Math.max(0, Math.min(mask.width - 1, x | 0))
      const iy = Math.max(0, Math.min(mask.height - 1, y | 0))
      const idx = (iy * mask.width + ix) * 4
      return mask.data[idx + 0] > 16 ? 1 : 0 // on text = 1
    }

    let raf
    function tick(t) {
      const w = canvas.width,
        h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // Background grid glow
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, w, h)

      // Semi-random field flow
      for (const p of pts) {
        const on = sample(p.x, p.y)
        // Force toward nearest text boundary using local gradient sampling
        const s = 2
        const nx = sample(p.x + s, p.y) - sample(p.x - s, p.y)
        const ny = sample(p.x, p.y + s) - sample(p.x, p.y - s)
        const ax = on ? -nx : nx // inside text drift outward; outside drift in
        const ay = on ? -ny : ny

        // Add gentle curl noise
        const k = 0.0025 * (reduced ? 0 : 1)
        const curl = Math.sin((p.y + t * 0.06) * 0.02) - Math.cos((p.x - t * 0.04) * 0.02)

        p.vx = (p.vx + ax * 0.35 + curl * 0.8) * 0.92
        p.vy = (p.vy + ay * 0.35 - curl * 0.8) * 0.92
        p.x += p.vx + (Math.random() - 0.5) * (reduced ? 0.2 : 0.6)
        p.y += p.vy + (Math.random() - 0.5) * (reduced ? 0.2 : 0.6)

        // Wrap
        if (p.x < 0) p.x += w
        if (p.x >= w) p.x -= w
        if (p.y < 0) p.y += h
        if (p.y >= h) p.y -= h

        // Draw
        ctx.fillStyle = accent
        ctx.globalAlpha = 0.8
        ctx.fillRect(p.x, p.y, 1.5, 1.5)
      }
      ctx.globalAlpha = 1

      if (!reduced) raf = requestAnimationFrame(tick)
    }

    fit()
    raf = requestAnimationFrame(tick)
    window.addEventListener("resize", fit)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", fit)
    }
  }, [accent, reduced])

  return (
    <div ref={container} style={{ width: "100%" }}>
      <canvas
        ref={ref}
        role="img"
        aria-label="Animated field of particles converging toward hidden text that reads 'COMPILE MEANING'"
        style={{ width: "100%", height: "auto", display: "block", filter: "drop-shadow(0 0 6px rgba(0,229,255,0.3))" }}
      />
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// UI Primitives
// ──────────────────────────────────────────────────────────────────────────────
function Section({ section, expanded, onToggle, children }) {
  const color = COLOR_MAP[section.color] || COLOR_MAP.white
  const panelId = `panel-${section.id}`
  const btnId = `toggle-${section.id}`
  return (
    <section
      style={{
        border: `1px solid ${color}40`,
        borderRadius: 10,
        marginBottom: 14,
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      <button
        id={btnId}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
        style={{
          width: "100%",
          textAlign: "left",
          background: "transparent",
          color: color,
          padding: "12px 12px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
        }}
      >
        <IconByName name={section.icon} size={18} />
        <span style={{ fontSize: 14, letterSpacing: 0.3 }}>{section.title}</span>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center" }}>
          {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        style={{
          maxHeight: expanded ? 1000 : 0,
          transition: "max-height 280ms ease",
        }}
      >
        <div style={{ padding: expanded ? 12 : 0 }}>{children}</div>
      </div>
    </section>
  )
}

function ItemCard({ item, idx, parentId }) {
  const [open, setOpen] = useState(false)
  const color = COLOR_MAP.white
  const panelId = `item-${parentId}-${item.id}`
  const btnId = `toggle-${parentId}-${item.id}`

  return (
    <div
      style={{
        border: `1px dashed ${color}30`,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        background: "#0E0E0E",
      }}
    >
      <button
        id={btnId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          background: "transparent",
          color: "#E6E6E6",
          textAlign: "left",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 13,
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
      >
        <Sparkles size={14} aria-hidden />
        <strong style={{ fontWeight: 600 }}>{item.title}</strong>
        <span style={{ marginLeft: "auto" }}>{open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        style={{ maxHeight: open ? 800 : 0, transition: "max-height 240ms ease" }}
      >
        {open && (
          <div style={{ paddingTop: 8, color: "#CFCFCF", lineHeight: 1.6 }}>
            {item.type === "text" && <p style={{ margin: 0 }}>{item.body}</p>}
            {item.type === "list" && (
              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {item.list.map((li, i) => (
                  <li key={i} style={{ margin: "6px 0" }}>
                    {li}
                  </li>
                ))}
              </ul>
            )}
            {item.type === "profile" && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
                <div style={{ opacity: 0.9 }}>{item.profile.label}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {item.profile.tags.map((t, i) => (
                    <span
                      key={i}
                      style={{ border: "1px solid #444", borderRadius: 999, padding: "2px 8px", fontSize: 12 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// Page Shell
// ──────────────────────────────────────────────────────────────────────────────
function Header({ meta }) {
  const accent = COLOR_MAP[meta.accent] || COLOR_MAP.cyan
  return (
    <header style={{ padding: 14 }}>
      <pre
        aria-hidden
        style={{
          color: "#7A7A7A",
          background: "#050505",
          border: "1px solid #1a1a1a",
          borderRadius: 8,
          padding: 10,
          fontSize: 10,
          lineHeight: 1.1,
          textShadow: "0 0 8px rgba(255,255,255,0.05)",
        }}
      >{`░░░▒▒▒▓▓▓ FUZZY ▓▓▓▒▒▒░░░\n░░▒▒▓▓▒  COMPILER  ▒▓▓▒▒░░\n▒▒▓▓     Z  I  N  E    ▓▓▒▒`}</pre>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
        <Cpu color={accent} size={18} aria-hidden />
        <div>
          <h1 style={{ margin: 0, color: "#EDEDED", fontSize: 18, letterSpacing: 0.5 }}>{meta.title}</h1>
          <p style={{ margin: 0, color: "#BDBDBD", fontSize: 12 }}>{meta.subtitle}</p>
        </div>
        <span style={{ marginLeft: "auto", color: "#9A9A9A", fontSize: 12 }}>
          {meta.issue} • {meta.date}
        </span>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ padding: 14, opacity: 0.9 }}>
      <pre
        aria-hidden
        style={{
          color: "#6A6A6A",
          background: "#050505",
          border: "1px solid #1a1a1a",
          borderRadius: 8,
          padding: 10,
          fontSize: 10,
          lineHeight: 1.1,
        }}
      >{`▓▓▓▒▒▒░░  END OF ISSUE • KEEP YOUR THREADS TIED • RECOMPILE OFTEN  ░░▒▒▒▓▓▓`}</pre>
    </footer>
  )
}

function StyleTag() {
  return (
    <style>{`
      /* Minimal CSS-in-JS for animations and layout polish */
      @keyframes flicker { 0%, 19%, 21%, 23%, 80%, 100% { opacity: 1 } 20%, 22% { opacity: .6 } 24% { opacity: .85 } }
      pre { animation: flicker 6s infinite; }
      button:focus { outline: 2px solid #1EE1FF; outline-offset: 2px; }
      ::selection { background: #13323a; color: #c8fbff; }
    `}</style>
  )
}

export default function FuzzyCompilerZine() {
  const [open, setOpen] = useState(() => new Set(["manifesto", "pipeline"]))
  const accent = COLOR_MAP[estateData.meta.accent] || COLOR_MAP.cyan

  function toggle(id) {
    setOpen((prev) => {
      const n = new Set(prev)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#E6E6E6",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        paddingBottom: 40,
      }}
    >
      <StyleTag />
      <Header meta={estateData.meta} />

      <main style={{ padding: 14, display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
        <div style={{ padding: 12, border: "1px solid #111", borderRadius: 10, background: "#060606" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Wand2 size={16} aria-hidden />
            <strong style={{ letterSpacing: 0.3 }}>Abstract Visualization</strong>
          </div>
          <FuzzyField accent={accent} />
          <p style={{ marginTop: 8, color: "#BDBDBD", fontSize: 12 }}>
            Particles converge toward hidden structure, like ideas aligning to the nearest runnable form.
          </p>
        </div>

        {estateData.sections.map((sec) => (
          <Section key={sec.id} section={sec} expanded={open.has(sec.id)} onToggle={() => toggle(sec.id)}>
            {sec.items.map((it, i) => (
              <ItemCard key={it.id} item={it} idx={i} parentId={sec.id} />
            ))}
          </Section>
        ))}
      </main>

      <Footer />
    </div>
  )
}
