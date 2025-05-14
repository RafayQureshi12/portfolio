import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rafay Qureshi - Full Stack & Graphic Designer",
  description: "Portfolio of Rafay Qureshi, a passionate full stack developer and graphic designer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
