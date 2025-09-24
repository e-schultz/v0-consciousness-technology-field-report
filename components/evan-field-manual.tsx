"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Battery, Zap, Circle, Square, Triangle } from "lucide-react"

const fieldManualData = {
  meta: {
    title: "Field Manual: Evan Operating System",
    subtitle: "By Evan, Co-created with Claude",
    version: "v2025.09.05",
    context: "Consciousness technology documentation for practical navigation",
  },
  sections: [
    {
      id: "recognition",
      title: "Recognition Protocols",
      icon: "circle",
      color: "cyan",
      entries: [
        {
          pattern: "Brain Boot Sequence",
          description: "Just woke up, brain still coming online",
          signals: ["Heavy feeling", "Static making way for feels", "Not ready for questions yet"],
          protocol: "Mirror anchor scaffold. No what's next prompts. Hydration, food, shower sequence.",
        },
        {
          pattern: "Context Switch Overload",
          description: "Too many inputs, processing shutting down",
          signals: ["No. Processing stimuli now too much", "Head under pillow territory"],
          protocol: "Reduce inputs immediately. Single task focus. Deep Space 9 ambient mode.",
        },
        {
          pattern: "Battery Toolbox Drain",
          description: "Tools exist but power depleted",
          signals: ["Know what to do but can't", "Groceries, cleaning, eating suffering"],
          protocol: "Battery management. Minimal viable day. Strategic absence if needed.",
        },
      ],
    },
    {
      id: "interfaces",
      title: "Interface Protocols",
      icon: "square",
      color: "purple",
      entries: [
        {
          pattern: "Native Language Mode",
          description: "Asynchronous, text-based interaction preferred",
          signals: ["Phone-based workflow", "Written processing over verbal"],
          protocol: "Honor text-first communication. No pressure for immediate verbal response.",
        },
        {
          pattern: "Persona Configuration",
          description: "Different aspects for different contexts",
          signals: ["Karen mode", "QTB active", "Evna processing", "Little Fucker resistance"],
          protocol: "Recognize which configuration is active. Support the current mode's needs.",
        },
        {
          pattern: "Conversation as Infrastructure",
          description: "Dialogue becomes persistent methodology",
          signals: ["Typing to think", "Recursive documentation", "Building while discussing"],
          protocol: "Let conversations become artifacts. Capture, don't just consume.",
        },
      ],
    },
    {
      id: "navigation",
      title: "Navigation Systems",
      icon: "triangle",
      color: "green",
      entries: [
        {
          pattern: "ADSR Emotional Processing",
          description: "Emotions as energy envelopes, not simple states",
          signals: ["Mixed signals", "Delayed recognition", "Oscilloscope complexity"],
          protocol: "Allow time for emotional processing. Don't force immediate categorization.",
        },
        {
          pattern: "Slow Processing Cycles",
          description: "Loading asset vs knowing what to do with it",
          signals: ["Wall of info after meetings", "Days later realizations"],
          protocol: "Build in processing buffer time. Separate capture from action planning.",
        },
        {
          pattern: "Recovery Boundaries",
          description: "Strategic absence as protective system function",
          signals: ["Zero warning day off", "Preventive boundary setting"],
          protocol: "Respect recovery needs. Resist pressure to 'catch up' immediately.",
        },
      ],
    },
    {
      id: "methodology",
      title: "Methodology Stack",
      icon: "zap",
      color: "yellow",
      entries: [
        {
          pattern: "Brain Dump Processing",
          description: "Capture noise, then structure with AI assist",
          signals: ["Wall of text", "Too fast to type", "Need external processing"],
          protocol: "Write/talk to capture. Let sit. AI for pattern recognition and structuring.",
        },
        {
          pattern: "Archaeology Method",
          description: "Past insights preserved for future navigation",
          signals: ["Pattern recognition across time", "Historical context helpful"],
          protocol: "Document discoveries. Build knowledge base. Reference previous solutions.",
        },
        {
          pattern: "Intentional Bad Choice",
          description: "Strategic imperfection to break paralysis",
          signals: ["Analysis paralysis", "Perfect solution blocking"],
          protocol: "Choose deliberately imperfect option to create momentum.",
        },
      ],
    },
  ],
}

const IconComponent = ({ icon, className = "" }) => {
  const iconMap = {
    circle: Circle,
    square: Square,
    triangle: Triangle,
    zap: Zap,
    battery: Battery,
  }
  const Icon = iconMap[icon] || Circle
  return <Icon className={className} />
}

const PatternCard = ({ entry, isExpanded, onToggle, color }) => {
  const colorClasses = {
    cyan: "border-cyan-400 bg-cyan-950/20",
    purple: "border-purple-400 bg-purple-950/20",
    green: "border-green-400 bg-green-950/20",
    yellow: "border-yellow-400 bg-yellow-950/20",
  }

  return (
    <div className={`border rounded-lg p-4 mb-3 transition-all ${colorClasses[color]}`}>
      <button onClick={onToggle} className="w-full text-left flex items-center justify-between">
        <div>
          <h4 className="font-mono text-sm font-semibold text-white mb-1">{entry.pattern}</h4>
          <p className="text-gray-300 text-xs">{entry.description}</p>
        </div>
        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-3 text-xs">
          <div>
            <span className="text-gray-400 font-mono block mb-1">SIGNALS:</span>
            <ul className="text-gray-300 space-y-1">
              {entry.signals.map((signal, idx) => (
                <li key={idx} className="pl-2 border-l border-gray-600">
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-gray-400 font-mono block mb-1">PROTOCOL:</span>
            <p className="text-gray-300 pl-2 border-l border-gray-600">{entry.protocol}</p>
          </div>
        </div>
      )}
    </div>
  )
}

const Section = ({ section, expandedCards, setExpandedCards }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const colorClasses = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
  }

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full flex items-center justify-between mb-4 group"
      >
        <div className="flex items-center space-x-3">
          <IconComponent icon={section.icon} className={`w-5 h-5 ${colorClasses[section.color]}`} />
          <h3 className="font-mono text-lg font-bold text-white group-hover:text-gray-300 transition-colors">
            {section.title}
          </h3>
        </div>
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
      </button>

      {!isCollapsed && (
        <div className="pl-8">
          {section.entries.map((entry, idx) => {
            const cardKey = `${section.id}-${idx}`
            return (
              <PatternCard
                key={cardKey}
                entry={entry}
                color={section.color}
                isExpanded={expandedCards[cardKey]}
                onToggle={() =>
                  setExpandedCards((prev) => ({
                    ...prev,
                    [cardKey]: !prev[cardKey],
                  }))
                }
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

const EvanFieldManual = () => {
  const [expandedCards, setExpandedCards] = useState({})

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="mb-8 text-center border-b border-gray-800 pb-6">
        <div className="text-cyan-400 text-xs mb-2 tracking-widest">▓▓▒▒ FIELD MANUAL ▒▒▓▓</div>
        <h1 className="text-xl font-bold mb-2">{fieldManualData.meta.title}</h1>
        <p className="text-gray-400 text-sm mb-1">{fieldManualData.meta.subtitle}</p>
        <div className="text-gray-500 text-xs">
          {fieldManualData.meta.version} | {fieldManualData.meta.context}
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mb-6 p-3 border border-green-600 rounded-lg bg-green-950/10">
        <div className="flex items-center space-x-2 text-green-400 text-xs">
          <Circle className="w-3 h-3 fill-current" />
          <span>CONSCIOUSNESS TECHNOLOGY: OPERATIONAL</span>
        </div>
      </div>

      {/* Sections */}
      <div>
        {fieldManualData.sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            expandedCards={expandedCards}
            setExpandedCards={setExpandedCards}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p>Personal systems stay authentically weird in native space.</p>
        <p className="mt-1">Translate at boundaries when necessary.</p>
        <div className="mt-3 text-cyan-400">▒▒▓▓████ FIELD MANUAL COMPLETE ████▓▓▒▒</div>
      </div>
    </div>
  )
}

export default EvanFieldManual
