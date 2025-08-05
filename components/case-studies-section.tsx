"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CaseStudy {
  id: string
  title: string
  client: string
  category: string
  description: string
  image: string
  results: {
    metric: string
    value: string
    icon: React.ComponentType<{ size?: number; className?: string }>
  }[]
  tags: string[]
  link: string
  featured?: boolean
}

const caseStudies: CaseStudy[] = [
  {
    id: "ai-design-system",
    title: "AI-Powered Design System",
    client: "TechFlow Dynamics",
    category: "Design System",
    description: "Revolutionized the design workflow by creating an AI-enhanced design system that automatically generates components, maintains consistency, and reduces design time by 60%.",
    image: "/api/placeholder/600/400",
    results: [
      { metric: "Design Time Reduced", value: "60%", icon: Clock },
      { metric: "Components Created", value: "200+", icon: TrendingUp },
      { metric: "Team Adoption", value: "100%", icon: Users }
    ],
    tags: ["Design System", "AI Automation", "Component Library", "Prompt Engineering"],
    link: "#",
    featured: true
  },
  {
    id: "ecommerce-ai-ux",
    title: "E-commerce AI Experience",
    client: "ShopSmart Inc.",
    category: "E-commerce UX",
    description: "Designed an AI-driven shopping experience with intelligent product recommendations, conversational interfaces, and personalized user journeys that increased conversion by 45%.",
    image: "/api/placeholder/600/400",
    results: [
      { metric: "Conversion Rate", value: "+45%", icon: TrendingUp },
      { metric: "User Engagement", value: "+65%", icon: Users },
      { metric: "Load Time", value: "-40%", icon: Clock }
    ],
    tags: ["E-commerce", "AI Recommendations", "Conversational UI", "Personalization"],
    link: "#"
  },
  {
    id: "healthcare-ai-dashboard",
    title: "Healthcare AI Dashboard",
    client: "MedTech Solutions",
    category: "Healthcare Technology",
    description: "Created an intelligent dashboard for healthcare professionals that uses AI to surface critical patient insights, reducing diagnosis time and improving patient outcomes.",
    image: "/api/placeholder/600/400",
    results: [
      { metric: "Diagnosis Speed", value: "+35%", icon: Clock },
      { metric: "Accuracy Rate", value: "98%", icon: TrendingUp },
      { metric: "User Satisfaction", value: "95%", icon: Users }
    ],
    tags: ["Healthcare", "Data Visualization", "AI Insights", "Professional Tools"],
    link: "#"
  },
  {
    id: "fintech-ai-mobile",
    title: "FinTech AI Mobile App",
    client: "CryptoFlow",
    category: "Financial Technology",
    description: "Designed a mobile-first cryptocurrency platform with AI-powered market insights, automated trading suggestions, and intelligent portfolio management.",
    image: "/api/placeholder/600/400",
    results: [
      { metric: "User Retention", value: "+80%", icon: Users },
      { metric: "Trading Volume", value: "+120%", icon: TrendingUp },
      { metric: "App Rating", value: "4.8/5", icon: TrendingUp }
    ],
    tags: ["FinTech", "Mobile Design", "AI Trading", "Data Visualization"],
    link: "#"
  },
  {
    id: "saas-prompt-platform",
    title: "SaaS Prompt Engineering Platform",
    client: "PromptCraft AI",
    category: "SaaS Platform",
    description: "Built a comprehensive platform for prompt engineers featuring collaborative tools, version control, performance analytics, and an extensive prompt library.",
    image: "/api/placeholder/600/400",
    results: [
      { metric: "Prompt Efficiency", value: "+75%", icon: TrendingUp },
      { metric: "Team Collaboration", value: "+90%", icon: Users },
      { metric: "Time to Market", value: "-50%", icon: Clock }
    ],
    tags: ["SaaS", "Prompt Engineering", "Collaboration", "Analytics"],
    link: "#"
  },
  {
    id: "education-ai-learning",
    title: "AI-Enhanced Learning Platform",
    client: "EduFuture",
    category: "Education Technology",
    description: "Developed an adaptive learning platform that uses AI to personalize education paths, track progress, and provide intelligent tutoring for students.",
    image: "/api/placeholder/600/400",
    results: [
      { metric: "Learning Outcomes", value: "+55%", icon: TrendingUp },
      { metric: "Student Engagement", value: "+70%", icon: Users },
      { metric: "Completion Rate", value: "88%", icon: Clock }
    ],
    tags: ["EdTech", "Adaptive Learning", "AI Tutoring", "Student Analytics"],
    link: "#"
  }
]

export function CaseStudiesSection() {
  const featuredStudy = caseStudies.find(study => study.featured)
  const otherStudies = caseStudies.filter(study => !study.featured)

  return (
    <section id="case-studies" className="py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-white/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects, real results. See how AI-enhanced design solutions have transformed 
            businesses across different industries and driven measurable success.
          </p>
        </div>

        {/* Featured Case Study */}
        {featuredStudy && (
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={featuredStudy.image}
                    alt={featuredStudy.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20"></div>
                </div>

                {/* Content */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="currently" className="px-3 py-1">
                      Featured Project
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1">
                      {featuredStudy.category}
                    </Badge>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {featuredStudy.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-2">
                    Client: {featuredStudy.client}
                  </p>

                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {featuredStudy.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {featuredStudy.results.map((result, index) => {
                      const IconComponent = result.icon
                      return (
                        <div key={index} className="text-center">
                          <div className="flex justify-center mb-2">
                            <IconComponent size={24} className="text-teal-600" />
                          </div>
                          <div className="text-2xl font-bold text-gradient-teal mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.metric}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredStudy.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="gradient" className="w-fit" asChild>
                    <Link href={featuredStudy.link}>
                      View Full Case Study
                      <ExternalLink size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Other Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {otherStudies.map((study, index) => {
            return (
              <Card 
                key={study.id}
                className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-800">
                      {study.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    {study.client}
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {study.description}
                  </p>

                  {/* Key Result */}
                  <div className="flex items-center gap-2 mb-4 p-3 bg-gradient-to-r from-teal-50 to-purple-50 rounded-lg">
                    {React.createElement(study.results[0].icon, { size: 16, className: "text-teal-600" })}
                    <span className="text-sm font-semibold text-gray-800">
                      {study.results[0].metric}: {study.results[0].value}
                    </span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={study.link}>
                      View Details
                      <ExternalLink size={14} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to create your success story?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how AI-enhanced design can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/work">View All Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}