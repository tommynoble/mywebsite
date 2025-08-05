"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Wand2, Users, Zap, Palette, BarChart3 } from "lucide-react"
import Link from "next/link"

interface Service {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
  features: string[]
  price: string
}

const services: Service[] = [
  {
    icon: Brain,
    title: "AI Prompt Engineering",
    description: "Custom prompt strategies that unlock the full potential of AI design tools and streamline your creative workflow.",
    features: [
      "Custom prompt libraries for design tasks",
      "AI tool optimization and training",
      "Workflow automation setup",
      "Performance analytics and refinement"
    ],
    price: "Starting at $2,500"
  },
  {
    icon: Wand2,
    title: "AI-Enhanced UX Design",
    description: "Complete UX design solutions powered by AI insights, from research to final implementation.",
    features: [
      "AI-assisted user research and analysis",
      "Intelligent design system creation",
      "Automated accessibility compliance",
      "Real-time design optimization"
    ],
    price: "Starting at $5,000"
  },
  {
    icon: Palette,
    title: "Design System Architecture",
    description: "Scalable design systems that integrate seamlessly with AI tools and development workflows.",
    features: [
      "Component library development",
      "AI-ready design tokens",
      "Cross-platform consistency",
      "Developer handoff automation"
    ],
    price: "Starting at $7,500"
  },
  {
    icon: Users,
    title: "Team AI Training",
    description: "Comprehensive training programs to upskill your design team in AI tools and prompt engineering.",
    features: [
      "Hands-on AI tool workshops",
      "Prompt engineering certification",
      "Custom workflow development",
      "Ongoing support and mentorship"
    ],
    price: "Starting at $3,500"
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Lightning-fast prototyping using AI-powered design tools for quick validation and iteration.",
    features: [
      "AI-accelerated wireframing",
      "Interactive prototype creation",
      "User testing integration",
      "Stakeholder collaboration tools"
    ],
    price: "Starting at $1,500"
  },
  {
    icon: BarChart3,
    title: "UX Strategy & Consulting",
    description: "Strategic guidance on integrating AI into your design process and product development lifecycle.",
    features: [
      "AI readiness assessment",
      "Strategic roadmap development",
      "Tool selection and evaluation",
      "ROI measurement and optimization"
    ],
    price: "Starting at $4,000"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            AI-Enhanced Design Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between traditional design excellence and cutting-edge AI capabilities. 
            Let's transform your design process with intelligent automation and strategic innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={service.title}
                className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg text-white">
                      <IconComponent size={24} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="font-semibold text-gray-800">{service.price}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-400 hover:text-white hover:border-transparent"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Overview */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              My Design Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that combines human-centered design principles with AI-powered efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Discovery & Strategy", 
                description: "Understanding your goals, users, and AI readiness" 
              },
              { 
                step: "02", 
                title: "AI Integration Planning", 
                description: "Identifying opportunities for AI enhancement and tool selection" 
              },
              { 
                step: "03", 
                title: "Design & Iteration", 
                description: "Creating solutions with AI-accelerated design and testing" 
              },
              { 
                step: "04", 
                title: "Implementation & Training", 
                description: "Delivering results with team training and ongoing support" 
              }
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to revolutionize your design process?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can enhance your team's capabilities and accelerate your product development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}