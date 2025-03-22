import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Tech Rebel",
  description: "Pioneering the future of technology with rebellious innovation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

