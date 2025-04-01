import type { Product } from "./types";

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
      { name: "Gel Frame Size", value: "6.25" },
      { name: "Stocked Lamps", value: "Osram HPL @ 375w | 575w | 750w" },
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
  },
  {
    id: "s4-parnel",
    name: "Source 4 PARNel",
    inletConnector: "StagePin",
    category: "PAR",
    categorySlug: "incandescent",
    wattage: 750,
    voltage: "120",
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
  },
  {
    id: "sf-1000",
    name: "SolaFrame 1000",
    inletConnector: "True1",
    category: "Profile",
    categorySlug: "moving",
    wattage: 958,
    voltage: "120/208",
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/sf_1000/SolaFrame_1000_Datasheet.pdf",
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
      { name: "Beam Angle", value: "12-40°" },
      { name: "Weight", value: "69.9 lbs" },
      { name: "Ethernet", value: "In / Thru" },
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
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/sw_1000/SolaWash_1000_Datasheet.pdf",
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
      { name: "Beam Angle", value: "12-55°" },
      { name: "Weight", value: "69.9 lbs" },
      { name: "Ethernet", value: "In / Thru" },
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
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/sp_19/SolaPix_Datasheet.pdf",
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
      { name: "Beam Angle", value: "12-55°" },
      { name: "Weight", value: "35 lbs" },
      { name: "Ethernet", value: "In / Thru" },
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
    links: [
      {
        name: "User Manual/Datasheet",
        href: "/manuals/ghibli/Ghibli_Specs.pdf",
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
      { name: "Beam Angle", value: "7-56" },
      { name: "Weight", value: "78.5 lbs" },
    ],
  },
  {
    id: "CF-I",
    name: "Colorforce I",
    inletConnector: "PowerCon",
    category: "Striplight",
    categorySlug: "led",
    wattage: 0,
    voltage: "120/208",
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
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
