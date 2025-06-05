import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">About FHS Zoom</h1>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8">
              Leading the future of renewable energy with innovative solar solutions
            </p>
            <div className="w-16 lg:w-20 h-1 bg-white"></div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Company Profile</h2>
              <p className="text-gray-600 mb-4 text-sm lg:text-base">
                FHS Zoom is a leading manufacturer of solar inverters and energy storage solutions. Founded in 2010, we
                have been committed to providing reliable, efficient, and cost-effective renewable energy solutions
                worldwide.
              </p>
              <p className="text-gray-600 mb-6 text-sm lg:text-base">
                With over a decade of experience, we have installed more than 2 million inverters globally, contributing
                to a cleaner and more sustainable future.
              </p>
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-red-600">2M+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Inverters Installed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-red-600">100+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-red-600">13</div>
                  <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="FHS Zoom Company"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Our Milestones</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 lg:space-y-8">
              {[
                { year: "2010", title: "Company Founded", desc: "FHS Zoom was established in Suzhou, China" },
                { year: "2012", title: "First Product Launch", desc: "Launched our first residential solar inverter" },
                { year: "2015", title: "Global Expansion", desc: "Expanded operations to Europe and Australia" },
                { year: "2018", title: "Energy Storage", desc: "Introduced energy storage solutions" },
                { year: "2020", title: "Smart Energy", desc: "Launched EcoSmart Home platform" },
                { year: "2023", title: "2M Milestone", desc: "Reached 2 million inverters installed globally" },
              ].map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 lg:mr-6 text-sm lg:text-base">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm lg:text-base">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
