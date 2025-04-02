"use client"

import { useEffect, useState } from "react"

interface AnimatedNumberProps {
  value: number
  duration?: number
  decimals?: number
  suffix?: string
}

export default function AnimatedNumber({ value, duration = 0.25, decimals = 0, suffix = "" }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const updateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setDisplayValue(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue)
      } else {
        setDisplayValue(value)
      }
    }

    animationFrame = requestAnimationFrame(updateValue)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return (
    <span className="tabular-nums">
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  )
}

