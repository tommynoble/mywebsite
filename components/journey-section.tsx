"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface JourneyItem {
  company: string
  role: string
  startDate: string
  endDate: string
  logo: string
  achievements: string[]
  current?: boolean
}

const journeyData: JourneyItem[] = [
  {
    company: "InnovateAI Solutions",
    role: "Senior AI/UX Designer & Prompt Engineering Lead",
    startDate: "2023",
    endDate: "Present",
    logo: "🚀",
    current: true,
    achievements: [
      "Led the design and implementation of AI-powered design systems, reducing design time by 60% while maintaining quality standards.",
      "Pioneered prompt engineering methodologies that improved AI tool accuracy by 45% for design tasks.",
      "Managed a team of 6 designers, implementing AI-first design processes across 15+ product lines.",
      "Developed proprietary prompt libraries that became company-wide standards for AI design automation."
    ]
  },
  {
    company: "TechFlow Dynamics",
    role: "Principal UX Designer",
    startDate: "2021",
    endDate: "2023",
    logo: "⚡",
    achievements: [
      "Redesigned the core product interface, resulting in 35% increase in user engagement and 25% reduction in support tickets.",
      "Established the company's first design system, standardizing components across 8 different products.",
      "Led user research initiatives that informed product strategy for 2M+ users.",
      "Mentored junior designers and established UX best practices that reduced design debt by 40%."
    ]
  },
  {
    company: "Digital Craft Studio",
    role: "UX/UI Designer",
    startDate: "2019",
    endDate: "2021",
    logo: "🎨",
    achievements: [
      "Designed and launched 20+ mobile and web applications for clients ranging from startups to Fortune 500 companies.",
      "Specialized in creating accessible design solutions, achieving WCAG 2.1 AA compliance across all projects.",
      "Collaborated with development teams to ensure pixel-perfect implementation and optimal user experiences.",
      "Conducted comprehensive user testing sessions that improved conversion rates by an average of 30%."
    ]
  },
  {
    company: "StartupHub Incubator",
    role: "Product Designer",
    startDate: "2017",
    endDate: "2019",
    logo: "💡",
    achievements: [
      "Worked with 15+ early-stage startups to establish their design foundations and product strategies.",
      "Created rapid prototyping processes that reduced concept-to-testing time from weeks to days.",
      "Facilitated design thinking workshops for entrepreneurs, helping them validate ideas through user-centered design.",
      "Built a network of design resources and processes that became the incubator's standard toolkit."
    ]
  },
  {
    company: "Creative Agency Plus",
    role: "Visual Designer",
    startDate: "2016",
    endDate: "2017",
    logo: "🏢",
    achievements: [
      "Designed brand identities and marketing materials for 50+ clients across various industries.",
      "Developed proficiency in user interface design while transitioning from traditional graphic design.",
      "Collaborated with marketing teams to create cohesive brand experiences across digital and print media.",
      "Won 3 design awards for innovative branding solutions and established foundation in design principles."
    ]
  }
]

export function JourneySection() {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-white/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From visual design to AI-enhanced UX, here's how I've evolved to become a specialist in 
            Prompt Engineering and intelligent design solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div 
                key={`${item.company}-${item.startDate}`}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-10 w-4 h-4 bg-white border-4 border-teal-500 rounded-full shadow-lg"></div>

                {/* Content Card */}
                <div className="ml-20 md:ml-28">
                  <Card className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{item.logo}</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                              {item.company}
                            </h3>
                            <p className="text-lg text-gray-600 mb-2">
                              {item.role}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 flex-shrink-0">
                          <Badge variant="date" className="px-3 py-1">
                            {item.startDate}
                          </Badge>
                          <span className="text-gray-400">—</span>
                          <Badge 
                            variant={item.current ? "currently" : "date"} 
                            className="px-3 py-1"
                          >
                            {item.endDate}
                          </Badge>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-4">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex}
                            className="flex items-start gap-3 text-gray-700 leading-relaxed"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p>{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to start the next chapter? Let's create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  )
}