"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Filter } from "lucide-react"

const allProducts = [
  // Residential Inverters
  {
    id: 1,
    category: "Residential Inverters",
    title: "GW3000-NS Residential Inverter",
    description: "High-efficiency single-phase inverter for home solar systems",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["97.6% Efficiency", "WiFi Monitoring", "10-Year Warranty"],
    specifications: {
      power: "3kW",
      efficiency: "97.6%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "PKR 45,999",
    originalPrice: "PKR 52,999",
    availability: "IN STOCK",
    sku: "GW3000-NS",
  },
  {
    id: 2,
    category: "Residential Inverters",
    title: "GW5000-NS Residential Inverter",
    description: "5kW single-phase inverter with advanced monitoring",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["97.8% Efficiency", "Smart Monitoring", "10-Year Warranty"],
    specifications: {
      power: "5kW",
      efficiency: "97.8%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "PKR 65,999",
    originalPrice: "PKR 75,999",
    availability: "IN STOCK",
    sku: "GW5000-NS",
  },
  {
    id: 3,
    category: "Residential Inverters",
    title: "GW6000-NS Residential Inverter",
    description: "6kW single-phase inverter with premium features",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["97.8% Efficiency", "Premium Monitoring", "10-Year Warranty"],
    specifications: {
      power: "6kW",
      efficiency: "97.8%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "PKR 75,999",
    originalPrice: "PKR 85,999",
    availability: "IN STOCK",
    sku: "GW6000-NS",
  },
  {
    id: 4,
    category: "Residential Inverters",
    title: "GW8000-NS Residential Inverter",
    description: "8kW single-phase inverter for larger homes",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["98.0% Efficiency", "Advanced Monitoring", "10-Year Warranty"],
    specifications: {
      power: "8kW",
      efficiency: "98.0%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "PKR 95,999",
    originalPrice: "PKR 1,05,999",
    availability: "IN STOCK",
    sku: "GW8000-NS",
  },
  // Commercial Inverters
  {
    id: 5,
    category: "Commercial Inverters",
    title: "GW25K-MT Commercial Inverter",
    description: "25kW three-phase inverter for commercial installations",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["98.4% Efficiency", "Remote Monitoring", "5-Year Warranty"],
    specifications: {
      power: "25kW",
      efficiency: "98.4%",
      warranty: "5 Years",
      monitoring: "4G/WiFi/Ethernet",
      protection: "IP65",
    },
    price: "PKR 2,15,999",
    originalPrice: "PKR 2,45,999",
    availability: "IN STOCK",
    sku: "GW25K-MT",
  },
  {
    id: 6,
    category: "Commercial Inverters",
    title: "GW50K-MT Commercial Inverter",
    description: "50kW three-phase inverter for large commercial projects",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["98.5% Efficiency", "SCADA Compatible", "5-Year Warranty"],
    specifications: {
      power: "50kW",
      efficiency: "98.5%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "PKR 3,85,999",
    originalPrice: "PKR 4,25,999",
    availability: "IN STOCK",
    sku: "GW50K-MT",
  },
  {
    id: 7,
    category: "Commercial Inverters",
    title: "GW80K-MT Commercial Inverter",
    description: "80kW three-phase inverter for industrial applications",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["98.6% Efficiency", "Industrial Grade", "5-Year Warranty"],
    specifications: {
      power: "80kW",
      efficiency: "98.6%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "PKR 5,85,999",
    originalPrice: "PKR 6,25,999",
    availability: "IN STOCK",
    sku: "GW80K-MT",
  },
  {
    id: 8,
    category: "Commercial Inverters",
    title: "GW100K-MT Commercial Inverter",
    description: "100kW three-phase inverter for mega commercial projects",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["98.7% Efficiency", "Mega Scale", "5-Year Warranty"],
    specifications: {
      power: "100kW",
      efficiency: "98.7%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "PKR 7,25,999",
    originalPrice: "PKR 7,85,999",
    availability: "IN STOCK",
    sku: "GW100K-MT",
  },
  // Energy Storage
  {
    id: 9,
    category: "Energy Storage",
    title: "Lynx Home F Energy Storage",
    description: "5kWh lithium battery storage for homes",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["5kWh Capacity", "95% Efficiency", "15-Year Warranty"],
    specifications: {
      capacity: "5kWh",
      efficiency: "95%",
      warranty: "15 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "PKR 1,25,999",
    originalPrice: "PKR 1,45,999",
    availability: "IN STOCK",
    sku: "LYNX-HOME-F",
  },
  {
    id: 10,
    category: "Energy Storage",
    title: "Lynx Home U Energy Storage",
    description: "10kWh modular battery system for larger homes",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["10kWh Capacity", "Modular Design", "15-Year Warranty"],
    specifications: {
      capacity: "10kWh",
      efficiency: "95%",
      warranty: "15 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "PKR 2,25,999",
    originalPrice: "PKR 2,55,999",
    availability: "IN STOCK",
    sku: "LYNX-HOME-U",
  },
  {
    id: 11,
    category: "Energy Storage",
    title: "Lynx Home C Energy Storage",
    description: "15kWh high-capacity battery for energy independence",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["15kWh Capacity", "High Performance", "15-Year Warranty"],
    specifications: {
      capacity: "15kWh",
      efficiency: "95%",
      warranty: "15 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "PKR 3,15,999",
    originalPrice: "PKR 3,55,999",
    availability: "IN STOCK",
    sku: "LYNX-HOME-C",
  },
  {
    id: 12,
    category: "Energy Storage",
    title: "Lynx Commercial Energy Storage",
    description: "50kWh commercial battery storage system",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["50kWh Capacity", "Commercial Grade", "10-Year Warranty"],
    specifications: {
      capacity: "50kWh",
      efficiency: "95%",
      warranty: "10 Years",
      cycles: "8000+ Cycles",
      protection: "IP54",
    },
    price: "PKR 8,95,999",
    originalPrice: "PKR 9,85,999",
    availability: "IN STOCK",
    sku: "LYNX-COMMERCIAL",
  },
  // Utility Products
  {
    id: 13,
    category: "Utility Products",
    title: "GW1000K-HV Utility Inverter",
    description: "1MW utility-scale inverter for solar farms",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["1MW Power", "99.0% Efficiency", "Grid Compliance"],
    specifications: {
      power: "1MW",
      efficiency: "99.0%",
      warranty: "5 Years",
      monitoring: "SCADA System",
      protection: "IP54",
    },
    price: "PKR 45,00,000",
    originalPrice: "PKR 50,00,000",
    availability: "IN STOCK",
    sku: "GW1000K-HV",
  },
  {
    id: 14,
    category: "Utility Products",
    title: "GW2500K-HV Utility Inverter",
    description: "2.5MW utility-scale inverter for large solar farms",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["2.5MW Power", "99.1% Efficiency", "Advanced Grid Support"],
    specifications: {
      power: "2.5MW",
      efficiency: "99.1%",
      warranty: "5 Years",
      monitoring: "Advanced SCADA",
      protection: "IP54",
    },
    price: "PKR 95,00,000",
    originalPrice: "PKR 1,05,00,000",
    availability: "IN STOCK",
    sku: "GW2500K-HV",
  },
  // Batteries
  {
    id: 15,
    category: "Batteries",
    title: "FHSzoom Lithium Battery 5.12kWh",
    description: "High-performance lithium battery module",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["5.12kWh Capacity", "LiFePO4 Technology", "10-Year Warranty"],
    specifications: {
      capacity: "5.12kWh",
      technology: "LiFePO4",
      warranty: "10 Years",
      cycles: "6000+ Cycles",
      protection: "IP65",
    },
    price: "PKR 85,999",
    originalPrice: "PKR 95,999",
    availability: "IN STOCK",
    sku: "GW-BATTERY-5.12",
  },
  {
    id: 16,
    category: "Batteries",
    title: "FHSzoom Lithium Battery 10.24kWh",
    description: "Extended capacity lithium battery module",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["10.24kWh Capacity", "LiFePO4 Technology", "10-Year Warranty"],
    specifications: {
      capacity: "10.24kWh",
      technology: "LiFePO4",
      warranty: "10 Years",
      cycles: "6000+ Cycles",
      protection: "IP65",
    },
    price: "PKR 1,65,999",
    originalPrice: "PKR 1,85,999",
    availability: "IN STOCK",
    sku: "GW-BATTERY-10.24",
  },
]

const categories = [
  "All",
  "Residential Inverters",
  "Commercial Inverters",
  "Energy Storage",
  "Utility Products",
  "Batteries",
]

interface ProductModalProps {
  product: (typeof allProducts)[0] | null
  isOpen: boolean
  onClose: () => void
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <Image
                  src={product.gallery[selectedImage] || product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-2">
                {product.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      selectedImage === index ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.title} ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-3xl font-bold mb-4">{product.title}</h2>

              <div className="mb-4">
                <span className="text-blue-600 font-semibold">• 10 YEARS OFFICIAL WARRANTY</span>
                <br />
                <span className="text-blue-600 font-semibold">• FREE INSTALLATION</span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  The {product.title} features advanced technology for optimal performance and reliability. Designed for
                  both residential and commercial applications, it offers superior efficiency and long-term durability
                  with comprehensive monitoring capabilities.
                </p>
              </div>

              <div className="mb-4">
                <span className="text-sm text-gray-600">AVAILABILITY: </span>
                <span className="text-green-600 font-semibold">{product.availability}</span>
              </div>

              <div className="mb-4">
                <span className="text-sm text-gray-600">SKU: </span>
                <span className="font-semibold">{product.sku}</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 line-through text-lg">{product.originalPrice}</span>
                  <span className="text-3xl font-bold text-red-600">{product.price}</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{key}:</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof allProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const openModal = (product: (typeof allProducts)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              High-quality solar inverters and energy storage solutions designed for reliability and efficiency
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openModal(product)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={300}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      -15%
                    </div>
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>
                    <ul className="space-y-1 mb-4">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                        <span className="text-lg font-bold text-red-600 ml-2">{product.price}</span>
                      </div>
                      <button className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-colors text-sm">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-xl">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
