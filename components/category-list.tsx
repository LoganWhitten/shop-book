import Link from "next/link"
import { Lightbulb, Zap, Sparkles, Cable, Sliders, Wrench } from "lucide-react"

const categories = [
  {
    name: "Incandescent Fixtures",
    icon: <Lightbulb className="h-5 w-5" />,
    href: "/category/incandescent",
    color: "bg-amber-950 text-amber-400",
  },
  {
    name: "LED Fixtures",
    icon: <Zap className="h-5 w-5" />,
    href: "/category/led",
    color: "bg-blue-950 text-blue-400",
  },
  {
    name: "Moving Lights",
    icon: <Sparkles className="h-5 w-5" />,
    href: "/category/moving",
    color: "bg-purple-950 text-purple-400",
  },
  {
    name: "Power Distribution",
    icon: <Cable className="h-5 w-5" />,
    href: "/category/power",
    color: "bg-red-950 text-red-400",
  },
  {
    name: "Control",
    icon: <Sliders className="h-5 w-5" />,
    href: "/category/control",
    color: "bg-green-950 text-green-400",
  },
  {
    name: "E-Shop",
    icon: <Wrench className="h-5 w-5" />,
    href: "/category/eshop",
    color: "bg-green-950 text-green-400",
  },
]

export default function CategoryList() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <div className={`p-2 rounded-md ${category.color}`}>{category.icon}</div>
          <span className="font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

