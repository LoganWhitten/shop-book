"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

interface PowerInfoProps {
  wattage: number,
  inletConnector: string,
  outletConnector?: string,
  voltage: '120' | '208' | '120/208'
}

export default function PowerInfo({ wattage, inletConnector, outletConnector, voltage }: PowerInfoProps) {

  // Calculate amperage based on wattage and voltage (P = VI, so I = P/V)
  const amperage120 = wattage / 120
  const amperage208 = wattage / 208

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="font-semibold">Power Info</h3>

      <div className={`grid grid-cols-2 gap-4`}>
        <div className={`grid ${voltage === "120/208" ? "grid-cols-2" : ""} `}>
          <div
            className={`p-3 ${
              voltage.includes("208") ? "rounded-l-lg" : "rounded-lg"
            } bg-blue-950/50 ${voltage.includes("120") ? "" : "hidden"}`}
          >
            <div className="text-sm text-muted-foreground">At 120V</div>
            <div className="text-lg font-bold text-blue-400">
              {amperage120.toFixed(2)}A
            </div>
          </div>
          <div
            className={`p-3 ${
              voltage.includes("120") ? "rounded-r-lg" : "rounded-lg"
            } bg-purple-950/50 ${voltage.includes("208") ? "" : "hidden"}`}
          >
            <div className="text-sm text-muted-foreground">At 208V</div>
            <div className="text-lg font-bold text-purple-400">
              {amperage208.toFixed(2)}A
            </div>
          </div>
        </div>
        <div className={`grid ${outletConnector ? "grid-cols-2" : ""}`}>
          <div
            className={`p-3 ${
              outletConnector ? "rounded-l-xl" : "rounded-lg"
            } bg-green-950/50`}
          >
            <div className="text-sm text-muted-foreground">Inlet Connector</div>
            <div className="text-lg font-bold text-green-400">
              {inletConnector}
            </div>
          </div>
          <div
            className={`p-3 rounded-r-lg bg-yellow-950/50 ${
              outletConnector ? "" : "hidden"
            }`}
          >
            <div className="text-sm text-muted-foreground">
              Outlet Connector
            </div>
            <div className="text-lg font-bold text-yellow-400">
              {outletConnector}
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-muted-foreground mt-2">
        Power consumption: {wattage}W
      </div>
    </div>
  );
}

