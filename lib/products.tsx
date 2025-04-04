import type { Product } from "./types"

// This would typically come from an API or database
export const products: Product[] = [
  // Incandescent Fixtures
  {
    id: "s4",
    name: "Source 4 ERS",
    inletConnector: "StagePin",
    category: "Ellipsoidal",
    categorySlug: "incandescent",
    wattage: 750,
    voltage: "120",
    voltageOptions: [120],
    lampOptions: [375, 575, 750],
    links: [
      {
        name: "User Manual",
        href: "/manuals/s4/S4_User_Manual.pdf",
        size: "1MB",
      },
      {
        name: "Beam Spread",
        href: "/manuals/s4/S4_Beam_Spread.pdf",
        size: "242KB",
      },
      {
        name: "Assembly Guide",
        href: "/manuals/s4/S4_Assembly_Guide.pdf",
        size: "2.3MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-amber-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-amber-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Gel Frame Size", value: '6.25"' },
      { name: "Stocked Lamps", value: "Osram HPL @ 375w | 575w | 750w" },
      { name: "Beam Angle", value: "5-90°" },
      { name: "Weight", value: "14-20 lbs" },
    ],
    features: [
      "High-efficiency reflector system",
      "Interchangeable lens tubes",
      "Enhanced thermal management",
      "Precision optics",
      "Gobo projection capable",
    ],
    getSpecs: (wattage: number) => [
      { name: "Wattage", value: `${wattage}W` },
      { name: "Gel Frame Size", value: '6.25"' },
      { name: "Stocked Lamps", value: "Osram HPL" },
      { name: "Beam Angle", value: "5-90°" },
      { name: "Weight", value: "14-20 lbs" },
    ],
  },
  {
    id: "s4-par",
    name: "Source 4 PAR",
    inletConnector: "StagePin",
    category: "PAR",
    categorySlug: "incandescent",
    wattage: 750,
    voltage: "120",
    voltageOptions: [120],
    lampOptions: [375, 575, 750],
    links: [
      {
        name: "User Manual",
        href: "/manuals/s4_par/S4_PAR_User_Manual.pdf",
        size: "1MB",
      },
      {
        name: "Assembly Guide",
        href: "/manuals/s4_par/S4_PAR_Assembly_Guide.pdf",
        size: "2.3MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-amber-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-amber-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Gel Frame Size", value: '7.5"' },
      { name: "Stocked Lamps", value: "Osram HPL @ 375w | 575w | 750w" },
      { name: "Beam Angle", value: "12-70°" },
      { name: "Weight", value: "7.5/12.8 lbs" },
    ],
    features: [
      "Interchangeable lenses (VNSP, NSP, MFL, WFL)",
      "Rotatable barrel",
      "Rugged die-cast aluminum construction",
      "Tool-free lamp alignment",
      "Gel frame and color frame holders included",
    ],
    getSpecs: (wattage: number) => [
      { name: "Wattage", value: `${wattage}W` },
      { name: "Gel Frame Size", value: '7.5"' },
      { name: "Stocked Lamps", value: "Osram HPL" },
      { name: "Beam Angle", value: "12-70°" },
      { name: "Weight", value: "7.5/12.8 lbs" },
    ],
  },
  {
    id: "s4-parnel",
    name: "Source 4 PARNel",
    inletConnector: "StagePin",
    category: "PAR",
    categorySlug: "incandescent",
    wattage: 750,
    voltage: "120",
    voltageOptions: [120],
    lampOptions: [375, 575, 750],
    links: [
      {
        name: "User Manual",
        href: "/manuals/s4_parnel/S4_PARNel_User_Manual.pdf",
        size: "1MB",
      },
      {
        name: "Assembly Guide",
        href: "/manuals/s4_parnel/S4_PARNel_Assembly_Guide.pdf",
        size: "2.3MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-amber-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-amber-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Gel Frame Size", value: '7.5"' },
      { name: "Stocked Lamps", value: "Osram HPL @ 375w | 575w | 750w" },
      { name: "Beam Angle", value: "25-45°" },
      { name: "Weight", value: "8 lbs" },
    ],
    features: [
      "Combines PAR and Fresnel capabilities",
      "Smooth field with soft edges",
      "Variable beam angle with simple adjustment",
      "Consistent color temperature",
      "Easy access for lamp changes",
    ],
    getSpecs: (wattage: number) => [
      { name: "Wattage", value: `${wattage}W` },
      { name: "Gel Frame Size", value: '7.5"' },
      { name: "Stocked Lamps", value: "Osram HPL" },
      { name: "Beam Angle", value: "25-45°" },
      { name: "Weight", value: "8 lbs" },
    ],
  },
  {
    id: "s4-lustr-2",
    name: "Source 4 Lustr Series 2",
    inletConnector: "PowerCon",
    outletConnector: "PowerCon",
    category: "Lustr",
    categorySlug: "led",
    wattage: 167,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/lustr_2/Lustr_2_User_Manual.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Gel Frame Size", value: '6.25"' },
      { name: "Max Fixtures Thru", value: "9" },
      { name: "Beam Angle", value: "5-90°" },
      { name: "Weight", value: "18.3 lbs" },
    ],
    features: [
      "7-color LED array (XRDTM)",
      "Interchangeable lens tubes",
      "DMX/RDM control",
      "Multiple dimming curves",
      "Virtually silent operation",
    ],
  },
  {
    id: "cs-par-db",
    name: "ColorSource Deep Blue PAR",
    inletConnector: "PowerCon",
    outletConnector: "PowerCon",
    category: "PAR",
    categorySlug: "led",
    wattage: 90,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/cs_par/ColorSource_PAR_Datasheet.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Gel Frame Size", value: '6.25"' },
      { name: "Max Fixtures Thru", value: "9" },
      { name: "Beam Angle", value: "15.3°" },
      { name: "Weight", value: "8.3 lbs" },
      { name: "IP Rating", value: "IP20" },
    ],
    features: [
      "Enhanced deep blue LED array",
      "Simple user interface",
      "RGB color mixing",
      "Multiple control options",
      "Rugged construction",
    ],
  },
  {
    id: "cs-lin-48",
    name: "ColorSource Linear DB 2mm",
    inletConnector: "True1",
    outletConnector: "True1",
    category: "Striplight",
    categorySlug: "led",
    wattage: 218,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/cs_lin/ColorSource_Linear_Datasheet.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Max Fixtures Thru", value: "9" },
      { name: "Beam Angle", value: "15.6°" },
      { name: "Weight", value: "20.1 lbs" },
      { name: "IP Rating", value: "IP20" },
    ],
    features: [
      "Linear form factor for even wash",
      "Deep blue LED technology",
      "Multiple length options",
      "Simple setup and control",
      "Homogenized output",
    ],
  },
  {
    id: "sf-1000",
    name: "SolaFrame 1000",
    inletConnector: "True1",
    category: "Profile",
    categorySlug: "moving",
    wattage: 958,
    voltage: "120/208",
    voltageOptions: [208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/sf_1000/SolaFrame_1000_Datasheet.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-purple-950 rounded-full flex items-center justify-center rotate-45">
        <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-purple-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Beam Angle", value: "12-40°" },
      { name: "Weight", value: "69.9 lbs" },
      { name: "Ethernet", value: "In / Thru" },
    ],
    features: [
      "CMY color mixing",
      "Rotating and fixed gobo wheels",
      "Animation wheel",
      "Framing shutters",
      "Iris, prism and frost effects",
    ],
  },
  {
    id: "sw-1000",
    name: "SolaWash 1000",
    inletConnector: "True1",
    category: "Wash",
    categorySlug: "moving",
    wattage: 967,
    voltage: "120/208",
    voltageOptions: [208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/sw_1000/SolaWash_1000_Datasheet.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-purple-950 rounded-full flex items-center justify-center rotate-45">
        <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-purple-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Beam Angle", value: "12-55°" },
      { name: "Weight", value: "69.9 lbs" },
      { name: "Ethernet", value: "In / Thru" },
    ],
    features: [
      "CMY color mixing",
      "Variable CTO",
      "Motorized zoom",
      "Frost filter",
      "High CRI output",
    ],
  },
  {
    id: "sp-19",
    name: "SolaPix 19",
    inletConnector: "True1",
    category: "Wash",
    categorySlug: "moving",
    wattage: 900,
    voltage: "120/208",
    voltageOptions: [208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/sp_19/SolaPix_Datasheet.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-purple-950 rounded-full flex items-center justify-center rotate-45">
        <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-purple-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Beam Angle", value: "12-55°" },
      { name: "Weight", value: "35 lbs" },
      { name: "Ethernet", value: "In / Thru" },
    ],
    features: [
      "19 RGBW LEDs",
      "Individual pixel control",
      "Rapid movement",
      "Infinite pan and tilt",
      "Pixel mapping capabilities",
    ],
  },
  {
    id: "ayrton-ghibli",
    name: "Ayrton Ghibli",
    inletConnector: "True1",
    category: "Profile",
    categorySlug: "moving",
    wattage: 800,
    voltage: "120/208",
    voltageOptions: [208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/ghibli/Ghibli_Specs.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-purple-950 rounded-full flex items-center justify-center rotate-45">
        <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-purple-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Beam Angle", value: "7-56°" },
      { name: "Weight", value: "78.5 lbs" },
    ],
    features: [
      "Framing system",
      "CMY color mixing",
      "Variable CTO",
      "Multiple gobo wheels",
      "Animation effects",
    ],
  },
  {
    id: "CF-I",
    name: "Colorforce I",
    inletConnector: "PowerCon",
    category: "Striplight",
    categorySlug: "led",
    wattage: 600,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/cf_1/Color_Force_Manual.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Beam Angle", value: "7-56°" },
      { name: "Weight", value: "33/48 lbs" },
    ],
    features: [
      "RGBA color mixing",
      "Multiple length options",
      "Pixel mapping capability",
      "Homogenized output",
      "Multiple control modes",
    ],
  },
  {
    id: "CF-II",
    name: "Colorforce II",
    inletConnector: "True1",
    outletConnector: "True1",
    category: "Striplight",
    categorySlug: "led",
    wattage: 800,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/cf_2/Color_Force_2_Specs.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Beam Angle", value: "22°" },
      { name: "Max Fixtures Thru", value: "3" },
      { name: "Weight", value: "53 lbs" },
      { name: "Lenses", value: "Border | Cyc" },
    ],
    features: [
      "RGBW color mixing",
      "Improved output over original",
      "Pixel mapping capability",
      "Multiple length options",
      "Theatrical grade dimming",
    ],
  },
  {
    id: "WF-Strb",
    name: "WildFire VioStorm 120 LED Series",
    inletConnector: "PowerCon",
    outletConnector: "PowerCon",
    category: "UV Cannon",
    categorySlug: "led",
    wattage: 175,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/wf_viostorm/TDS_VioStorm_120_UV_LED_Series_215-066-05.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Beam Angle", value: "10°" },
      { name: "Weight", value: "13.35 lbs" },
    ],
    features: [
      "High-output UV LED array",
      "Narrow beam angle",
      "DMX controllable",
      "Silent operation",
      "Long-life LEDs",
    ],
  },
  {
    id: "Elation-Strb",
    name: "Elation LED Strobe",
    category: "Strobe",
    categorySlug: "led",
    wattage: 900,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/el_pr/Elation Protron 3K Strobe.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Beam Angle", value: "120°" },
      { name: "Weight", value: "17.2 lbs" },
    ],
    features: [
      "High-intensity white LED strobe",
      "Variable flash rate",
      "Adjustable intensity",
      "Multiple control modes",
      "Linkable for larger arrays",
    ],
  },
  {
    id: "ETC-RR",
    name: "Road Rack",
    category: "ETC",
    categorySlug: "power",
    wattage: 0,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/s_96/touring_rack.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-red-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-red-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Power In/Thru", value: "CamLoc" },
      { name: "Power Out", value: "StagePin / Socapex" },
    ],
    features: ["Power Distribution for 12/48/96 circuits", "ETC Dimmer Cards"],
  },
  {
    id: "LEX-Dist",
    name: "LEX Distribution Rack",
    category: "LEX",
    categorySlug: "power",
    wattage: 0,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/s_96/touring_rack.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-red-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-red-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [
      { name: "Circuts @ 120v", value: "12" },
      { name: "Circuts @ 208v", value: "12" },
      { name: "Circuts @ 3 Phase", value: "3" },
    ],
    features: ["Power Distribution for 120/208v", "CamLoc In/Thru"],
  },
  {
    id: "ETC-Nomad",
    name: "ETC Nomad",
    category: "ETC",
    categorySlug: "control",
    wattage: 0,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/nomad/ETCnomad_Datasheet_revO.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-green-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-green-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [{ name: "Universes With Key", value: "2" }],
    features: ["ETC EOS Family Control", "Portable Control Solution"],
  },
  {
    id: "APEX",
    name: "Eos Apex 5",
    category: "ETC",
    categorySlug: "control",
    wattage: 0,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/apex/Eos_Apex_5_Datasheet_revB.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-green-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-green-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [{ name: "Universes Controllable", value: "48" }],
    features: ["ETC EOS Family Control", "Portable Control Solution"],
  },
  {
    id: "ION-XE",
    name: "ETC ION XE 20",
    category: "ETC",
    categorySlug: "control",
    wattage: 0,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/ion/Ion_Xe_Datasheet_revE.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-green-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-green-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [{ name: "Universes Controllable", value: "6?" }],
    features: ["ETC EOS Family Control", "Portable Control Solution"],
  },
  {
    id: "2pt-gateway",
    name: "ETC 2-Port DMX/RDM Gateway",
    category: "ETC",
    categorySlug: "control",
    wattage: 0,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/gateways/4261L1001_DMX-RDM_2-Port_Gateway_Datasheet_vG.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-green-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-green-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [{ name: "Universes Controllable", value: "48" }],
    features: ["ETC EOS Family Control", "Portable Control Solution"],
  },
  {
    id: "4pt-gateway",
    name: "ETC Response 4-Port DMX/RDM Gateway",
    category: "ETC",
    categorySlug: "control",
    wattage: 0,
    voltage: "120/208",
    voltageOptions: [120, 208],
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/gateways/4261L1001_DMX-RDM_2-Port_Gateway_Datasheet_vG.pdf",
        size: "1MB",
      },
    ],
    icon: (
      <div className="w-16 h-16 bg-green-950 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-green-500 rounded-full"> </div>
        </div>
      </div>
    ),
    specs: [{ name: "DMX Ports", value: "4" }],
    features: ["ETC EOS Family Control", "Portable sACN Solution"],
  },
];

export const getProductsByCategory = (categorySlug: string) => {
  return products.filter((product) => product.categorySlug === categorySlug)
}

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id)
}

