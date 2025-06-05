"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface MegaMenuProps {
  activeMenu: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const solutionsData = [
  {
    title: "Residential Solutions",
    description: "Bringing solar energy into every home",
    icon: "🏠",
    href: "/solutions/residential",
  },
  {
    title: "Energy Storage Solutions",
    description: "Power whenever you need",
    icon: "🔋",
    href: "/solutions/energy-storage",
  },
  {
    title: "Commercial and Industrial Solutions",
    description: "Boost your power & profit",
    icon: "🏭",
    href: "/solutions/commercial-industrial",
  },
  {
    title: "Utility PV Solutions",
    description: "Reshaping Smart Energy",
    icon: "⚡",
    href: "/solutions/utility-pv",
  },
  {
    title: "BIPV Solution",
    description: "Solarise Every Building",
    icon: "🏢",
    href: "/solutions/bipv",
  },
]

const productsData = [
  {
    title: "Residential Grid-tied Inverters",
    image: "/placeholder.svg?height=120&width=120",
    href: "/products/residential-inverters",
  },
  {
    title: "C&I Grid-tied Inverters",
    image: "/placeholder.svg?height=120&width=120",
    href: "/products/ci-inverters",
  },
  {
    title: "Utility Products",
    image: "/placeholder.svg?height=120&width=120",
    href: "/products/utility",
  },
  {
    title: "Residential Energy Storage Products",
    image: "/placeholder.svg?height=120&width=120",
    href: "/products/residential-storage",
  },
  {
    title: "C&I Energy Storage Products",
    image: "/placeholder.svg?height=120&width=120",
    href: "/products/ci-storage",
  },
  {
    title: "Batteries",
    image: "/placeholder.svg?height=120&width=120",
    href: "/products/batteries",
  },
]

const aboutData = [
  {
    title: "Company Profile",
    description: "Learn about our mission and vision",
    href: "/about/company",
  },
  {
    title: "Milestones",
    description: "Our journey and achievements",
    href: "/about/milestones",
  },
  {
    title: "Global Presence",
    description: "Worldwide operations and offices",
    href: "/about/global",
  },
  {
    title: "Quality & Certificates",
    description: "Our commitment to quality",
    href: "/about/quality",
  },
  {
    title: "CSR",
    description: "Corporate social responsibility",
    href: "/about/csr",
  },
]

const ecosmartData = [
  {
    title: "Smart Energy Management",
    description: "Intelligent home energy solutions",
    href: "/ecosmart/management",
  },
  {
    title: "Home Automation",
    description: "Connected smart home devices",
    href: "/ecosmart/automation",
  },
  {
    title: "Energy Monitoring",
    description: "Real-time energy tracking",
    href: "/ecosmart/monitoring",
  },
]

const supportData = [
  {
    title: "Download Center",
    description: "Manuals, software and documentation",
    href: "/support/downloads",
  },
  {
    title: "Warranty",
    description: "Product warranty information",
    href: "/support/warranty",
  },
  {
    title: "Service Network",
    description: "Find local service partners",
    href: "/support/service-network",
  },
  {
    title: "Training",
    description: "Professional training programs",
    href: "/support/training",
  },
]

const communityData = [
  {
    title: "News & Events",
    description: "Latest company news and events",
    href: "/community/news",
  },
  {
    title: "Case Studies",
    description: "Real-world project examples",
    href: "/community/case-studies",
  },
  {
    title: "Partner Program",
    description: "Join our partner network",
    href: "/community/partners",
  },
]

export default function MegaMenu({ activeMenu, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const renderSolutionsAndProducts = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Solutions Column */}
      <div className="lg:border-r lg:pr-8">
        <div className="flex items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Solutions</h3>
          <ArrowRight className="h-4 w-4 ml-2 text-gray-600" />
        </div>
        <div className="space-y-4">
          {solutionsData.map((solution) => (
            <Link key={solution.title} href={solution.href} className="flex items-start group block">
              <div className="w-10 h-10 lg:w-12 lg:h-12 mr-3 lg:mr-4 flex-shrink-0 bg-red-50 rounded-full flex items-center justify-center">
                <span className="text-lg lg:text-2xl">{solution.icon}</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm lg:text-base">
                  {solution.title}
                </h4>
                <p className="text-xs lg:text-sm text-gray-500">{solution.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Column */}
      <div>
        <div className="flex items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Products</h3>
          <ArrowRight className="h-4 w-4 ml-2 text-gray-600" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {productsData.map((product) => (
            <Link key={product.title} href={product.href} className="group text-center">
              <div className="aspect-square bg-gray-50 rounded-lg mb-2 lg:mb-3 overflow-hidden border">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xs lg:text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                {product.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

  const renderGenericMenu = (data: any[], title: string) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      <div>
        <div className="flex items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <ArrowRight className="h-4 w-4 ml-2 text-gray-600" />
        </div>
        <div className="space-y-4">
          {data.map((item) => (
            <Link key={item.title} href={item.href} className="block group">
              <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm lg:text-base">
                {item.title}
              </h4>
              <p className="text-xs lg:text-sm text-gray-500">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 bg-gray-50 rounded-lg p-4 lg:p-6">
        <div className="text-center text-gray-400">
          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-200 rounded-lg mx-auto mb-4"></div>
          <p className="text-sm lg:text-base">Featured Content</p>
        </div>
      </div>
    </div>
  )

  const getMenuContent = () => {
    switch (activeMenu) {
      case "Solutions & Products":
        return renderSolutionsAndProducts()
      case "About FHS Zoom":
        return renderGenericMenu(aboutData, "About FHS Zoom")
      case "EcoSmart Home":
        return renderGenericMenu(ecosmartData, "EcoSmart Home")
      case "Support & Service":
        return renderGenericMenu(supportData, "Support & Service")
      case "Community":
        return renderGenericMenu(communityData, "Community")
      default:
        return null
    }
  }

  return (
    <div
      className="fixed top-16 lg:top-20 left-0 right-0 bg-white shadow-xl border-t z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 py-6 lg:py-8">{getMenuContent()}</div>
    </div>
  )
}
