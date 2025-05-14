"use client"

import { useEffect, useRef } from "react"

export default function ProfileImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 450
    canvas.height = 450

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, "rgba(242, 143, 173, 0.7)")
    gradient.addColorStop(0.5, "rgba(203, 166, 247, 0.7)")
    gradient.addColorStop(1, "rgba(137, 220, 235, 0.7)")

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw abstract design elements
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)"

    // Draw circles
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 50 + 10

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw some lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
    ctx.lineWidth = 2

    for (let i = 0; i < 10; i++) {
      const x1 = Math.random() * canvas.width
      const y1 = Math.random() * canvas.height
      const x2 = Math.random() * canvas.width
      const y2 = Math.random() * canvas.height

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }

    // Add some text
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
    ctx.font = "30px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("R", canvas.width / 2, canvas.height / 2)
  }, [])

  return <canvas ref={canvasRef} className="rounded-full" style={{ width: "100%", height: "100%" }} />
}
