"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CaseStudy {
  id: string
  title: string
  client: string
  category: string
  description: string
  image: string
  tags: string[]
  link: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "snapciet",
    title: "Snapciet",
    client: "Personal Project",
    category: "App Design",
    description: "A receipt scanning application designed to simplify expense tracking and personal finance management.",
    image: "https://images.unsplash.com/photo-1545235617-683111589c3a?q=80&w=1000&auto=format&fit=crop",
    tags: ["Mobile Design", "UX/UI", "Fintech"],
    link: "/work/snapciet"
  },
  {
    id: "yendidi",
    title: "Yendidi",
    client: "Coming Soon",
    category: "Food Tech",
    description: "A food sharing application connecting communities. Full case study coming soon.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["Mobile Design", "UX/UI", "Community"],
    link: "/work/yendidi"
  },
  {
    id: "healthcare-ai-dashboard",
    title: "Healthcare AI Dashboard",
    client: "MedTech Solutions",
    category: "Healthcare Technology",
    description: "Created an intelligent dashboard for healthcare professionals that uses AI to surface critical patient insights.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Healthcare", "Data Visualization"],
    link: "#"
  },
  {
    id: "fintech-ai-mobile",
    title: "FinTech AI Mobile App",
    client: "CryptoFlow",
    category: "Financial Technology",
    description: "Designed a mobile-first cryptocurrency platform with AI-powered market insights and automated trading suggestions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["FinTech", "Mobile Design"],
    link: "#"
  },
  {
    id: "saas-prompt-platform",
    title: "Prompt Engineering Platform",
    client: "PromptCraft AI",
    category: "SaaS Platform",
    description: "Built a comprehensive platform for prompt engineers featuring collaborative tools, version control, and performance analytics.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    tags: ["SaaS", "Prompt Engineering"],
    link: "#"
  },
  {
    id: "education-ai-learning",
    title: "Adaptive Learning Platform",
    client: "EduFuture",
    category: "Education Technology",
    description: "Developed an adaptive learning platform that uses AI to personalize education paths and track student progress.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    tags: ["EdTech", "Adaptive Learning"],
    link: "#"
  }
]

export function CaseStudiesSection() {
  return (
    <section id="work" className="min-h-screen py-24 px-6 md:px-12 xl:px-32 bg-gray-50/50">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header (Aligned with Home/Journey style) */}
        <div className="mb-6 animate-fade-in">
          <h1 className="text-xl md:text-xl lg:text-2xl text-gray-700 mb-2">
            Selected <span className="font-semibold">Work</span>
          </h1>
        </div>

        {/* Impact Statement */}
        <div className="mb-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-700 max-w-4xl">
            Designing intelligent experiences that <span className="text-gradient-teal">empower users</span> and <span className="text-gradient-purple">drive innovation.</span>
          </h2>
        </div>

        {/* Minimalist Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {caseStudies.map((study, index) => (
            <Link 
              href={study.link}
              key={study.id}
              className="group block animate-fade-in cursor-pointer"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gray-100 border border-gray-200/60 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10" />
                
                {/* Floating "View Project" Element */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full px-4 py-2 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 z-20 shadow-sm">
                  View Project <ExternalLink size={14} />
                </div>
              </div>

              {/* Descriptive Content */}
              <div className="pl-2">
                <div className="flex items-center gap-3 w-full mb-3">
                  <Badge variant="outline" className="bg-gradient-to-r from-teal-400 to-purple-400 text-white border-0 shadow-sm font-medium text-[8px] px-1.5 py-[1px] uppercase tracking-[0.1em]">
                    {study.category}
                  </Badge>
                  <span className="text-gray-400">—</span>
                  <span className="text-base font-medium text-gray-700">{study.client}</span>
                </div>
                
                <h3 className="text-2xl font-light text-teal-600 mb-3 transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-gray-500 font-light leading-relaxed max-w-lg mb-4 line-clamp-2">
                  {study.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-gray-400 capitalize bg-gray-100/50 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 pt-20 border-t border-gray-200/60 animate-fade-in text-center" style={{ animationDelay: '0.8s' }}>
           <h3 className="text-3xl font-light text-gray-800 mb-6">
              Let's build something <span className="font-medium text-gradient-teal">amazing</span> together.
           </h3>
           <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg font-light"
            >
              Start a Conversation
              <ExternalLink size={18} />
           </Link>
        </div>

      </div>
    </section>
  )
}