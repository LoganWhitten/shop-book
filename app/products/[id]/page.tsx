import Link from "next/link"
import { ChevronLeft, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById } from "@/lib/products"
import PowerInfo from "@/components/power-info"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    return <div className="p-8 text-center">Product not found</div>
  }

  return (
    <main className="container px-4 py-6 mx-auto max-w-md md:max-w-2xl lg:max-w-4xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href={`/category/${product.categorySlug}`}>
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-xl font-bold">{product.name}</h1>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-muted-foreground">{product.category}</p>
          </div>
          <PowerInfo
            wattage={product.wattage}
            inletConnector={product.inletConnector}
            outletConnector={product.outletConnector}
            voltage={product.voltage}
          />
        </div>

        {/* Mobile view - Tabs (hidden on lg and above) */}
        <div className="lg:hidden">
          <Tabs defaultValue="specs">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="docs">Documentation</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-3 rounded-lg bg-muted"
                  >
                    <span className="text-muted-foreground">{spec.name}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="docs" className="space-y-4 pt-4">
              <div className="flex flex-col gap-4">
                {product.links.map(({ name, href, size }) => (
                  <div key={name} className="flex items-center gap-2 p-3 rounded-lg border">
                    <Info className="h-5 w-5 text-muted-foreground" />
                    <div className="flex flex-col">
                      <span className="font-medium">{name}</span>
                      <span className="text-sm text-muted-foreground">
                        PDF, {size}
                      </span>
                    </div>
                    <Link className="ml-auto" href={href} target="_blank">
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop view - Side by side (hidden on smaller screens) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
          {/* Specifications */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Specifications</h3>
            <div className="grid grid-cols-1 gap-2 text-sm">
              {product.specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex flex-col p-3 rounded-lg bg-muted"
                >
                  <span className="text-muted-foreground">{spec.name}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Documentation</h3>
            <div className="flex flex-col gap-4">
              {product.links.map(({ name, href, size }) => (
                <div key={name}  className="flex items-center gap-2 p-3 rounded-lg border">
                  <Info className="h-5 w-5 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span className="font-medium">{name}</span>
                    <span className="text-sm text-muted-foreground">
                      PDF, {size}
                    </span>
                  </div>
                  <Link className="ml-auto" href={href} target="_blank">
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

