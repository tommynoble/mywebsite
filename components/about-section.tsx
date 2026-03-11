"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-12 xl:px-32 py-20 bg-gradient-connect-light">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-xl md:text-xl lg:text-2xl text-gray-700 mb-2">
            About <span className="font-semibold">Me</span>
          </h1>
        </div>

        {/* Impact Statement */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-700 max-w-4xl">
            A digital product designer focused on <span className="text-gradient-teal">human-centered</span> experiences and <span className="text-gradient-purple">AI integration.</span>
          </h2>
        </div>

        {/* Bio Section with Image */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto md:mx-0 w-full group">
            <Image
              src="/profile.png"
              alt="Thomas Boye Asante"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
          
          {/* Detailed Bio */}
          <div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed">
            <p>
              I'm a designer based in Herndon, Virginia, with 8+ years of experience in UI/UX and Prompt Engineering. Starting out as a visual designer, my journey into AI has shaped a holistic approach to creating intelligent products.
            </p>
            <p>
              I specialize in bridging the gap between human needs and AI capabilities, crafting systems that unlock new possibilities while maintaining exceptional usability and trust.
            </p>
            <p>
              Outside of work, you can usually find me hiking the Blue Ridge Mountains, experimenting with the latest tools, or mentoring aspiring designers in the art of prompt engineering.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div>
            <div className="text-4xl font-light text-gradient-teal">8+</div>
            <div className="text-sm text-gray-500 tracking-wide mt-2 uppercase font-medium">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-light text-gradient-purple">50+</div>
            <div className="text-sm text-gray-500 tracking-wide mt-2 uppercase font-medium">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-light text-gradient-teal">15+</div>
            <div className="text-sm text-gray-500 tracking-wide mt-2 uppercase font-medium">AI Tools Mastered</div>
          </div>
        </div>

        {/* Core Expertise */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-sm text-gray-500 tracking-wide mb-4 uppercase font-medium">Core Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'UI/UX Design',
              'Prompt Engineering',
              'AI Design Systems',
              'User Research',
              'Prototyping',
              'Design Strategy',
              'AI Automation',
              'Design Thinking'
            ].map((skill) => (
              <Badge key={skill} variant="outline" className="px-4 py-2 text-sm font-normal text-gray-600 border-gray-300 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-gray-400 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}