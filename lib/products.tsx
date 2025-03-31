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
      { name: "Beam Angle", value: "5-90°" },
      { name: "Weight", value: "14-20 lbs" },
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
      { name: "Beam Angle", value: "5-90°" },
      { name: "Weight", value: "14-20 lbs" },
    ],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
