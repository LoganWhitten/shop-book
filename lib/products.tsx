import type { Product } from "./types"

// This would typically come from an API or database
export const products: Product[] = [
  // Incandescent Fixtures
  {
    id: "incandescent-1",
    name: "Fresnel 650W",
    category: "Incandescent Fixtures",
    categorySlug: "incandescent",
    wattage: 650,
    icon: (
      <div className= "w-16 h-16 bg-amber-950 rounded-full flex items-center justify-center" >
      <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center">
        <div className="w-8 h-8 bg-amber-500 rounded-full"> </div>
          </div>
          </div>
    ),
specs: [
  { name: "Wattage", value: "650W" },
  { name: "Beam Angle", value: "7-50°" },
  { name: "Color Temp", value: "3200K" },
  { name: "Weight", value: "5.2 lbs" },
],
  features: [
    "Smooth, even field of light",
    "Adjustable beam angle",
    "Durable cast aluminum construction",
    "Gel frame included",
    "Barn doors compatible",
  ],
  },
{
  id: "incandescent-2",
    name: "ERS Source Four",
      category: "Incandescent Fixtures",
        categorySlug: "incandescent",
          wattage: 750,
            icon: (
              <div className= "w-16 h-16 bg-amber-950 rounded-full flex items-center justify-center" >
              <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center" >
                <div className="w-8 h-8 bg-amber-500 rounded-full" > </div>
                  </div>
                  </div>
    ),
  specs: [
    { name: "Wattage", value: "750W" },
    { name: "Beam Angle", value: "19°/26°/36°/50°" },
    { name: "Color Temp", value: "3200K" },
    { name: "Weight", value: "7.5 lbs" },
  ],
    features: [
      "High-efficiency reflector system",
      "Interchangeable lens tubes",
      "Enhanced thermal management",
      "Precision optics",
      "Gobo projection capable",
    ],
  },

// LED Fixtures
{
  id: "led-1",
    name: "LED Par 64",
      category: "LED Fixtures",
        categorySlug: "led",
          wattage: 180,
            icon: (
              <div className= "w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center" >
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center" >
                <div className="w-8 h-8 bg-blue-500 rounded-full" > </div>
                  </div>
                  </div>
    ),
  specs: [
    { name: "Wattage", value: "180W" },
    { name: "LEDs", value: "36 x 5W RGBW" },
    { name: "Beam Angle", value: "25°" },
    { name: "Control", value: "DMX512" },
  ],
    features: [
      "Full RGBW color mixing",
      "Multiple DMX channel modes",
      "Silent operation with no fans",
      "Flicker-free operation for camera",
      "Built-in color presets",
    ],
  },
{
  id: "led-2",
    name: "LED Batten",
      category: "LED Fixtures",
        categorySlug: "led",
          wattage: 240,
            icon: (
              <div className= "w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center" >
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center" >
                <div className="w-8 h-8 bg-blue-500 rounded-full" > </div>
                  </div>
                  </div>
    ),
  specs: [
    { name: "Wattage", value: "240W" },
    { name: "LEDs", value: "12 x 20W RGBW" },
    { name: "Beam Angle", value: "40°" },
    { name: "Control", value: "DMX512/RDM" },
  ],
    features: [
      "Pixel-mappable LEDs",
      "Smooth 16-bit dimming",
      "RDM capability for remote setup",
      "Multiple fixture linking",
      "Adjustable strobe effects",
    ],
  },

// Moving Lights
{
  id: "moving-1",
    name: "Moving Head Spot",
      category: "Moving Lights",
        categorySlug: "moving",
          wattage: 350,
            icon: (
              <div className= "w-16 h-16 bg-purple-950 rounded-full flex items-center justify-center rotate-45" >
              <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center" >
                <div className="w-8 h-8 bg-purple-500 rounded-full" > </div>
                  </div>
                  </div>
    ),
  specs: [
    { name: "Wattage", value: "350W" },
    { name: "Light Source", value: "350W White LED" },
    { name: "Zoom Range", value: "12°-36°" },
    { name: "Pan/Tilt", value: "540°/270°" },
  ],
    features: [
      "CMY color mixing system",
      "Rotating gobo wheel with 7 gobos",
      "Fixed gobo wheel with 9 gobos",
      "Motorized focus and zoom",
      "Prism and frost effects",
    ],
  },
{
  id: "moving-2",
    name: "Moving Head Wash",
      category: "Moving Lights",
        categorySlug: "moving",
          wattage: 400,
            icon: (
              <div className= "w-16 h-16 bg-purple-950 rounded-full flex items-center justify-center rotate-45" >
              <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center" >
                <div className="w-8 h-8 bg-purple-500 rounded-full" > </div>
                  </div>
                  </div>
    ),
  specs: [
    { name: "Wattage", value: "400W" },
    { name: "Light Source", value: "19 x 20W RGBW LEDs" },
    { name: "Zoom Range", value: "8°-60°" },
    { name: "Pan/Tilt", value: "540°/270°" },
  ],
    features: [
      "Individual LED control",
      "Virtual color wheel with presets",
      "High-speed movement",
      "Pixel mapping capability",
      "Smooth electronic dimming",
    ],
  },

// Power Distribution
{
  id: "power-1",
    name: "Power Distro Box",
      category: "Power Distribution",
        categorySlug: "power",
          wattage: 12000, // 100A 3-phase at 120V
            icon: (
              <div className= "w-16 h-4 bg-red-950 rounded-sm flex items-center justify-center" >
              <div className="w-14 h-2 bg-red-500 rounded-sm" > </div>
                </div>
    ),
  specs: [
    { name: "Input", value: "100A 3-phase" },
    { name: "Outputs", value: "6 x 20A circuits" },
    { name: "Protection", value: "Circuit breakers" },
    { name: "Metering", value: "Digital per circuit" },
  ],
    features: [
      "Rugged road case design",
      "PowerCON TRUE1 outputs",
      "Digital voltage and current monitoring",
      "Fault protection",
      "Touring-grade construction",
    ],
  },
{
  id: "power-2",
    name: "Dimmer Pack",
      category: "Power Distribution",
        categorySlug: "power",
          wattage: 14400, // 6 channels at 2.4kW each
            icon: (
              <div className= "w-16 h-4 bg-red-950 rounded-sm flex items-center justify-center" >
              <div className="w-14 h-2 bg-red-500 rounded-sm" > </div>
                </div>
    ),
  specs: [
    { name: "Channels", value: "6 channels" },
    { name: "Load", value: "2.4kW per channel" },
    { name: "Control", value: "DMX512" },
    { name: "Cooling", value: "Forced air" },
  ],
    features: [
      "Digital dimming curves",
      "Local control panel",
      "DMX addressing per channel",
      "Thermal protection",
      "Rack mountable design",
    ],
  },

// Control
{
  id: "control-1",
    name: "Lighting Console",
      category: "Control",
        categorySlug: "control",
          wattage: 120,
            icon: (
              <div className= "w-16 h-8 bg-green-950 rounded-md flex items-center justify-center" >
              <div className="w-14 h-6 bg-green-500 rounded-md" > </div>
                </div>
    ),
  specs: [
    { name: "Universes", value: "4 DMX universes" },
    { name: "Faders", value: "10 playback faders" },
    { name: "Display", value: '15.6" touchscreen' },
    { name: "Connectivity", value: "ArtNet, sACN, MIDI" },
  ],
    features: [
      "Intuitive touchscreen interface",
      "Pixel mapping capabilities",
      "Effects engine",
      "Cue stacking and playback",
      "Show file backup and restore",
    ],
  },
{
  id: "control-2",
    name: "DMX Interface",
      category: "Control",
        categorySlug: "control",
          wattage: 5,
            icon: (
              <div className= "w-16 h-8 bg-green-950 rounded-md flex items-center justify-center" >
              <div className="w-14 h-6 bg-green-500 rounded-md" > </div>
                </div>
    ),
  specs: [
    { name: "Outputs", value: "2 DMX universes" },
    { name: "Connection", value: "USB-C" },
    { name: "Protocols", value: "ArtNet, sACN, DMX" },
    { name: "Power", value: "USB powered" },
  ],
    features: [
      "Compact design",
      "Compatible with major lighting software",
      "Plug-and-play operation",
      "Status LED indicators",
      "Rugged metal housing",
    ],
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}