import Link from "next/link"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">{product.icon}</div>
      </div>
      <div className="mt-2">
        <h3 className="font-medium text-sm group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-xs text-muted-foreground">{product.category}</p>
      </div>
    </Link>
  )
}

