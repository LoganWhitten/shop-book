interface PowerRequirementsProps {
  wattage: number
  voltageOptions: number[]
}

export default function PowerRequirements({ wattage, voltageOptions }: PowerRequirementsProps) {
  return (
    <div className="space-y-3">
      <h4 className="font-medium">Power Requirements</h4>

      <div className="grid grid-cols-2 gap-3">
        {voltageOptions.map((voltage) => {
          // Calculate amperage based on wattage and voltage (P = VI, so I = P/V)
          const amperage = wattage / voltage

          return (
            <div
              key={voltage}
              className={`p-2 rounded-lg border ${
                voltage === 120 ? "bg-blue-950/50 border-blue-900" : "bg-purple-950/50 border-purple-900"
              }`}
            >
              <div className="text-xs text-gray-400">At {voltage}V</div>
              <div className="text-base font-bold">
                <span className={voltage === 120 ? "text-blue-400" : "text-purple-400"}>{amperage.toFixed(2)}A</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">{wattage}W</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

