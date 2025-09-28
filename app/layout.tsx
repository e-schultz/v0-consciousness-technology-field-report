import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import PublicationNav from "@/components/publication-nav"

import { Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'
import { Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
V0_Font_Geist({ weight: ["100","200","300","400","500","600","700","800","900"] })
V0_Font_Geist_Mono({ weight: ["100","200","300","400","500","600","700","800","900"] })
V0_Font_Source_Serif_4({ weight: ["200","300","400","500","600","700","800","900"] })

const fontGeist = V0_Font_Geist({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const fontGeistMono = V0_Font_Geist_Mono({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const fontSourceSerif4 = V0_Font_Source_Serif_4({ weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`font-sans bg-[#0a0014] text-[#e0ffe0] ${fontGeist.variable} ${fontGeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <PublicationNav />
          <main className="pt-20">{children}</main>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
