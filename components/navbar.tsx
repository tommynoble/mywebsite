"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Briefcase, FileText, Mail, Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "home", href: "/", icon: Home },
  { name: "about", href: "/about", icon: User },
  { name: "journey", href: "/journey", icon: Briefcase },
  { name: "work", href: "/work", icon: Briefcase },
  { name: "connect", href: "/contact", icon: Mail },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="flex justify-center pt-[39px] px-4">
        <div 
          className={cn(
            "relative flex items-center justify-between h-16 md:h-20 px-8 rounded-full transition-all duration-300 max-w-5xl w-full border border-white/30",
            isScrolled
              ? "bg-white/40 backdrop-blur-md"
              : "bg-white/60 backdrop-blur-md"
          )}
          style={{
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.2), 0 0 150px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              onClick={() => handleNavClick("/")}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  T
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-gray-800 text-lg">Thomas Boye</div>
                <div className="text-xs text-gray-600 -mt-1">UI/UX Designer</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    "nav-link text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 px-4 py-2 rounded-lg transition-all duration-300 font-outfit text-base font-normal",
                    isActive && "bg-gray-200/70 text-gray-900"
                  )}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </Button>
              )
            })}
          </div>

          {/* Desktop Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 md:hidden">
            <div className="mobile-menu px-4 pt-4 pb-6 space-y-1 bg-white/95 backdrop-blur-md shadow-lg rounded-3xl border border-gray-200">
              {navigation.map((item) => {
                const IconComponent = item.icon
                const isActive = pathname === item.href
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-gray-700 hover:bg-gray-100/50 font-outfit text-base font-normal",
                      isActive && "bg-gray-200/70 text-gray-900"
                    )}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <IconComponent size={18} className="mr-2" />
                    {item.name}
                  </Button>
                )
              })}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200 mt-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-gray-600 hover:text-teal-600 transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}