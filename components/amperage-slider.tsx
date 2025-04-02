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
    <div className="space-y-3">
      <h4 className="font-medium">Power Requirements</h4>

      <div className="flex justify-between items-center text-xs">
        <div className="font-medium">120V</div>
        <div className="font-medium">208V</div>
      </div>

      <Slider value={[voltage]} min={120} max={208} step={1} onValueChange={(value) => setVoltage(value[0])} />

      <div className="flex justify-between items-center text-xs">
        <div className="text-gray-400">Current: {voltage}V</div>
        <div className="font-medium">{currentAmperage.toFixed(2)}A</div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-900">
          <div className="text-xs text-gray-400">At 120V</div>
          <div className="text-base font-bold text-blue-400">{amperage120.toFixed(2)}A</div>
        </div>
        <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-900">
          <div className="text-xs text-gray-400">At 208V</div>
          <div className="text-base font-bold text-purple-400">{amperage208.toFixed(2)}A</div>
        </div>
      </div>

      <div className="text-xs text-gray-400">Power consumption: {wattage}W</div>
    </div>
  )
}

