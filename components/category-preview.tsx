import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductCard from "@/components/product-card"
import { getProductsByCategory } from "@/lib/products"

interface CategoryPreviewProps {
  slug: string;
  name: string;
  color: string;
}

export default function CategoryPreview({ slug, name, color }: CategoryPreviewProps) {
  const products = getProductsByCategory(slug).slice(0, 5);
  
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{name}</h2>
        <Link 
          href={`/category/${slug}`}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          View all
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}