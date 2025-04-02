"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, X, Lightbulb, Zap, Sparkles, Cable, Sliders, FileText } from "lucide-react"
import { products } from "@/lib/products"
import { cn } from "@/lib/utils"
import AnimatedNumber from "@/components/animated-number"

const categoryIcons = {
  incandescent: <Lightbulb className="h-5 w-5" />,
  led: <Zap className="h-5 w-5" />,
  moving: <Sparkles className="h-5 w-5" />,
  power: <Cable className="h-5 w-5" />,
  control: <Sliders className="h-5 w-5" />,
}

const categoryColors = {
  incandescent: "from-amber-900 to-amber-950 text-amber-400 border-amber-800",
  led: "from-blue-900 to-blue-950 text-blue-400 border-blue-800",
  moving: "from-purple-900 to-purple-950 text-purple-400 border-purple-800",
  power: "from-red-900 to-red-950 text-red-400 border-red-800",
  control: "from-green-900 to-green-950 text-green-400 border-green-800",
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [selectedTab, setSelectedTab] = useState<string>("specs")
  const [selectedLamp, setSelectedLamp] = useState<Record<string, number>>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

  // Get filtered products for the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categorySlug === selectedCategory)
    : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden">
      {/* Header with category selection */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Logan's Shop Book</h1>
            <div className="flex gap-1">
              {Object.entries(categoryIcons).map(([key, icon]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedCategory((prev) => (prev === key ? null : key))
                    setSelectedProduct(null)
                  }}
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    selectedCategory === key
                      ? `bg-gradient-to-br ${categoryColors[key as keyof typeof categoryColors]}`
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700",
                  )}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-16 pb-4 min-h-screen">
        {/* Category title */}
        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              key={`category-${selectedCategory}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-4 py-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-full bg-gradient-to-br ${categoryColors[selectedCategory as keyof typeof categoryColors]}`}
                >
                  {categoryIcons[selectedCategory as keyof typeof categoryIcons]}
                </div>
                <h2 className="text-2xl font-bold">
                  {selectedCategory === "incandescent"
                    ? "Incandescent Fixtures"
                    : selectedCategory === "led"
                      ? "LED Fixtures"
                      : selectedCategory === "moving"
                        ? "Moving Lights"
                        : selectedCategory === "power"
                          ? "Power Distribution"
                          : "Control"}
                </h2>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          {selectedCategory && !selectedProduct && (
            <motion.div
              key={`products-${selectedCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-4 py-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.05 },
                    }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br ${categoryColors[selectedCategory as keyof typeof categoryColors]} cursor-pointer`}
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 transform scale-125">{product.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm opacity-80 mb-3">{product.category}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {product.voltage && (
                          <span className="px-2 py-1 rounded-full bg-black/30 text-xs">{product.voltage}V</span>
                        )}
                        <span className="px-2 py-1 rounded-full bg-black/30 text-xs">
                          {product.lampOptions ? `${product.lampOptions.join("/")}W` : `${product.wattage}W`}
                        </span>
                        {product.inletConnector && (
                          <span className="px-2 py-1 rounded-full bg-black/30 text-xs">{product.inletConnector}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product detail view */}
        <AnimatePresence mode="wait">
          {selectedProduct && currentProduct && (
            <motion.div
              key={`detail-${selectedProduct}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-4 py-4"
            >
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800">

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Product header */}
                <div
                  className={`p-6 bg-gradient-to-r ${categoryColors[currentProduct.categorySlug as keyof typeof categoryColors]}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="transform scale-125">{currentProduct.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{currentProduct.name}</h3>
                      <p className="text-sm opacity-80">{currentProduct.category}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
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
                  </div>
                </div>

                {/* Lamp options */}
                {currentProduct.lampOptions && (
                  <div className="p-4 border-b border-gray-800">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium">Lamp:</span>
                      {currentProduct.lampOptions.map((wattage) => (
                        <button
                          key={wattage}
                          onClick={() => handleLampChange(currentProduct.id, wattage)}
                          className={cn(
                            "px-3 py-1 rounded-full text-sm transition-colors",
                            currentWattage === wattage
                              ? `bg-gradient-to-r ${categoryColors[currentProduct.categorySlug as keyof typeof categoryColors]}`
                              : "bg-gray-800 hover:bg-gray-700",
                          )}
                        >
                          {wattage}W
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Power requirements */}
                <div className="p-4 border-b border-gray-800">
                  <h4 className="text-sm font-medium mb-3">Power Requirements</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {(
                      currentProduct.voltageOptions ||
                      (currentProduct.voltage
                        ? currentProduct.voltage.split("/").map((v) => Number.parseInt(v))
                        : [120])
                    ).map((voltage) => (
                      <div
                        key={voltage}
                        className={`p-3 rounded-lg flex items-center gap-3 ${
                          voltage === 120
                            ? "bg-blue-950/30 border border-blue-900/50"
                            : "bg-purple-950/30 border border-purple-900/50"
                        }`}
                      >
                        <Zap className={`h-8 w-8 ${voltage === 120 ? "text-blue-400" : "text-purple-400"}`} />
                        <div>
                          <div className="text-xs opacity-70">{voltage}V</div>
                          <div className="text-xl font-bold">
                            <AnimatedNumber
                              value={Number.parseFloat(calculateAmperage(currentWattage, voltage))}
                              decimals={2}
                              suffix="A"
                            />
                          </div>
                          <div className="text-xs opacity-70">
                            <AnimatedNumber value={currentWattage} suffix="W" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-800">
                  <div className="flex">
                    <button
                      onClick={() => setSelectedTab("specs")}
                      className={cn(
                        "flex-1 py-3 text-center text-sm font-medium border-b-2 transition-colors",
                        selectedTab === "specs"
                          ? "border-white text-white"
                          : "border-transparent text-gray-400 hover:text-gray-300",
                      )}
                    >
                      Specifications
                    </button>
                    {currentProduct.features && currentProduct.features.length > 0 && (
                      <button
                        onClick={() => setSelectedTab("features")}
                        className={cn(
                          "flex-1 py-3 text-center text-sm font-medium border-b-2 transition-colors",
                          selectedTab === "features"
                            ? "border-white text-white"
                            : "border-transparent text-gray-400 hover:text-gray-300",
                        )}
                      >
                        Features
                      </button>
                    )}
                    <button
                      onClick={() => setSelectedTab("docs")}
                      className={cn(
                        "flex-1 py-3 text-center text-sm font-medium border-b-2 transition-colors",
                        selectedTab === "docs"
                          ? "border-white text-white"
                          : "border-transparent text-gray-400 hover:text-gray-300",
                      )}
                    >
                      Documents
                    </button>
                  </div>
                </div>

                {/* Tab content */}
                <div className="p-4">
                  <AnimatePresence mode="wait">
                    {selectedTab === "specs" && (
                      <motion.div
                        key="specs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {(currentProduct.getSpecs
                            ? currentProduct.getSpecs(currentWattage)
                            : currentProduct.specs
                          ).map((spec, index) => (
                            <motion.div
                              key={index}
                              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: index * 0.05 },
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ul className="space-y-2">
                          {currentProduct.features.map((feature, index) => (
                            <motion.li
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
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {selectedTab === "docs" && (
                      <motion.div
                        key="docs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentProduct.links && currentProduct.links.length > 0 ? (
                          <div className="grid grid-cols-1 gap-3">
                            {currentProduct.links.map((link, index) => (
                              <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-800 transition-colors"
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
                                <div className="text-xs px-2 py-1 rounded-full bg-gray-700">Download</div>
                              </motion.a>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8 text-gray-400">No documentation available</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        <AnimatePresence>
          {!selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center h-[80vh]"
            >
              <div className="mb-6 flex gap-4">
                {Object.entries(categoryIcons).map(([key, icon]) => (
                  <motion.div
                    key={key}
                    className={`p-4 rounded-full bg-gradient-to-br ${categoryColors[key as keyof typeof categoryColors]}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: Number.parseInt(Object.keys(categoryIcons).indexOf(key).toString()) * 0.1,
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
              <motion.h2
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Lighting Equipment Reference
              </motion.h2>
              <motion.p
                className="text-gray-400 max-w-md mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Select a category from the top menu to browse lighting equipment specifications and documentation.
              </motion.p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 w-full max-w-2xl">
                {Object.entries(categoryIcons).map(([key, icon], index) => {
                  const categoryName =
                    key === "incandescent"
                      ? "Incandescent"
                      : key === "led"
                        ? "LED Fixtures"
                        : key === "moving"
                          ? "Moving Lights"
                          : key === "power"
                            ? "Power Distro"
                            : "Control"

                  return (
                    <motion.button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`p-4 rounded-lg bg-gradient-to-br ${categoryColors[key as keyof typeof categoryColors]} flex flex-col items-center justify-center gap-2`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="p-2 rounded-full bg-black/20">{icon}</div>
                      <span className="text-sm font-medium">{categoryName}</span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

