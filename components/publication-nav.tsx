"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { getAllZines } from "@/lib/zine-registry"

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
)

export default function PublicationNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const publications = getAllZines()

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest("[data-mobile-nav]")) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#9945ff]/30 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      data-mobile-nav
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        {/* Mobile header with hamburger menu */}
        <div className="flex items-center justify-between lg:hidden">
          <div className="text-[#e0ffe0] font-medium text-lg">Consciousness Tech Field Report</div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 text-[#e0ffe0] hover:text-white hover:bg-[#9945ff]/20 rounded-lg transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Desktop navigation */}
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
                {pub.title}
              </Link>
            )
          })}
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100 mt-4 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-2 pb-2">
            {publications.map((pub) => {
              const isActive = pathname === pub.path
              return (
                <Link
                  key={pub.id}
                  href={pub.path}
                  className={`px-4 py-4 text-base font-medium transition-all duration-200 rounded-lg touch-manipulation active:scale-95 min-h-[48px] flex items-center ${
                    isActive
                      ? "bg-[#9945ff] text-white shadow-lg shadow-[#9945ff]/25 ring-2 ring-[#9945ff]/50"
                      : "bg-black/50 text-[#e0ffe0]/70 hover:bg-[#9945ff]/20 hover:text-[#e0ffe0] border border-[#9945ff]/30 hover:border-[#9945ff]/50"
                  }`}
                >
                  {pub.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
