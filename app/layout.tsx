import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import PublicationNav from "@/components/publication-nav"
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google"

const fontGeist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist",
  display: "swap",
})

const fontGeistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-mono",
  display: "swap",
})

const fontSourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-serif-4",
  display: "swap",
})

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
    <html
      lang="en"
      className={`antialiased ${fontGeist.variable} ${fontGeistMono.variable} ${fontSourceSerif4.variable}`}
    >
      <body className="font-sans bg-[#0a0014] text-[#e0ffe0]">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <PublicationNav />
          <main className="pt-20">{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
