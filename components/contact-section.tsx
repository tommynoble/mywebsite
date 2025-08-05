"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, MessageSquare, Zap, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success("Message sent successfully! I'll get back to you within 24 hours.")
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const consultationTypes = [
    {
      title: "AI Strategy Session",
      duration: "45 min",
      price: "Free",
      description: "Discover how AI can enhance your design process",
      features: ["AI readiness assessment", "Tool recommendations", "Strategy roadmap", "Q&A session"],
      popular: false
    },
    {
      title: "Prompt Engineering Workshop",
      duration: "2 hours",
      price: "$500",
      description: "Hands-on training for your team in prompt engineering",
      features: ["Custom prompt development", "Tool training", "Best practices", "Resource library"],
      popular: true
    },
    {
      title: "Design System Audit",
      duration: "1.5 hours",
      price: "$750",
      description: "Comprehensive review of your design system's AI potential",
      features: ["System analysis", "AI integration plan", "Component recommendations", "Implementation roadmap"],
      popular: false
    }
  ]

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your design process with AI? Let's discuss your project and explore 
            how we can achieve your goals together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <MessageSquare className="text-teal-600" size={28} />
                  Start Your Project
                </CardTitle>
                <p className="text-gray-600">
                  Tell me about your project and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 border border-input rounded-md bg-transparent text-sm"
                      >
                        <option value="">Select project type</option>
                        <option value="ai-prompt-engineering">AI Prompt Engineering</option>
                        <option value="ux-design">UX Design</option>
                        <option value="design-system">Design System</option>
                        <option value="team-training">Team Training</option>
                        <option value="consulting">Strategy Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 border border-input rounded-md bg-transparent text-sm"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-30k">$15,000 - $30,000</option>
                        <option value="30k-plus">$30,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 border border-input rounded-md bg-transparent text-sm"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Mail size={20} className="ml-2" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Consultations */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Contact Info */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Mail size={20} className="text-teal-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">thomas@thomasboye.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Phone size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Location</div>
                    <div className="text-gray-600">Herndon, Virginia</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Clock size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Response Time</div>
                    <div className="text-gray-600">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consultation Options */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <Calendar className="text-teal-600" size={24} />
                  Book a Consultation
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  Schedule a focused session to discuss your specific needs.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {consultationTypes.map((consultation, index) => (
                  <div 
                    key={consultation.title}
                    className="border rounded-lg p-4 hover:border-teal-300 transition-colors cursor-pointer relative"
                  >
                    {consultation.popular && (
                      <Badge variant="currently" className="absolute -top-2 -right-2 px-2 py-0.5 text-xs">
                        Popular
                      </Badge>
                    )}
                    
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{consultation.title}</h4>
                      <div className="text-right">
                        <div className="font-bold text-teal-600">{consultation.price}</div>
                        <div className="text-xs text-gray-500">{consultation.duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{consultation.description}</p>
                    
                    <div className="space-y-1">
                      {consultation.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle size={12} className="text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-4">
                  <Calendar size={16} className="mr-2" />
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}