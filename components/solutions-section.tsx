import Image from "next/image"
import Link from "next/link"

const solutions = [
  {
    title: "Residential Solutions",
    description: "Complete solar energy systems designed for homes, bringing clean energy to every household.",
    icon: "🏠",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Grid-tied Inverters", "Energy Storage", "Smart Monitoring", "Easy Installation"],
    href: "/solutions/residential",
  },
  {
    title: "Commercial & Industrial",
    description: "Scalable solar solutions for businesses to reduce energy costs and carbon footprint.",
    icon: "🏭",
    image: "/placeholder.svg?height=200&width=300",
    features: ["High Power Systems", "Energy Management", "Cost Optimization", "Remote Monitoring"],
    href: "/solutions/commercial",
  },
  {
    title: "Energy Storage",
    description: "Advanced battery storage systems for energy independence and grid stability.",
    icon: "🔋",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Battery Systems", "Hybrid Inverters", "Smart Control", "Long Lifespan"],
    href: "/solutions/storage",
  },
  {
    title: "Utility Scale",
    description: "Large-scale solar power plants and grid-connected renewable energy systems.",
    icon: "⚡",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Utility Inverters", "Grid Integration", "SCADA Systems", "Performance Monitoring"],
    href: "/solutions/utility",
  },
  {
    title: "BIPV Solutions",
    description: "Building-integrated photovoltaics that combine architecture with solar energy generation.",
    icon: "🏢",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Integrated Design", "Aesthetic Appeal", "Dual Functionality", "Custom Solutions"],
    href: "/solutions/bipv",
  },
  {
    title: "EcoSmart Home",
    description: "Intelligent home energy management systems for optimal energy usage and savings.",
    icon: "🏡",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Smart Control", "Energy Optimization", "Mobile App", "Real-time Monitoring"],
    href: "/ecosmart-home",
  },
]

export default function SolutionsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">SOLUTIONS</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive renewable energy solutions tailored for residential, commercial, and utility applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">{solution.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.href}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/solutions"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors text-lg font-semibold"
          >
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
