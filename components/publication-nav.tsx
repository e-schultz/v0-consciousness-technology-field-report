"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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
]

export default function PublicationNav() {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-[#9945ff]/30">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-wrap gap-2">
          {publications.map((pub) => {
            const isActive = pathname === pub.path
            return (
              <Link
                key={pub.id}
                href={pub.path}
                className={`px-4 py-2 text-sm font-medium transition-all rounded ${
                  isActive
                    ? "bg-[#9945ff] text-white shadow-lg shadow-[#9945ff]/25"
                    : "bg-black/50 text-[#e0ffe0]/70 hover:bg-[#9945ff]/20 hover:text-[#e0ffe0] border border-[#9945ff]/30"
                }`}
              >
                {pub.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
