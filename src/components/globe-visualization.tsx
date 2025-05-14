"use client"

import { useEffect, useRef } from "react"

export default function GlobeVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 450
    canvas.height = 450

    // Center of the canvas
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 180

    // Animation variables
    let rotation = 0
    let hue = 0

    // Points on the globe
    const points: { x: number; y: number; z: number; size: number; color: string }[] = []

    // Create random points on the globe
    for (let i = 0; i < 200; i++) {
      // Random spherical coordinates
      const theta = Math.random() * Math.PI * 2 // longitude
      const phi = Math.acos(2 * Math.random() - 1) // latitude

      // Convert to Cartesian coordinates
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      // Random size and color
      const size = Math.random() * 3 + 1
      const colorHue = Math.random() * 60 + 320 // Pink to purple range

      points.push({
        x,
        y,
        z,
        size,
        color: `hsla(${colorHue}, 100%, 75%, 0.8)`,
      })
    }

    // Create connections between points
    const connections: { from: number; to: number; opacity: number }[] = []

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        // Calculate distance between points
        const dx = points[i].x - points[j].x
        const dy = points[i].y - points[j].y
        const dz = points[i].z - points[j].z
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        // Only connect points that are close enough
        if (distance < radius * 0.8) {
          connections.push({
            from: i,
            to: j,
            opacity: 1 - distance / (radius * 0.8),
          })
        }
      }
    }

    // Draw function
    function draw() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.2)
      gradient.addColorStop(0, "rgba(242, 143, 173, 0.2)")
      gradient.addColorStop(0.5, "rgba(203, 166, 247, 0.2)")
      gradient.addColorStop(1, "rgba(137, 220, 235, 0.2)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw globe outline
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Sort points by z-coordinate for proper depth rendering
      const sortedPoints = [...points]
        .map((point, index) => {
          // Apply rotation to x and z coordinates
          const rotatedX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation)
          const rotatedZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation)

          return {
            ...point,
            x: rotatedX,
            z: rotatedZ,
            index,
          }
        })
        .sort((a, b) => a.z - b.z)

      // Draw connections
      for (const connection of connections) {
        const fromIndex = sortedPoints.findIndex((p) => p.index === connection.from)
        const toIndex = sortedPoints.findIndex((p) => p.index === connection.to)

        if (fromIndex !== -1 && toIndex !== -1) {
          const from = sortedPoints[fromIndex]
          const to = sortedPoints[toIndex]

          // Only draw connections if both points are on the visible side
          if (from.z < radius * 0.2 && to.z < radius * 0.2) {
            const opacity = connection.opacity * (1 - Math.max(from.z, to.z) / radius)

            ctx.beginPath()
            ctx.moveTo(centerX + from.x, centerY + from.y)
            ctx.lineTo(centerX + to.x, centerY + to.y)
            ctx.strokeStyle = `rgba(242, 143, 173, ${opacity * 0.3})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw points
      for (const point of sortedPoints) {
        // Calculate point size based on z-coordinate (perspective effect)
        const perspective = 1 + point.z / (radius * 2)
        const size = point.size / perspective

        // Calculate opacity based on z-coordinate
        const opacity = Math.max(0, 1 - point.z / radius)

        // Draw point
        ctx.beginPath()
        ctx.arc(centerX + point.x, centerY + point.y, size, 0, Math.PI * 2)
        ctx.fillStyle = point.color.replace("0.8", opacity.toString())
        ctx.fill()
      }

      // Draw equator
      ctx.beginPath()
      ctx.ellipse(centerX, centerY, radius, radius * Math.abs(Math.cos(rotation)), 0, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(242, 143, 173, 0.3)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw meridian
      ctx.beginPath()
      ctx.ellipse(centerX, centerY, radius * Math.abs(Math.sin(rotation)), radius, 0, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(203, 166, 247, 0.3)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Update rotation for animation
      rotation += 0.005
      hue = (hue + 0.5) % 360

      // Request next frame
      requestAnimationFrame(draw)
    }

    // Start animation
    draw()

    // Cleanup
    return () => {
      // Nothing to clean up for canvas
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full rounded-full" style={{ background: "transparent" }} />
}
