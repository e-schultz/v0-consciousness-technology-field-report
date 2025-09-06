"use client"

import { useState, useEffect } from "react"

const AestheticSynthesisArticle = () => {
  const [glitchText, setGlitchText] = useState("AESTHETIC SYNTHESIS PROTOCOL")
  const [scanlinePosition, setScanlinePosition] = useState(0)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        const glitched = "AESTHETIC SYNTHESIS PROTOCOL"
          .split("")
          .map((char) => (Math.random() < 0.3 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char))
          .join("")
        setGlitchText(glitched)
        setTimeout(() => setGlitchText("AESTHETIC SYNTHESIS PROTOCOL"), 100)
      }
    }, 2000)

    const scanlineInterval = setInterval(() => {
      setScanlinePosition((prev) => (prev + 1) % 100)
    }, 50)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(scanlineInterval)
    }
  }, [])

  const frameworks = [
    {
      id: 2,
      title: "Archaeological Wisdom Curation",
      ascii: `┌───[memory::shard]───┐
│ ⟨crisis⟩ ≠ ⟨wisdom⟩ │
│  extract→framework  │
│  abandon→emergency  │
└─────────────────────┘`,
      alt: "Bordered memory fragment. Archaeological extraction: keep the lesson, leave the trauma context.",
    },
    {
      id: 3,
      title: "Battery-Operated Toolbox Model",
      ascii: `🔋▓▓ tools::accessible
⚡░░ tools::charging  
⛔▒▒ tools::offline
    └─ recovery ≠ replacement`,
      alt: "Battery status indicators. Tools cycle through power states - unavailable doesn't mean gone.",
    },
    {
      id: 4,
      title: "Buffer Space Creation",
      ascii: `[think] ←░░ VOID ░░→ [execute]
        ↑
   cognitive::gap`,
      alt: "Flow diagram with protected space between thinking and doing. Buffer prevents context contamination.",
    },
    {
      id: 5,
      title: "ADHD Waiting Mode Protocol",
      ascii: `⏳ temporal::constraint
 ├─▶ meaningful::busywork
 ├─▶ inbox::triage  
 ├─▶ breadcrumb::scatter
 └─▶ momentum::preserved`,
      alt: "Hourglass branching to micro-tasks. Constraint becomes productive rather than paralytic.",
    },
    {
      id: 6,
      title: "Intentional Bad Choice Framework",
      ascii: `❓❓ paralysis::state
    ↓
💥 strategic::imperfection
    ↓  
⚡⚡ motion::unlocked`,
      alt: "Progression from uncertainty through deliberate wrong action to movement. Imperfection as unsticking tool.",
    },
    {
      id: 7,
      title: "Meta-Framework",
      ascii: `"just do it"
    ║
    ▓ requires
    ║
scaffolding::architecture`,
      alt: "Vertical structure showing action supported by framework. Simple advice needs complex support.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `linear-gradient(transparent ${scanlinePosition}%, #00ff88 ${scanlinePosition + 1}%, transparent ${scanlinePosition + 2}%)`,
        }}
      />

      {/* Static noise overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-noise" />

      {/* Header */}
      <div className="border-b border-green-400/30 bg-black/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="text-green-300 text-sm mb-2 tracking-widest">▓▓ {glitchText} ▓▓</div>
            <div className="text-pink-400 text-lg mb-4 font-bold">{"{thread | amplification | cascade}"}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-12">
          {frameworks.map((framework, index) => (
            <article key={framework.id} className="border border-green-400/20 rounded-lg p-6 bg-gray-900/20">
              <header className="mb-6">
                <h2 className="text-xl font-bold text-pink-400 mb-2">
                  🧵 {framework.id}/ {framework.title}
                </h2>
              </header>

              <div className="space-y-6">
                {/* ASCII Art */}
                <div className="bg-black/60 p-4 rounded border border-green-400/30">
                  <pre className="text-green-300 text-sm leading-relaxed whitespace-pre-wrap overflow-x-auto">
                    {framework.ascii}
                  </pre>
                </div>

                {/* Alt Text */}
                <div className="text-gray-400 text-sm italic border-l-2 border-cyan-400/50 pl-4">
                  <span className="text-cyan-400 font-semibold">Alt:</span> {framework.alt}
                </div>
              </div>

              {/* Separator */}
              {index < frameworks.length - 1 && <div className="mt-8 text-center text-green-400/50">⸻</div>}
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center border-t border-green-400/30 pt-8">
          <div className="space-y-2 text-green-300">
            <div className="text-pink-400 font-bold">{"{transmission | complete | archived}"}</div>
            <div className="text-sm space-y-1">
              <div>&gt;&gt;&gt; STRESS-TESTED PATTERNS</div>
              <div>&gt;&gt;&gt; READY FOR DEPLOYMENT</div>
              <div className="text-cyan-400">&gt;&gt;&gt; ∞</div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .bg-noise {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(0,255,136,0.15) 1px, transparent 0);
          background-size: 20px 20px;
          animation: noise 0.2s infinite;
        }
        
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1px, -1px); }
          20% { transform: translate(1px, -1px); }
          30% { transform: translate(-1px, 1px); }
          40% { transform: translate(1px, 1px); }
          50% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, -1px); }
          70% { transform: translate(-1px, 1px); }
          80% { transform: translate(1px, 1px); }
          90% { transform: translate(-1px, -1px); }
        }
      `}</style>
    </div>
  )
}

export default AestheticSynthesisArticle
