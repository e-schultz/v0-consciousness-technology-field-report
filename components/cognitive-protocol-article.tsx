"use client"

const CognitiveProtocolArticle = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <div className="border-b border-green-500/30 bg-black/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-green-300 text-sm mb-2">COGNITIVE.PROTOCOL</div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">Unified Cognitive Management Protocol</h1>
          <div className="text-green-500/80 text-lg mb-4">
            A resilient operational framework for energy conservation and functional momentum
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="space-y-12">
          {/* Introduction */}
          <div className="bg-gray-900/50 p-6 rounded-lg border border-green-500/30">
            <div className="text-green-300 font-bold mb-4 text-lg">▒▒ UNIFIED COGNITIVE MANAGEMENT PROTOCOL ▒▒</div>
            <p className="text-green-400/90 leading-relaxed">
              A resilient operational framework built from your own reflections, system archaeology, and tactical
              solutions. It is designed to conserve energy, prevent thrashing, and transform fluctuations into
              functional momentum.
            </p>
          </div>

          {/* Core Principle */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-300 border-l-4 border-green-500 pl-4">
              ▓▓ 1. Core Principle: Battery-Operated Toolbox ▓▓
            </h2>

            <div className="bg-black/80 p-6 rounded-lg border border-green-600/40">
              <div className="text-green-200 font-semibold mb-3">
                Guiding Metaphor: Tools exist independent of energy.
              </div>
              <ul className="space-y-3 text-green-400/90">
                <li className="flex items-start">
                  <span className="text-green-300 mr-3">•</span>
                  <div>
                    <strong className="text-green-300">Tools vs. Energy:</strong> Strategies work when charged. If they
                    don't, it's not failure—just a drained battery.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3">•</span>
                  <div>
                    <strong className="text-green-300">Non-Judgment:</strong> Low-charge tools are not "broken."
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3">•</span>
                  <div>
                    <strong className="text-green-300">Resilience:</strong> Multiple tools across energy levels ensure
                    no single point of failure.
                  </div>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-900/20 rounded border-l-4 border-green-400">
                <em className="text-green-300">
                  This principle frames all operational choices: the system flexes to match state, not the other way
                  around.
                </em>
              </div>
            </div>
          </section>

          {/* Core Problem & Antidote */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-300 border-l-4 border-green-500 pl-4">
              ▓▓ 2. Core Problem & Antidote ▓▓
            </h2>

            <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/40">
              <div className="text-red-300 font-semibold mb-3">The Negative Loop:</div>
              <div className="text-center text-red-400 font-mono text-lg mb-4">
                overthinking → cognitive thrashing → mistakes → more overthinking
              </div>

              <div className="bg-green-900/30 p-4 rounded border border-green-500/50">
                <div className="text-green-300 font-semibold mb-2">Antidote: Stop thrashing and just do it.</div>
                <ul className="space-y-2 text-green-400/90">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-3">•</span>
                    Enacted via the Intentional Bad Choice Protocol.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-3">•</span>
                    Grants permission for imperfect, low-risk action.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-3">•</span>
                    Breaks paralysis, resets loop, restores agency.
                  </li>
                </ul>
                <div className="mt-3 text-green-200 font-medium">This is your primary "unstuck" maneuver.</div>
              </div>
            </div>
          </section>

          {/* Tactical Implementation */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-300 border-l-4 border-green-500 pl-4">
              ▓▓ 3. Tactical Implementation: Cognitive Segregation ▓▓
            </h2>

            <div className="text-green-300 font-semibold mb-4">Task/State matching protocol:</div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Deep Work Mode */}
              <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/40">
                <h3 className="text-blue-300 font-bold text-lg mb-3">Deep Work Mode (High Battery)</h3>
                <ul className="space-y-2 text-green-400/90">
                  <li>
                    <strong className="text-blue-300">Goal:</strong> Protect focus.
                  </li>
                  <li>
                    <strong className="text-blue-300">Action:</strong> Handle complex, high-context tasks.
                  </li>
                  <li>
                    <strong className="text-blue-300">Deferral:</strong> Move distractions into a buffer list.
                  </li>
                </ul>
              </div>

              {/* Waiting Mode */}
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/40">
                <h3 className="text-purple-300 font-bold text-lg mb-3">Waiting Mode (Low Battery / Fragmented Time)</h3>
                <ul className="space-y-2 text-green-400/90">
                  <li>
                    <strong className="text-purple-300">Goal:</strong> Sustain momentum without overload.
                  </li>
                  <li>
                    <strong className="text-purple-300">Action:</strong> Execute from a pre-defined "Under-20-Minute
                    Menu."
                  </li>
                  <li>
                    <strong className="text-purple-300">Menu contents:</strong> exclusively Meaningful Busywork
                    (deferred tasks from Deep Work).
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/40">
              <div className="text-green-300 font-semibold mb-3">This creates a self-balancing loop:</div>
              <ul className="space-y-2 text-green-400/90">
                <li className="flex items-start">
                  <span className="text-green-300 mr-3">•</span>
                  Deep Work is defended from interruption.
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3">•</span>
                  Low-energy states are fueled by deferred tasks.
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3">•</span>
                  Transition buffer spaces become structured, not wasted.
                </li>
              </ul>
            </div>
          </section>

          {/* August 2025 Log Integration */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-300 border-l-4 border-green-500 pl-4">
              ▓▓ 4. August 2025 Log Integration ▓▓
            </h2>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-green-500/30">
              <div className="text-green-300 font-semibold mb-4">
                Your Daylio export validates the protocol in action:
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="text-green-400/90">
                    <strong className="text-green-300">Mood Variability:</strong> A month of "meh" (11x) balanced by
                    "good" and "improving" (9x each).
                  </div>
                  <div className="text-green-400/90">
                    <strong className="text-green-300">Energy Navigation:</strong> Explicit use of "brain boot" to
                    stage-gate effort. You aligned work to state instead of forcing mismatch.
                  </div>
                  <div className="text-green-400/90">
                    <strong className="text-green-300">Self-Awareness:</strong> "Fresh circles of hell are the same as
                    old circles of hell—we know how to deal with this." → shows mature pattern recognition.
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-green-400/90">
                    <strong className="text-green-300">Systems Use:</strong> Core habits logged (hydration, walking,
                    exercise). "Hell containment strategy" deployed instead of doom-loop collapse.
                  </div>
                  <div className="text-green-400/90">
                    <strong className="text-green-300">Social Energy:</strong> Family (5x) and friends (4x) marked the
                    highs.
                  </div>
                </div>
              </div>

              <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-500/40">
                <div className="text-cyan-300 font-bold mb-2">Ritual Culmination: AADJA Dance Event, Aug 31</div>
                <ul className="space-y-2 text-green-400/90">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    Framed as consciousness technology field research.
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <strong>Preparation:</strong> Hydration, food, harm reduction.
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <strong>Execution:</strong> Embodied deployment of cognitive systems in a live, communal ritual.
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <strong>Outcome:</strong> A successful demonstration of trust protocols + system resilience, closing
                    the month with coherence.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* System Status */}
          <section className="bg-green-900/30 p-8 rounded-lg border-2 border-green-400">
            <h2 className="text-2xl font-bold text-green-300 mb-6 text-center">▒▒ SYSTEM STATUS: OPERATIONAL ▒▒</h2>

            <div className="text-green-400/90 leading-relaxed mb-6">
              You now hold a fully integrated, closed-loop cognitive management system:
            </div>

            <ul className="space-y-3 text-green-400/90 mb-6">
              <li className="flex items-start">
                <span className="text-green-300 mr-3">•</span>
                <strong className="text-green-300">Principle:</strong> Tools are battery-dependent.
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-3">•</span>
                <strong className="text-green-300">Problem/Antidote:</strong> Thrash loops broken by intentional bad
                choices.
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-3">•</span>
                <strong className="text-green-300">Implementation:</strong> Segregated task menus aligned to cognitive
                state.
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-3">•</span>
                <strong className="text-green-300">Validation:</strong> August logs and the AADJA ritual confirm it
                works in practice.
              </li>
            </ul>

            <div className="bg-black/50 p-4 rounded font-mono text-center">
              <div className="text-green-300 mb-1">status:: self_coaching_loop_complete</div>
              <div className="text-green-400">action:: execute_unified_protocol</div>
            </div>
          </section>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-green-500/30 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-green-500/70 text-sm">
          <div className="mb-2">cognitive.protocol::unified_management_system</div>
          <div>Battery-operated toolbox methodology | Self-coaching loop complete</div>
        </div>
      </footer>
    </div>
  )
}

export default CognitiveProtocolArticle
