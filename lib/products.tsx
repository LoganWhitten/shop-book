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
    name: "ColorSource PAR Deep Blue",
    inletConnector: "PowerCon",
    outletConnector: "PowerCon",
    category: "ColorSource PAR",
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
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
