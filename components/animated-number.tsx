"use client"

import { useEffect, useRef } from "react"
import { animate } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  decimals?: number
  duration?: number
  suffix?: string
}

export default function AnimatedNumber({ value, decimals = 0, duration = 0.5, suffix = "" }: AnimatedNumberProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = nodeRef.current

    if (node) {
      const controls = animate(0, value, {
        duration,
        onUpdate(value) {
          node.textContent = `${value.toFixed(decimals)}${suffix}`
        },
        ease: "easeOut",
      })

      return () => controls.stop()
    }
  }, [value, decimals, duration, suffix])

  return (
    <span ref={nodeRef} className="tabular-nums">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

