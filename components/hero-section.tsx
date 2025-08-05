"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import Link from "next/link"

const companies = [
  { name: "Health.com", icon: "🏢" },
  { name: "VEC", icon: "🏢" },
  { name: "Samsung", icon: "🏢" },
]

export function HeroSection() {

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 xl:px-32 py-20 pt-32 bg-gradient-connect-light">
      <div className="max-w-5xl mx-auto w-full mt-4">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-xl md:text-xl lg:text-2xl text-gray-700 mb-2">
            Hello, I'm <span className="font-semibold">Thomas</span>
          </h1>
        </div>

        {/* Main Title */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight whitespace-normal">
            <div className="block">
              <span className="text-gray-700">A multi-disciplinary </span>
              <span className="text-gradient-teal">UX designer</span>
              <span className="text-gray-700"> with a strong foundation in</span>
            </div>
            <div className="block">
              <span className="text-gradient-purple">visual &amp; motion design.</span>
            </div>
          </div>
        </div>

        {/* Status Tags */}
        <div className="mb-12 space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3">
            <Badge variant="currently" className="px-3 py-1">
              Currently
            </Badge>
            <span className="text-sm text-gray-600">
              UI/UX Designer at Indian Health Service
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="previously" className="px-3 py-1">
              Previously
            </Badge>
            <div className="flex items-center gap-4 flex-wrap">
              {companies.map((company, index) => (
                <div key={company.name} className="flex items-center gap-2">
                  <span className="text-sm">{company.icon}</span>
                  <span className="text-sm text-gray-600">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA and Social Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex gap-4">
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => window.location.href = '/work'}
              className="px-8 py-3"
            >
              Recent Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="px-8 py-3"
            >
              <Link href="/contact">Let's Connect</Link>
            </Button>
          </div>

        </div>


      </div>
    </section>
  )
}