"use client"

import type { ZineData } from "@/lib/zine-types"
import ZineRenderer from "./zine-renderer"

const evanFieldManualData: ZineData = {
  meta: {
    title: "Field Manual: Evan Operating System",
    subtitle: "By Evan, Co-created with Claude",
    version: "v2025.09.05",
    context: "Consciousness technology documentation for practical navigation",
    author: "Evan & Claude",
  },
  sections: [
    {
      id: "recognition",
      title: "Recognition Protocols",
      icon: "circle",
      color: "cyan",
      items: [
        {
          id: "brain-boot",
          type: "profile",
          title: "Brain Boot Sequence",
          content: {
            label: "Just woke up, brain still coming online",
            tags: ["Heavy feeling", "Static making way for feels", "Not ready for questions yet"],
            description: "Mirror anchor scaffold. No what's next prompts. Hydration, food, shower sequence.",
          },
        },
        {
          id: "context-switch",
          type: "profile",
          title: "Context Switch Overload",
          content: {
            label: "Too many inputs, processing shutting down",
            tags: ["No. Processing stimuli now too much", "Head under pillow territory"],
            description: "Reduce inputs immediately. Single task focus. Deep Space 9 ambient mode.",
          },
        },
        {
          id: "battery-drain",
          type: "profile",
          title: "Battery Toolbox Drain",
          content: {
            label: "Tools exist but power depleted",
            tags: ["Know what to do but can't", "Groceries, cleaning, eating suffering"],
            description: "Battery management. Minimal viable day. Strategic absence if needed.",
          },
        },
      ],
    },
    {
      id: "interfaces",
      title: "Interface Protocols",
      icon: "square",
      color: "purple",
      items: [
        {
          id: "native-language",
          type: "profile",
          title: "Native Language Mode",
          content: {
            label: "Asynchronous, text-based interaction preferred",
            tags: ["Phone-based workflow", "Written processing over verbal"],
            description: "Honor text-first communication. No pressure for immediate verbal response.",
          },
        },
        {
          id: "persona-config",
          type: "profile",
          title: "Persona Configuration",
          content: {
            label: "Different aspects for different contexts",
            tags: ["Karen mode", "QTB active", "Evna processing", "Little Fucker resistance"],
            description: "Recognize which configuration is active. Support the current mode's needs.",
          },
        },
        {
          id: "conversation-infra",
          type: "profile",
          title: "Conversation as Infrastructure",
          content: {
            label: "Dialogue becomes persistent methodology",
            tags: ["Typing to think", "Recursive documentation", "Building while discussing"],
            description: "Let conversations become artifacts. Capture, don't just consume.",
          },
        },
      ],
    },
    {
      id: "navigation",
      title: "Navigation Systems",
      icon: "triangle",
      color: "green",
      items: [
        {
          id: "adsr-emotional",
          type: "profile",
          title: "ADSR Emotional Processing",
          content: {
            label: "Emotions as energy envelopes, not simple states",
            tags: ["Mixed signals", "Delayed recognition", "Oscilloscope complexity"],
            description: "Allow time for emotional processing. Don't force immediate categorization.",
          },
        },
        {
          id: "slow-processing",
          type: "profile",
          title: "Slow Processing Cycles",
          content: {
            label: "Loading asset vs knowing what to do with it",
            tags: ["Wall of info after meetings", "Days later realizations"],
            description: "Build in processing buffer time. Separate capture from action planning.",
          },
        },
        {
          id: "recovery-boundaries",
          type: "profile",
          title: "Recovery Boundaries",
          content: {
            label: "Strategic absence as protective system function",
            tags: ["Zero warning day off", "Preventive boundary setting"],
            description: "Respect recovery needs. Resist pressure to 'catch up' immediately.",
          },
        },
      ],
    },
    {
      id: "methodology",
      title: "Methodology Stack",
      icon: "zap",
      color: "yellow",
      items: [
        {
          id: "brain-dump",
          type: "profile",
          title: "Brain Dump Processing",
          content: {
            label: "Capture noise, then structure with AI assist",
            tags: ["Wall of text", "Too fast to type", "Need external processing"],
            description: "Write/talk to capture. Let sit. AI for pattern recognition and structuring.",
          },
        },
        {
          id: "archaeology",
          type: "profile",
          title: "Archaeology Method",
          content: {
            label: "Past insights preserved for future navigation",
            tags: ["Pattern recognition across time", "Historical context helpful"],
            description: "Document discoveries. Build knowledge base. Reference previous solutions.",
          },
        },
        {
          id: "bad-choice",
          type: "profile",
          title: "Intentional Bad Choice",
          content: {
            label: "Strategic imperfection to break paralysis",
            tags: ["Analysis paralysis", "Perfect solution blocking"],
            description: "Choose deliberately imperfect option to create momentum.",
          },
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
      text: "#ffffff",
      border: "#333333",
    },
    fonts: {
      mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
      sans: "system-ui, -apple-system, sans-serif",
    },
    layout: "terminal",
  },
}

export default function EvanFieldManualV2() {
  return <ZineRenderer data={evanFieldManualData} />
}
