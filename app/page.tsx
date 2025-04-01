import { Suspense } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import CategoryList from "@/components/category-list"
import CategoryPreview from "@/components/category-preview"

const categories = [
  {
    name: "Incandescent Fixtures",
    slug: "incandescent",
    color: "bg-amber-950 text-amber-400",
  },
  {
    name: "LED Fixtures",
    slug: "led",
    color: "bg-blue-950 text-blue-400",
  },
  {
    name: "Moving Lights",
    slug: "moving",
    color: "bg-purple-950 text-purple-400",
  },
  {
    name: "Power Distribution",
    slug: "power",
    color: "bg-red-950 text-red-400",
  },
  {
    name: "Control",
    slug: "control",
    color: "bg-green-950 text-green-400",
  },
]

export default function Home() {
  return (
    <main className="container px-4 py-6 mx-auto max-w-7xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Logan Whitten's Shop Book</h1>
        </div>
      </div>      
      <div className="space-y-12">
        {categories.map((category) => (
          <CategoryPreview 
            key={category.slug}
            slug={category.slug}
            name={category.name}
            color={category.color}
          />
        ))}
      </div>
    </main>
  )
}