import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    title: "FHSzoom Launches New Residential Energy Storage System",
    date: "December 15, 2023",
    excerpt: "Revolutionary new battery technology offers 95% efficiency and 15-year warranty",
    image: "/placeholder.svg?height=200&width=300",
    href: "/community/news/new-storage-system",
  },
  {
    title: "Partnership with Leading Solar Installer Network",
    date: "December 10, 2023",
    excerpt: "Expanding our reach to serve more customers across North America",
    image: "/placeholder.svg?height=200&width=300",
    href: "/community/news/partnership-announcement",
  },
  {
    title: "FHSzoom Wins Innovation Award at Solar Power International",
    date: "December 5, 2023",
    excerpt: "Recognition for our breakthrough inverter technology and smart energy solutions",
    image: "/placeholder.svg?height=200&width=300",
    href: "/community/news/innovation-award",
  },
]

const caseStudies = [
  {
    title: "Residential Solar Installation - California",
    location: "Los Angeles, CA",
    system: "10kW Solar + 15kWh Storage",
    savings: "85% Energy Bill Reduction",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Commercial Solar Project - Texas",
    location: "Austin, TX",
    system: "500kW Commercial System",
    savings: "$50,000 Annual Savings",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Utility Scale Project - Nevada",
    location: "Las Vegas, NV",
    system: "50MW Solar Farm",
    savings: "Clean Energy for 15,000 Homes",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function CommunityPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Community</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our global community of solar energy enthusiasts, installers, and partners
          </p>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-600">{item.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold">{study.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">System:</span>
                      <span className="font-semibold">{study.system}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Result:</span>
                      <span className="font-semibold text-green-600">{study.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Program */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Partner Network</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Become a certified FHSzoom partner and grow your solar business with our support
          </p>
          <Link
            href="/community/partners"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors text-lg"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </div>
  )
}
