import Link from "next/link"
import { Download, FileText, Users, HelpCircle, Phone, Mail } from "lucide-react"

const supportServices = [
  {
    icon: Download,
    title: "Download Center",
    description: "Access manuals, software, and documentation",
    href: "/support/downloads",
  },
  {
    icon: FileText,
    title: "Warranty",
    description: "Product warranty information and registration",
    href: "/support/warranty",
  },
  {
    icon: Users,
    title: "Service Network",
    description: "Find authorized service partners near you",
    href: "/support/service-network",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Frequently asked questions and answers",
    href: "/support/faq",
  },
]

export default function SupportPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Support & Service</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive support services to ensure optimal performance of your solar energy system
          </p>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link key={index} href={service.href} className="group">
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                    <IconComponent className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
            <p className="text-gray-600 mb-8">
              Our support team is here to help you with any questions or issues you may have.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Phone className="h-8 w-8 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Monday - Friday, 9AM - 6PM</p>
                <a href="tel:+1-800-FHSzoom" className="text-red-600 font-semibold">
                  +1-800-FHSzoom
                </a>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Mail className="h-8 w-8 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Get response within 24 hours</p>
                <a href="mailto:support@FHSzoom.com" className="text-red-600 font-semibold">
                  support@FHSzoom.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
