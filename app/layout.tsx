import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import PublicationNav from "@/components/publication-nav"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "@/lib/component-registry-setup"

import { Source_Serif_4, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
V0_Font_Geist({ weight: ["100","200","300","400","500","600","700","800","900"] })
V0_Font_Geist_Mono({ weight: ["100","200","300","400","500","600","700","800","900"] })
V0_Font_Source_Serif_4({ weight: ["200","300","400","500","600","700","800","900"] })

const fontGeistMono = GeistMono

const fontSourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-serif-4",
  display: "swap",
})

const fontGeist = GeistSans

export const metadata: Metadata = {
  title: "Consciousness Technology Field Report",
  description: "A collection of experimental zines exploring the intersection of technology and consciousness",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontGeist.variable} ${fontGeistMono.variable} antialiased`}>
      <body className="font-sans bg-[#0a0014] text-[#e0ffe0]">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <PublicationNav />
          <main className="pt-20">{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
