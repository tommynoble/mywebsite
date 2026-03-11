"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll } from "framer-motion"

interface JourneyItem {
  company: string
  role: string
  startDate: string
  endDate: string
  achievements: string[]
  current?: boolean
}

const journeyData: JourneyItem[] = [
  {
    company: "Indian Health Service",
    role: "Web Designer",
    startDate: "September 2023",
    endDate: "Present",
    current: true,
    achievements: [
      "Manage website performance within Mura CMS, optimizing assets and monitoring loading times to improve user engagement.",
      "Collaborate seamlessly with cross-functional teams, including developers and content creators, to implement CMS-driven website enhancements.",
      "Ensure 508 compliant development for accessibility standards."
    ]
  },
  {
    company: "Nurse.org",
    role: "Web Designer",
    startDate: "February 2023",
    endDate: "Present",
    current: true,
    achievements: [
      "Design and develop responsive and mobile-friendly web sites and pages using modern HTML, CSS.",
      "Collaborate in concept development and design ideation to help define a creative strategy.",
      "Assist with configuring and conducting online surveys, designing, and implementing new UI features.",
      "Debug and troubleshoot front-end issues and work with the team to provide appropriate solutions."
    ]
  },
  {
    company: "Hisense USA",
    role: "IT Support Team Lead",
    startDate: "May 2021",
    endDate: "February 2023",
    achievements: [
      "Maintained help desk tracking system, providing diagnostics and resolving customer-reported incidents.",
      "Planned and analyzed work processes, researching and reporting trends and patterns of problems.",
      "Ensured rigorous application of information security policies, principles, and safe practices."
    ]
  },
  {
    company: "Samsung Electronics",
    role: "IT Support Technician",
    startDate: "February 2017",
    endDate: "February 2019",
    achievements: [
      "Troubleshoot problems with computer systems, including hardware and software.",
      "Handled network and peripheral equipment problems and made repairs when needed.",
      "Provided quality customer service while demonstrating the ability to effectively resolve advanced technical inquiries."
    ]
  }
]

function TimelineLine({ isLast }: { isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  // Prevent line from extending past the final dot
  if (isLast) return null

  return (
    <div 
      ref={ref}
      // Line begins at the bottom of the dot and ends at the top of the NEXT item's dot
      // Width is set to w-px instead of w-[2px] to keep it thin
      className="absolute left-[3.5px] md:left-[0.5px] top-[26px] bottom-[-78px] lg:bottom-[-110px] w-px bg-gray-200 z-0"
    >
      <motion.div 
        className="w-full h-full bg-gradient-to-b from-teal-400 to-purple-500 origin-top"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  )
}

export function JourneySection() {
  return (
    <section id="journey" className="min-h-screen py-24 px-6 md:px-12 xl:px-32 bg-gradient-connect-light">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-xl md:text-xl lg:text-2xl text-gray-700 mb-2">
            My <span className="font-semibold">Journey</span>
          </h1>
        </div>

        {/* Impact Statement */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-700 max-w-4xl">
            In 2023 I fell in love with <span className="text-gradient-purple">design</span> and <span className="text-gradient-teal">never went back.</span>
          </h2>
          <p className="mt-8 text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
            From resolving complex IT issues to architecting seamless digital experiences, my background gives me a unique, holistic perspective on how technology impacts real people.
          </p>
        </div>

        {/* Minimalist Timeline */}
        <div className="relative space-y-16 lg:space-y-24 pl-4 md:pl-0">

          {journeyData.map((item, index) => (
            <div 
              key={`${item.company}-${item.startDate}`}
              className="relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 animate-fade-in group"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              
              <TimelineLine isLast={index === journeyData.length - 1} />

              {/* Timeline Dot */}
              <div className="absolute left-[-2px] md:-left-[5px] top-[14px] w-3 h-3 bg-white border-2 border-gray-300 rounded-full group-hover:border-teal-400 transition-all duration-300 shadow-sm z-10">
                {/* Inner animating dot when scrolled past (optional enhancement) */}
                <motion.div 
                  className="w-full h-full rounded-full bg-teal-400 scale-0 group-hover:scale-100 transition-transform duration-300"
                />
              </div>

              {/* Left Column: Dates & Company */}
              <div className="flex flex-col items-start pl-6 md:pl-8">
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="text-xs tracking-wider bg-white/50 border-gray-300">
                    {item.startDate}
                  </Badge>
                  <span className="text-gray-400">—</span>
                  <Badge 
                    variant={item.current ? "default" : "outline"} 
                    className={`text-xs tracking-wider ${item.current ? 'bg-gradient-to-r from-teal-500 to-purple-500 text-white border-0 shadow-sm' : 'bg-white/50 border-gray-300'}`}
                  >
                     {item.endDate}
                  </Badge>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-1 group-hover:text-teal-600 transition-colors duration-300">
                  {item.company}
                </h3>
              </div>

              {/* Right Column: Role & Achievements */}
              <div className="pl-6 md:pl-0">
                <h4 className="text-xl font-medium text-gradient-teal mb-4">
                  {item.role}
                </h4>
                <ul className="space-y-3">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="text-lg text-gray-600 font-light leading-relaxed flex items-start"
                    >
                      <span className="text-gray-400 mr-3 mt-1.5 opacity-50">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Education Section (Bonus) */}
        <div className="mt-32 pt-20 border-t border-gray-200/60 animate-fade-in" style={{ animationDelay: '0.8s' }}>
           <h3 className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-8">Education</h3>
           <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12">
             <div className="pl-6 border-l-2 border-gray-200">
                <h4 className="text-xl font-light text-gray-800">Northern Virginia Community College</h4>
                <p className="text-gray-500 mt-2">Sep 2014 — Sep 2017</p>
             </div>
             <div className="pl-6 md:pl-0">
                <p className="text-xl text-gray-600 font-light">Associate's degree, Information Technology / Digital Media</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  )
}