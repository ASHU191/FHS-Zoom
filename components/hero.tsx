import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Modern house with solar panels by a lake surrounded by green trees"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            World Environment Day.
            <br />
            Every Day!
          </h1>
          <div className="w-20 h-1 bg-red-500 mb-8"></div>
          <p className="text-3xl mb-12 font-light">Journey to Zero-Carbon Living</p>
          <div className="flex space-x-4">
            <Link
              href="/solutions"
              className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full transition-colors text-lg font-semibold"
            >
              Discover Solutions
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full transition-colors text-lg font-semibold"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {[...Array(7)].map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === 0 ? "bg-red-500" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
