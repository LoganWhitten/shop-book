import type { ReactNode } from "react"

export interface Product {
  id: string
  name: string
  category: string
  categorySlug: string
  wattage: number
  icon: ReactNode
  specs: Array<{
    name: string
    value: string
  }>
  features: string[]
}

