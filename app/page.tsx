"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, Zap, Sparkles, Cable, Sliders, FileText, X, ChevronLeft, Info, Search } from "lucide-react"
import { products } from "@/lib/products"
import { cn } from "@/lib/utils"
import AnimatedNumber from "@/components/animated-number"
import type { Product } from "@/lib/types"
import Link from "next/link"

const categoryIcons = {
  incandescent: <Lightbulb className="h-5 w-5" />,
  led: <Zap className="h-5 w-5" />,
  moving: <Sparkles className="h-5 w-5" />,
  power: <Cable className="h-5 w-5" />,
  control: <Sliders className="h-5 w-5" />,
}

const categoryColors = {
  incandescent: "from-amber-900/80 to-amber-950/80 text-amber-400 border-amber-800/50",
  led: "from-blue-900/80 to-blue-950/80 text-blue-400 border-blue-800/50",
  moving: "from-purple-900/80 to-purple-950/80 text-purple-400 border-purple-800/50",
  power: "from-red-900/80 to-red-950/80 text-red-400 border-red-800/50",
  control: "from-green-900/80 to-green-950/80 text-green-400 border-green-800/50",
}

const categoryNames = {
  incandescent: "Incandescent",
  led: "LED Fixtures",
  moving: "Moving Lights",
  power: "Power Distribution",
  control: "Control",
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [selectedTab, setSelectedTab] = useState<string>("specs")
  const [selectedLamp, setSelectedLamp] = useState<Record<string, number>>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  // Reset scroll position when changing views
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0)
    }
  }, [selectedCategory, selectedProduct])

  // Get the current product object
  const currentProduct = selectedProduct ? products.find((p) => p.id === selectedProduct) : null

  // Get the current wattage for the selected product
  const currentWattage =
    currentProduct && selectedLamp[currentProduct.id]
      ? selectedLamp[currentProduct.id]
      : currentProduct?.lampOptions
        ? currentProduct.lampOptions[0]
        : currentProduct?.wattage || 0

  // Handle lamp selection
  const handleLampChange = (productId: string, wattage: number) => {
    setSelectedLamp((prev) => ({
      ...prev,
      [productId]: wattage,
    }))
  }

  // Calculate amperage based on wattage and voltage
  const calculateAmperage = (wattage: number, voltage: number) => {
    return (wattage / voltage).toFixed(2)
  }

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    if (isSearching) {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return selectedCategory ? product.categorySlug === selectedCategory : true
  })

  // Group products by category for search results
  const groupedProducts = filteredProducts.reduce(
    (acc, product) => {
      const category = product.categorySlug
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(product)
      return acc
    },
    {} as Record<string, Product[]>,
  )

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <motion.div
        className={cn(
          "w-20 md:w-64 h-full bg-gray-900 border-r border-gray-800 flex flex-col z-10",
          selectedProduct ? "hidden md:flex" : "flex",
        )}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="p-4 border-b border-gray-800">
          <button                     onClick={() => setSelectedProduct(null)} className="text-xl font-bold hidden md:block">Lighting Reference</button>
          <h1 className="text-xl font-bold md:hidden">LR</h1>
        </div>

        <div className="p-2 md:p-4">
          <div
            className={cn(
              "relative mb-4 transition-all duration-300",
              isSearching ? "opacity-100" : "opacity-70 hover:opacity-100",
            )}
          >
            <input
              type="text"
              placeholder="Search equipment..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                if (e.target.value) {
                  setIsSearching(true)
                  setSelectedCategory(null)
                } else {
                  setIsSearching(false)
                }
              }}
              onFocus={() => {
                if (searchQuery) setIsSearching(true)
              }}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            {searchQuery && (
              <button
                className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                onClick={() => {
                  setSearchQuery("")
                  setIsSearching(false)
                }}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="space-y-2">
            <div className="text-xs uppercase text-gray-500 font-medium tracking-wider hidden md:block">Categories</div>

            {Object.entries(categoryIcons).map(([key, icon]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedCategory((prev) => (prev === key ? null : key))
                  setSelectedProduct(null)
                  setIsSearching(false)
                  setSearchQuery("")
                }}
                className={cn(
                  "w-full flex items-center gap-3 p-2 rounded-lg transition-all duration-200",
                  selectedCategory === key
                    ? `bg-gradient-to-r ${categoryColors[key as keyof typeof categoryColors]}`
                    : "hover:bg-gray-800/50",
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-full",
                    selectedCategory === key
                      ? "bg-black/20"
                      : `bg-gradient-to-br ${categoryColors[key as keyof typeof categoryColors]}`,
                  )}
                >
                  {icon}
                </div>
                <span className="font-medium text-sm hidden md:block">
                  {categoryNames[key as keyof typeof categoryNames]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-gray-800 text-xs place-items-center text-gray-500 hidden md:block">
          <p>Made very quickly by <a className="underline hover:text-gray-400" href="https://instagram.com/loganwhitten512">Logan Whitten</a></p>
          <p>for initial refrence only</p>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        ref={mainRef}
        className="flex-1 h-full overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {/* Product grid view */}
          {!selectedProduct && (
            <motion.div
              key="product-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-4 md:p-6"
            >
              {/* Category title or search results title */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                {isSearching ? (
                  <h2 className="text-2xl font-bold">Search Results for "{searchQuery}"</h2>
                ) : selectedCategory ? (
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full bg-gradient-to-br ${categoryColors[selectedCategory as keyof typeof categoryColors]}`}
                    >
                      {categoryIcons[selectedCategory as keyof typeof categoryIcons]}
                    </div>
                    <h2 className="text-2xl font-bold">
                      {categoryNames[selectedCategory as keyof typeof categoryNames]}
                    </h2>
                  </div>
                ) : (
                  <h2 className="text-2xl font-bold">All Equipment</h2>
                )}
              </motion.div>

              {/* Product grid */}
              {isSearching ? (
                // Search results grouped by category
                Object.entries(groupedProducts).length > 0 ? (
                  <div className="space-y-8">
                    {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                      <div key={category}>
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className={`p-1.5 rounded-full bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]}`}
                          >
                            {categoryIcons[category as keyof typeof categoryIcons]}
                          </div>
                          <h3 className="text-lg font-medium">
                            {categoryNames[category as keyof typeof categoryNames]}
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {categoryProducts.map((product, index) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              index={index}
                              onClick={() => setSelectedProduct(product.id)}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-gray-800 p-4 rounded-full mb-4">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">No results found</h3>
                    <p className="text-gray-400 max-w-md">
                      We couldn't find any equipment matching your search. Try different keywords or browse by category.
                    </p>
                  </div>
                )
              ) : (
                // Regular category view
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                      onClick={() => setSelectedProduct(product.id)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Product detail view */}
          {selectedProduct && currentProduct && (
            <motion.div
              key={`detail-${selectedProduct}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col"
            >
              {/* Product header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-6 bg-gradient-to-r ${categoryColors[currentProduct.categorySlug as keyof typeof categoryColors]} sticky top-0 z-10`}
              >
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex items-center gap-2 bg-black/20 hover:bg-black/30 rounded-lg px-3 py-1.5 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="text-sm font-medium">Back</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {currentProduct.inletConnector && (
                      <span className="px-2 py-1 rounded-full bg-black/30 text-xs">
                        {currentProduct.inletConnector}
                      </span>
                    )}
                    {currentProduct.outletConnector && (
                      <span className="px-2 py-1 rounded-full bg-black/30 text-xs">
                        {currentProduct.outletConnector}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="transform scale-125">{currentProduct.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentProduct.name}</h3>
                    <p className="text-sm opacity-80">{currentProduct.category}</p>
                  </div>
                </div>
              </motion.div>

              <div className="flex-1 p-4 md:p-6">
                <div className="max-w-4xl mx-auto">
                  {/* Lamp options */}
                  {currentProduct.lampOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="mb-6 bg-gray-900 rounded-xl p-4 border border-gray-800"
                    >
                      <h4 className="text-sm font-medium mb-3">Lamp Options</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProduct.lampOptions.map((wattage) => (
                          <button
                            key={wattage}
                            onClick={() => handleLampChange(currentProduct.id, wattage)}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-sm transition-all duration-200",
                              currentWattage === wattage
                                ? `bg-gradient-to-r ${categoryColors[currentProduct.categorySlug as keyof typeof categoryColors]}`
                                : "bg-gray-800 hover:bg-gray-700",
                            )}
                          >
                            {wattage}W
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Power requirements */}
                  {currentProduct.categorySlug !== 'power' && currentProduct.categorySlug !== 'control' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="mb-6 bg-gray-900 rounded-xl p-4 border border-gray-800"
                    >
                      <h4 className="text-sm font-medium mb-3">Power Requirements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(
                          currentProduct.voltageOptions ||
                          (currentProduct.voltage
                            ? currentProduct.voltage.split("/").map((v) => Number.parseInt(v))
                            : [120])
                        ).map((voltage) => (
                          <div
                            key={voltage}
                            className={`p-4 rounded-lg flex items-center gap-4 ${
                              voltage === 120
                                ? "bg-blue-950/30 border border-blue-900/50"
                                : "bg-purple-950/30 border border-purple-900/50"
                            }`}
                          >
                            <Zap className={`h-10 w-10 ${voltage === 120 ? "text-blue-400" : "text-purple-400"}`} />
                            <div>
                              <div className="text-sm opacity-70">{voltage}V</div>
                              <div className="text-3xl font-bold">
                                <AnimatedNumber
                                  value={Number.parseFloat(calculateAmperage(currentWattage, voltage))}
                                  decimals={2}
                                  suffix="A"
                                />
                              </div>
                              <div className="text-sm opacity-70">
                                <AnimatedNumber value={currentWattage} suffix="W" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Tabs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
                  >
                    <div className="flex border-b border-gray-800">
                      <button
                        onClick={() => setSelectedTab("specs")}
                        className={cn(
                          "flex-1 py-3 text-center text-sm font-medium transition-colors",
                          selectedTab === "specs"
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/50",
                        )}
                      >
                        Specifications
                      </button>
                      {currentProduct.features && currentProduct.features.length > 0 && (
                        <button
                          onClick={() => setSelectedTab("features")}
                          className={cn(
                            "flex-1 py-3 text-center text-sm font-medium transition-colors",
                            selectedTab === "features"
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/50",
                          )}
                        >
                          Features
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedTab("docs")}
                        className={cn(
                          "flex-1 py-3 text-center text-sm font-medium transition-colors",
                          selectedTab === "docs"
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/50",
                        )}
                      >
                        Documents
                      </button>
                    </div>

                    {/* Tab content */}
                    <div className="p-4">
                      <AnimatePresence mode="wait">
                        {selectedTab === "specs" && (
                          <motion.div
                            key="specs"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {(currentProduct.getSpecs
                                ? currentProduct.getSpecs(currentWattage)
                                : currentProduct.specs
                              ).map((spec, index) => (
                                <motion.div
                                  key={index}
                                  className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { delay: index * 0.03 },
                                  }}
                                >
                                  <div className="text-xs text-gray-400">{spec.name}</div>
                                  <div className="font-medium">{spec.value}</div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {selectedTab === "features" && currentProduct.features && (
                          <motion.div
                            key="features"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {currentProduct.features.map((feature, index) => (
                                <motion.div
                                  key={index}
                                  className="flex items-start gap-3 bg-gray-800/30 p-3 rounded-lg"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: index * 0.05 },
                                  }}
                                >
                                  <div
                                    className={`p-1 rounded-full bg-gradient-to-r ${categoryColors[currentProduct.categorySlug as keyof typeof categoryColors]} mt-0.5`}
                                  >
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  </div>
                                  <span>{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {selectedTab === "docs" && (
                          <motion.div
                            key="docs"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {currentProduct.links && currentProduct.links.length > 0 ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {currentProduct.links.map((link, index) => (
                                  <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                      opacity: 1,
                                      y: 0,
                                      transition: { delay: index * 0.05 },
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <div
                                      className={`p-2 rounded-full bg-gradient-to-r ${categoryColors[currentProduct.categorySlug as keyof typeof categoryColors]}`}
                                    >
                                      <FileText className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-medium">{link.name}</div>
                                      <div className="text-xs text-gray-400">{link.size}</div>
                                    </div>
                                    <div className="text-xs px-2 py-1 rounded-full bg-gray-700">View</div>
                                  </motion.a>
                                ))}
                              </div>
                            ) : (
                              <div className="text-center py-8 text-gray-400">
                                <Info className="h-12 w-12 mx-auto mb-3 text-gray-600" />
                                <p>No documentation available for this product</p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

// Product Card Component
function ProductCard({
  product,
  index,
  onClick,
}: {
  product: Product
  index: number
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.03 },
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br ${categoryColors[product.categorySlug as keyof typeof categoryColors]} cursor-pointer`}
      onClick={onClick}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 transform scale-125">{product.icon}</div>
        <h3 className="text-xl font-bold mb-1">{product.name}</h3>
        <p className="text-sm opacity-80 mb-3">{product.category}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {product.voltage && <span className="px-2 py-1 rounded-full bg-black/30 text-xs">{product.voltage}V</span>}
          <span className="px-2 py-1 rounded-full bg-black/30 text-xs">
            {product.lampOptions ? `${product.lampOptions.join("/")}W` : `${product.wattage}W`}
          </span>
          {product.inletConnector && (
            <span className="px-2 py-1 rounded-full bg-black/30 text-xs">{product.inletConnector}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

