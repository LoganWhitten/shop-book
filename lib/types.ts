import type { ReactNode } from "react"

export interface DocumentLink {
  name: string
  href: string
  size: string
}

export interface Product {
  id: string
  name: string
  category: string
  categorySlug: string
  wattage: number
  voltage?: string
  voltageOptions?: number[]
  lampOptions?: number[]
  inletConnector?: string
  outletConnector?: string
  icon: ReactNode
  specs: Array<{
    name: string
    value: string
  }>
  getSpecs?: (wattage: number) => Array<{
    name: string
    value: string
  }>
  features?: string[]
  links: DocumentLink[]
}

