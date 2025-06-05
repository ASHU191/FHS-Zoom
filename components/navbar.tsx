"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Globe, ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import MegaMenu from "./mega-menu"

const navItems = [
  {
    title: "About FHS Zoom",
    href: "/about",
    hasMegaMenu: true,
  },
  {
    title: "Solutions & Products",
    href: "/solutions",
    hasMegaMenu: true,
  },
  {
    title: "EcoSmart Home",
    href: "/ecosmart-home",
    hasMegaMenu: true,
  },
  {
    title: "Support & Service",
    href: "/support",
    hasMegaMenu: true,
  },
  {
    title: "Community",
    href: "/community",
    hasMegaMenu: true,
  },
]

export default function Navbar() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (title: string) => {
    if (window.innerWidth >= 1024) {
      setActiveMegaMenu(title)
    }
  }

  const handleMouseLeave = () => {
    setActiveMegaMenu(null)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png?height=40&width=120"
                alt="FHS Zoom Logo"
                width={120}
                height={40}
                className="h-8 lg:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <div key={item.title} className="relative" onMouseEnter={() => handleMouseEnter(item.title)}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-gray-800 hover:text-red-600 py-7 transition-colors font-medium text-sm xl:text-base",
                      activeMegaMenu === item.title && "text-red-600",
                    )}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right side items */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              <button className="text-gray-700 hover:text-red-600 p-2">
                <Search className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
              <div className="hidden sm:flex items-center cursor-pointer">
                <Globe className="h-4 w-4 lg:h-5 lg:w-5 text-gray-700" />
                <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4 text-gray-700 ml-1" />
              </div>
              <Link
                href="/contact"
                className="hidden md:flex items-center bg-red-500 hover:bg-red-600 text-white px-4 lg:px-6 py-2 rounded-full transition-colors text-sm lg:text-base"
              >
                <span className="mr-1">📞</span>
                <span>Contact</span>
              </Link>

              {/* Mobile menu button */}
              <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-gray-700 hover:text-red-600">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t bg-white">
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block mx-4 mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Mega Menu */}
      {activeMegaMenu && window.innerWidth >= 1024 && (
        <MegaMenu
          activeMenu={activeMegaMenu}
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  )
}
