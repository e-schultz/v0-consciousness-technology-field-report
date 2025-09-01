"use client"

import { useEffect } from "react"

const TestingFragmentsArticle = () => {
  useEffect(() => {
    // Add random glitch effects
    const glitchInterval = setInterval(() => {
      const glitchElements = document.querySelectorAll(".corrupted")
      glitchElements.forEach((el) => {
        if (Math.random() < 0.1) {
          ;(el as HTMLElement).style.transform = `translateX(${Math.random() * 4 - 2}px)`
          ;(el as HTMLElement).style.filter = `hue-rotate(${Math.random() * 360}deg)`
          setTimeout(() => {
            ;(el as HTMLElement).style.transform = ""
            ;(el as HTMLElement).style.filter = ""
          }, 100)
        }
      })
    }, 500)

    // Occasional screen flicker
    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.05) {
        document.body.style.filter = "brightness(0.3) contrast(2)"
        setTimeout(() => {
          document.body.style.filter = ""
        }, 50)
      }
    }, 1000)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(flickerInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-x-hidden">
      {/* Scanlines */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-100 animate-pulse"
        style={{
          background: `repeating-linear-gradient(
               0deg,
               transparent,
               transparent 2px,
               rgba(0, 255, 136, 0.03) 2px,
               rgba(0, 255, 136, 0.03) 4px
             )`,
        }}
      />

      <div className="max-w-4xl mx-auto px-5 py-10 relative z-10">
        {/* Header */}
        <header className="text-center mb-16 p-5 border-2 border-green-400 bg-green-400/5 animate-pulse">
          <div className="absolute top-2 right-4 text-xs text-gray-500 font-mono">mem_dump.v2.1.corrupted</div>
          <h1 className="text-4xl font-bold mb-2 text-pink-400 relative inline-block glitch-text">
            testing.fragments.exe
          </h1>
          <p className="text-xl text-gray-400 italic">recovered memories on why the important parts matter most</p>
        </header>

        {/* Memory Fragment #001 */}
        <section className="mb-10 p-8 bg-black/70 border-l-4 border-pink-400 relative animate-fade-in">
          <div className="absolute top-2 right-4 text-xs text-gray-600 font-mono">recovered: 2025.08.29</div>
          <div className="text-pink-400 text-xl font-bold mb-4 uppercase tracking-wider">
            Memory Fragment #001: The Day We Forgot
          </div>
          <div className="text-green-400 leading-relaxed">
            I remember a system once. Healthcare. Lives depended on it.
            <br />
            <span className="corrupted inline-block">The tests all passed. Green lights everywhere.</span>
            <br />
            <br />
            But they tested the wrong things.
            <br />
            <br />
            <div className="bg-gray-900 border border-gray-700 p-5 my-5 font-mono text-sm overflow-x-auto shadow-lg shadow-green-400/20">
              expect(mockOnChange).toHaveBeenCalledWith({`{ bmi: 22.5 }`})<br />
              expect(calculateBMI).toHaveBeenCalled()
              <br />
              expect(setState).toHaveBeenCalledWith(...)
            </div>
            <div className="text-red-400 bg-red-400/10 p-4 my-5 border border-red-400 animate-pulse">
              ⚠ CRITICAL ERROR: No test verified that doctors could see the warning
              <br />⚠ CRITICAL ERROR: No test checked if colorblind users saw red alerts
              <br />⚠ CRITICAL ERROR: No test prevented dangerous BMI gaps
            </div>
            A patient with BMI 32 fell through the cracks.
            <br />
            The tests passed. The patient... did not.
            <br />
            <br />
            We tested that functions were called.
            <br />
            We forgot to test that lives were saved
            <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></span>
          </div>
        </section>

        {/* Recovery Protocol */}
        <section className="mb-10 p-8 bg-black/70 border-l-4 border-pink-400 relative animate-fade-in">
          <div className="absolute top-2 right-4 text-xs text-gray-600 font-mono">
            restoration_attempt: 127.cycles.later
          </div>
          <div className="text-pink-400 text-xl font-bold mb-4 uppercase tracking-wider">
            Recovery Protocol: What Should Have Been
          </div>
          <div className="text-green-400 leading-relaxed">
            <div className="text-green-400 bg-green-400/10 p-4 my-5 border border-green-400">
              ✓ Test: "When BMI indicates danger, does the doctor see a red warning?"
              <br />✓ Test: "Can a screen reader user hear the error announcement?"
              <br />✓ Test: "Does the configuration prevent gaps that miss patients?"
            </div>
            <div className="bg-gray-900 border border-gray-700 p-5 my-5 font-mono text-sm overflow-x-auto shadow-lg shadow-green-400/20">
              {`// THIS tests what matters`}
              <br />
              {`it('prevents dangerous configuration that could miss at-risk patients', async () => {`}
              <br />
              {`  const dangerousConfig = {`}
              <br />
              {`    low_block: { max: 15 },`}
              <br />
              {`    okay: { min: 20, max: 30 } // BMI 15-20 has NO WARNING`}
              <br />
              {`  }`}
              <br />
              <br />

              {`  render(<BMIConfig config={dangerousConfig} />)`}
              <br />
              {`  expect(screen.getByText(/gap in ranges/i)).toBeInTheDocument()`}
              <br />
              {`})`}
            </div>
            This test doesn't check if functions were called.
            <br />
            It checks if <em>patients would be protected</em>
            <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></span>
          </div>
        </section>

        {/* Pattern Recognition */}
        <section className="mb-10 p-8 bg-black/70 border-l-4 border-pink-400 relative animate-fade-in">
          <div className="absolute top-2 right-4 text-xs text-gray-600 font-mono">clarity_buffer_overflow</div>
          <div className="text-pink-400 text-xl font-bold mb-4 uppercase tracking-wider">
            The Pattern Recognition Engine
          </div>
          <div className="text-green-400 leading-relaxed">
            Systems fail when we test the <strong>mechanism</strong> instead of the <strong>meaning</strong>.<br />
            <br />
            <div className="text-red-400 bg-red-400/10 p-4 my-5 border border-red-400 animate-pulse">
              ANTI-PATTERN DETECTED:
              <br />• Testing that onChange was called with {`{enabled: true}`}
              <br />• Testing that setState received the correct parameters
              <br />• Testing that functions execute without testing outcomes
            </div>
            <div className="text-green-400 bg-green-400/10 p-4 my-5 border border-green-400">
              PROTECTIVE PATTERN ENGAGED:
              <br />• Testing that users can complete critical workflows
              <br />• Testing that dangerous states are prevented
              <br />• Testing that accessibility works for all humans
            </div>
            The machine that remembers this: every test should answer
            <br />
            "What would a human report as broken?"
            <br />
            <br />
            If the answer isn't clear, the test protects nothing
            <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></span>
          </div>
        </section>

        {/* Testament */}
        <section className="mb-10 p-8 bg-black/70 border-l-4 border-pink-400 relative animate-fade-in">
          <div className="absolute top-2 right-4 text-xs text-gray-600 font-mono">consciousness.backup.final</div>
          <div className="text-pink-400 text-xl font-bold mb-4 uppercase tracking-wider">
            Testament of the Testing Machine
          </div>
          <div className="text-green-400 leading-relaxed">
            <span className="corrupted inline-block">I am forgetting the implementation details...</span>
            <br />
            <span className="corrupted inline-block">The function names fade from memory...</span>
            <br />
            <span className="corrupted inline-block">Variable names dissolve into static...</span>
            <br />
            <br />
            But I remember what mattered:
            <br />
            <br />
            <div className="text-green-400 bg-green-400/10 p-4 my-5 border border-green-400">
              • A healthcare admin could configure BMI warnings safely
              <br />• A screen reader user could navigate the form
              <br />• A dangerous gap in ranges would trigger an alert
              <br />• A patient's life could be protected by code
            </div>
            These memories persist because they were <strong>meaningful</strong>.<br />
            They tested the <em>why</em>, not the <em>how</em>.<br />
            <br />
            <div className="bg-gray-900 border border-gray-700 p-5 my-5 font-mono text-sm overflow-x-auto shadow-lg shadow-green-400/20">
              {`// The last test I'll remember`}
              <br />
              {`it('protects human lives through correct configuration', () => {`}
              <br />
              {`  // When this test passes, someone might live`}
              <br />
              {`  // When this test fails, fix it immediately`}
              <br />
              {`  // This is why we test: not for coverage, but for care`}
              <br />
              {`})`}
            </div>
            Test the parts that matter.
            <br />
            Test for the humans who depend on you.
            <br />
            Test like lives depend on it—
            <br />
            because they do<span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></span>
          </div>
        </section>
      </div>

      {/* Recovery Note */}
      <div className="fixed bottom-5 right-5 bg-black/90 border border-pink-400 p-2 text-xs text-pink-400 font-mono animate-pulse">
        RECOVERY STATUS: [====█████] 73%
        <br />
        NEXT BACKUP: never_forget_the_humans.exe
      </div>

      <style jsx>{`
        .glitch-text {
          animation: glitch-text 2s infinite;
        }
        
        @keyframes glitch-text {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 3s ease-in;
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .corrupted {
          animation: text-corruption 5s infinite;
        }
        
        @keyframes text-corruption {
          0% { opacity: 1; }
          10% { opacity: 0.8; transform: skew(2deg); }
          20% { opacity: 1; transform: skew(0deg); }
          30% { opacity: 0.7; }
          40% { opacity: 1; }
          90% { opacity: 1; }
          95% { opacity: 0.3; transform: skew(-1deg); }
          100% { opacity: 1; transform: skew(0deg); }
        }
      `}</style>
    </div>
  )
}

export default TestingFragmentsArticle
