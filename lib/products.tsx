import type { Product } from "./types";

// This would typically come from an API or database
export const products: Product[] = [
  // Incandescent Fixtures
  {
    id: "incan-1",
    name: "Source 4",
    inletConnector: "StagePin",
    category: "Incandescent Fixture",
    categorySlug: "incandescent",
    wattage: 575,
    voltage: "120",
    links: [
      {
        name: "User Manual",
        href: "https://example.com/manual.pdf",
        size: "2.4MB",
      },
      {
        name: "Technical Specifications",
        href: "https://example.com/manual.pdf",
        size: "1.8MB",
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
      { name: "Beam Angle", value: "7-50°" },
      { name: "Color Temp", value: "3200K" },
      { name: "Weight", value: "5.2 lbs" },
    ],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
