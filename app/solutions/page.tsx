import Image from "next/image"
import Link from "next/link"

const solutions = [
  {
    title: "Residential Solutions",
    description: "Complete solar energy systems for homes",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Grid-tied Inverters", "Energy Storage", "Smart Monitoring"],
    href: "/solutions/residential",
  },
  {
    title: "Commercial & Industrial",
    description: "Scalable solutions for businesses",
    image: "/placeholder.svg?height=300&width=400",
    features: ["High Power Inverters", "Energy Management", "Cost Optimization"],
    href: "/solutions/commercial",
  },
  {
    title: "Utility Scale",
    description: "Large-scale solar power plants",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Utility Inverters", "Grid Integration", "Remote Monitoring"],
    href: "/solutions/utility",
  },
  {
    title: "Energy Storage",
    description: "Advanced battery storage systems",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Battery Systems", "Hybrid Inverters", "Energy Management"],
    href: "/solutions/storage",
  },
]

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Solar Energy Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive renewable energy solutions for residential, commercial, and utility applications
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
