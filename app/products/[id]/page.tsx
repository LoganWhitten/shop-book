import Link from "next/link"
import { ChevronLeft, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById } from "@/lib/products"
import AmperageSlider from "@/components/amperage-slider"

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

        <div className="aspect-square bg-muted rounded-lg overflow-hidden relative md:aspect-[4/3] lg:aspect-[16/9]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">{product.icon}</div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-muted-foreground">{product.category}</p>
          </div>

          <AmperageSlider wattage={product.wattage} />
        </div>

        <Tabs defaultValue="specs">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
          </TabsList>
          <TabsContent value="specs" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {product.specs.map((spec, index) => (
                <div key={index} className="flex flex-col p-3 rounded-lg bg-muted">
                  <span className="text-muted-foreground">{spec.name}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="features" className="space-y-4 pt-4">
            <ul className="space-y-2">
              {(product.features ?? []).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <div className="rounded-full bg-primary w-1.5 h-1.5" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="docs" className="space-y-4 pt-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <Info className="h-5 w-5 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="font-medium">User Manual</span>
                  <span className="text-sm text-muted-foreground">PDF, 2.4MB</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Download
                </Button>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <Info className="h-5 w-5 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="font-medium">Technical Specifications</span>
                  <span className="text-sm text-muted-foreground">PDF, 1.8MB</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Download
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

