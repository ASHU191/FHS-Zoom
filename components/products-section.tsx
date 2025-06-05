"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
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
    href: "/products/gw3000-ns",
  },
  {
    id: 2,
    title: "Lynx Home F Energy Storage",
    description: "Advanced lithium battery storage for energy independence",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["5kWh Capacity", "95% Round-trip Efficiency", "15-Year Warranty"],
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
    href: "/products/lynx-home-f",
  },
  {
    id: 3,
    title: "GW25K-MT Commercial Inverter",
    description: "Three-phase inverter for commercial solar installations",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["25kW Power", "98.4% Efficiency", "Remote Monitoring"],
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
    href: "/products/gw25k-mt",
  },
  {
    id: 4,
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
    href: "/products/gw5000-ns",
  },
  {
    id: 5,
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
    href: "/products/lynx-home-u",
  },
  {
    id: 6,
    title: "GW50K-MT Commercial Inverter",
    description: "50kW three-phase inverter for large commercial projects",
    image: "/placeholder.svg?height=250&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    features: ["50kW Power", "98.5% Efficiency", "SCADA Compatible"],
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
    href: "/products/gw50k-mt",
  },
]

interface ProductModalProps {
  product: (typeof featuredProducts)[0] | null
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

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof featuredProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (product: (typeof featuredProducts)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of high-quality solar inverters and energy storage solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
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
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    -15%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                      <span className="text-xl font-bold text-red-600 ml-2">{product.price}</span>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

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
      `}</style>
    </>
  )
}
