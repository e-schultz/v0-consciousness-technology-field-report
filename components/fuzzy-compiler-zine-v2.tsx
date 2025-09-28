"use client"

import type { ZineData } from "@/lib/zine-types"
import ZineRenderer from "./zine-renderer"

const fuzzyCompilerZineData: ZineData = {
  meta: {
    title: "FUZZY COMPILER ZINE",
    subtitle: "How AI compiles messy thought into executable knowledge",
    issue: "Issue 001",
    date: "September 2025",
    accent: "cyan",
    context:
      "Built With React + lucide-react only. No frameworks. A11Y first. Dark terminal theme. Crafted for artifact canvases.",
  },
  sections: [
    {
      id: "manifesto",
      title: "Manifesto: The Compiler With Feelings",
      icon: "brain",
      color: "cyan",
      items: [
        {
          id: "premise",
          type: "text",
          title: "Premise",
          content:
            "A fuzzy compiler doesn't demand purity. It ingests partials, metaphors, and typos, then resolves intent into structures the world can run.",
        },
        {
          id: "properties",
          type: "list",
          title: "Five Properties",
          content: {
            items: [
              "Tolerance to ambiguity without collapsing nuance",
              "Runtime negotiation between author intent and available patterns",
              "Semantic threading: keep trails across edits and contexts",
              "Progressive lowering: from story → schema → spec → code",
              "Reversible compilation: explain the path, not only the result",
            ],
          },
        },
      ],
    },
    {
      id: "patterns",
      title: "Patterns: From Vibes to Vectors",
      icon: "listtree",
      color: "purple",
      items: [
        {
          id: "adp-t",
          type: "text",
          title: "ADP-T Lowering",
          content:
            "Analogy → Diagram → Plain Language → Technical Detail. Each pass compresses uncertainty while preserving links back to the source narration.",
        },
        {
          id: "compiler-passes",
          type: "list",
          title: "Compiler Passes",
          content: {
            ordered: true,
            items: [
              "Lex fuzzy tokens (metaphor, gesture, sketch)",
              "Bind to motifs (domains, constraints, data) via retrieval",
              "Type-hint with exemplars and counter-examples",
              "Emit portable artifacts (spec blocks, tests, stubs)",
            ],
          },
        },
      ],
    },
    {
      id: "pipeline",
      title: "Reference Pipeline",
      icon: "code2",
      color: "green",
      items: [
        {
          id: "stages",
          type: "list",
          title: "Stages",
          content: {
            ordered: true,
            items: [
              "Capture: logs, sketches, voice, fragments",
              "Index: chunk, vectorize, thread",
              "Resolve: ask-for-intent, pick patterns, align constraints",
              "Lower: produce specs, diagrams, tests",
              "Run: generate scaffolds; verify with examples",
              "Explain: provenance and back-links for audit",
            ],
          },
        },
        {
          id: "output",
          type: "text",
          title: "Output",
          content:
            "Executable knowledge is not just code. It is code + evidence + reversible narrative so future you can recompile context.",
        },
      ],
    },
    {
      id: "failures",
      title: "Failure Modes & Safety Rails",
      icon: "bug",
      color: "yellow",
      items: [
        {
          id: "pitfalls",
          type: "list",
          title: "Common Pitfalls",
          content: {
            items: [
              "Premature coherence: polishing the wrong story",
              "Specious precision: confident but unfalsifiable output",
              "Context rot: broken threads, lost assumptions",
              "Unverifiable synthesis: no tests, no traces",
            ],
          },
        },
        {
          id: "rails",
          type: "list",
          title: "Safety Rails",
          content: {
            items: [
              "Always emit tests or checklists",
              "Track assumptions as data, not vibes",
              "Cite sources and link trails",
              "Prefer shacks you can move over cathedrals you can't",
            ],
          },
        },
      ],
    },
    {
      id: "glossary",
      title: "Glossary for the Impatient",
      icon: "bookopen",
      color: "magenta",
      items: [
        {
          id: "semantic-thread",
          type: "profile",
          title: "Semantic Thread",
          content: {
            label: "Trail of meaning linking artifacts across time",
            tags: ["provenance", "continuity", "auditability"],
          },
        },
        {
          id: "lowering",
          type: "profile",
          title: "Lowering",
          content: {
            label: "Transforming high-level intent into specific, testable structures",
            tags: ["compilers", "design", "pedagogy"],
          },
        },
      ],
    },
    {
      id: "credits",
      title: "Colophon & Credits",
      icon: "info",
      color: "white",
      items: [
        {
          id: "built-with",
          type: "text",
          title: "Built With",
          content:
            "React + lucide-react only. No frameworks. A11Y first. Dark terminal theme. Crafted for artifact canvases.",
        },
      ],
    },
  ],
  theme: {
    name: "terminal",
    colors: {
      primary: "#00ff41",
      secondary: "#ff006e",
      accent: "#00ffff",
      background: "#000000",
      text: "#e6e6e6",
      border: "#333333",
    },
    fonts: {
      mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
      sans: "system-ui, -apple-system, sans-serif",
    },
    layout: "terminal",
  },
}

export default function FuzzyCompilerZineV2() {
  return <ZineRenderer data={fuzzyCompilerZineData} />
}
