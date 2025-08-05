"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/api/placeholder/400/500"
                alt="Thomas Boye Asante working outdoors with laptop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-teal rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-purple rounded-full opacity-20 -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Greeting */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Hello there <span className="inline-block animate-bounce">👋</span>
              </h2>
            </div>

            {/* Professional Bio */}
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a digital product designer based in <span className="font-semibold text-gray-800">Herndon, Virginia</span>, 
                with 8+ years of experience in UI/UX design and Prompt Engineering. Starting as a 
                visual designer, my journey through AI and design has shaped a holistic approach to 
                creating intelligent user experiences.
              </p>

              <p>
                I specialize in bridging the gap between human-centered design and AI capabilities, 
                crafting prompts that unlock the full potential of AI tools while maintaining 
                exceptional user experiences. My work focuses on creating design systems that 
                scale with AI automation while preserving the human touch.
              </p>

              <p>
                Outside work, I enjoy hiking the Blue Ridge Mountains, experimenting with the 
                latest AI design tools, and mentoring aspiring designers in the art of prompt 
                engineering. I'm passionate about the intersection of technology and creativity, 
                always exploring how AI can enhance rather than replace human creativity.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-teal">8+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-purple">50+</div>
                <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-teal">15+</div>
                <div className="text-sm text-gray-600 mt-1">AI Tools Mastered</div>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
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
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/80 text-gray-700 text-sm rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}