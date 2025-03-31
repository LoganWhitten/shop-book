"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

interface AmperageSliderProps {
  wattage: number
}

export default function AmperageSlider({ wattage }: AmperageSliderProps) {
  const [voltage, setVoltage] = useState(120)

  // Calculate amperage based on wattage and voltage (P = VI, so I = P/V)
  const amperage120 = wattage / 120
  const amperage208 = wattage / 208
  const currentAmperage = wattage / voltage

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="font-semibold">Power Requirements</h3>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-3 rounded-lg bg-blue-950/50">
          <div className="text-sm text-muted-foreground">At 120V</div>
          <div className="text-lg font-bold text-blue-400">{amperage120.toFixed(2)}A</div>
        </div>
        <div className="p-3 rounded-lg bg-purple-950/50">
          <div className="text-sm text-muted-foreground">At 208V</div>
          <div className="text-lg font-bold text-purple-400">{amperage208.toFixed(2)}A</div>
        </div>
      </div>

      <div className="text-xs text-muted-foreground mt-2">Power consumption: {wattage}W</div>
    </div>
  )
}

