import type { ReactNode } from "react"

export interface Product {
  id: string
  name: string
  category: string
  categorySlug: 'incandescent' | 'led' | 'moving' | 'power' | 'control'
  wattage: number
  links: Array<{
    name: string
    href: string
    size: string
  }>
  inletConnector: string
  voltage: '120' | '208' | '120/208' 
  outletConnector?: string
  icon: ReactNode
  specs: Array<{
    name: string
    value: string
  }>
}

