import Link from "next/link"
import { ChevronLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function AllProductsPage() {
  return (
    <main className="container px-4 py-6 mx-auto max-w-md md:max-w-2xl lg:max-w-4xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="/">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">All Products</h1>
        </div>

        <div className="relative">
          <Input type="search" placeholder="Search all products..." className="pl-10 rounded-xl bg-background" />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}

