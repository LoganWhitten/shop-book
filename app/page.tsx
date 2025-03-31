import { Suspense } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import CategoryList from "@/components/category-list"

export default function Home() {
  return (
    <main className="container px-4 py-6 mx-auto max-w-md md:max-w-2xl lg:max-w-4xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">UNCSA Shop Book</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>

        <div className="relative">
          <Input type="search" placeholder="Search equipment..." className="pl-10 rounded-xl bg-background" />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Categories</h2>
          <Suspense fallback={<CategoryListSkeleton />}>
            <CategoryList />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

function CategoryListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex items-center gap-3 p-2">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        ))}
    </div>
  )
}

