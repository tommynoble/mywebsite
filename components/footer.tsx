"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Download, Dribbble, Heart } from "lucide-react"

export function Footer() {
  const connectLinks = [
    { 
      icon: Mail, 
      href: "mailto:thomas@thomasboye.com", 
      label: "Mail me",
      color: "text-red-400"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/thomasboye", 
      label: "LinkedIn",
      color: "text-blue-400"
    },
    { 
      icon: Download, 
      href: "/resume.pdf", 
      label: "Resume",
      color: "text-green-400"
    },
    { 
      icon: Dribbble, 
      href: "https://dribbble.com/thomasboye", 
      label: "Dribbble",
      color: "text-pink-400"
    },
  ]

  return (
    <footer className="bg-gradient-connect text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight whitespace-normal mb-8">
            Let's connect
          </h2>
        </div>

        {/* Connect cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {connectLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 px-6 py-4 bg-black hover:bg-gray-900 border border-white/20 rounded-2xl transition-all duration-300 group min-w-[160px]"
                aria-label={link.label}
              >
                <IconComponent size={32} className={link.color} strokeWidth={1.5} />
                <span className="text-white font-medium">{link.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Bottom branding */}
        <div className="text-center">

          <div className="flex items-center justify-center gap-1 text-white/70 text-sm mb-4">
            <span>Handmade with</span>
            <Heart size={14} className="text-red-500 fill-current" />
          </div>
          <div className="flex justify-center">
            <Image 
              src="/images/about/sign.png" 
              alt="Thomas Boye Signature" 
              width={150} 
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}