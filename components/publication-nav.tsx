"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const publications = [
  { id: "bridge-walker", name: "Bridge Walker", path: "/" },
  { id: "techcraft", name: "TechCraft", path: "/techcraft" },
  { id: "oracle-crosstalk", name: "Oracle Crosstalk", path: "/oracle-crosstalk" },
  { id: "testing-fragments", name: "Testing Fragments", path: "/testing-fragments" },
  { id: "horror-healing", name: "Horror Healing", path: "/horror-healing" },
  { id: "aesthetic-synthesis", name: "Aesthetic Synthesis", path: "/aesthetic-synthesis" },
  { id: "cognitive-protocol", name: "Cognitive Protocol", path: "/cognitive-protocol" },
  { id: "evan-field-manual", name: "Evan Field Manual", path: "/evan-field-manual" },
  { id: "curious-turtle-cascade", name: "Curious Turtle Cascade", path: "/curious-turtle-cascade" },
  { id: "turtle-archaeology", name: "Turtle Archaeology", path: "/turtle-archaeology" },
  { id: "fuzzy-compiler-zine", name: "Fuzzy Compiler Zine", path: "/fuzzy-compiler-zine" },
]

export default function PublicationNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      }
      // Hide navbar when scrolling down (but not immediately)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMobileMenuOpen(false) // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#9945ff]/30 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between lg:hidden">
          <div className="text-[#e0ffe0] font-medium text-lg">Consciousness Tech Field Report</div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#e0ffe0] hover:text-white hover:bg-[#9945ff]/20 rounded-lg transition-colors touch-manipulation"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex flex-wrap gap-2">
          {publications.map((pub) => {
            const isActive = pathname === pub.path
            return (
              <Link
                key={pub.id}
                href={pub.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:scale-105 active:scale-95 ${
                  isActive
                    ? "bg-[#9945ff] text-white shadow-lg shadow-[#9945ff]/25 ring-2 ring-[#9945ff]/50"
                    : "bg-black/50 text-[#e0ffe0]/70 hover:bg-[#9945ff]/20 hover:text-[#e0ffe0] border border-[#9945ff]/30 hover:border-[#9945ff]/50"
                }`}
              >
                {pub.name}
              </Link>
            )
          })}
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pb-2">
            {publications.map((pub) => {
              const isActive = pathname === pub.path
              return (
                <Link
                  key={pub.id}
                  href={pub.path}
                  className={`px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg touch-manipulation active:scale-95 ${
                    isActive
                      ? "bg-[#9945ff] text-white shadow-lg shadow-[#9945ff]/25 ring-2 ring-[#9945ff]/50"
                      : "bg-black/50 text-[#e0ffe0]/70 hover:bg-[#9945ff]/20 hover:text-[#e0ffe0] border border-[#9945ff]/30 hover:border-[#9945ff]/50"
                  }`}
                >
                  {pub.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
