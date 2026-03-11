"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

// This would ideally come from a CMS or a separate data file.
// Integrating it here for the dynamic route structure based on the user's plan.
const projectData = {
  "snapciet": {
    category: "APP DESIGN",
    title: "Snapciet",
    role: "UX/UI Design",
    timeline: "2023 - Present",
    heroImage: "/images/snapciet-hero.png",
    link: "https://www.snapciet.com/",
    responsibilities: [
      "Research",
      "UX/UI Design",
      "Prototyping",
      "Usability Testing"
    ],
    context: [
      "Mobile Application",
      "React Native (Frontend)",
      "Supabase (Backend)",
      "AI OCR Integration"
    ],
    overview: "Snapciet was born out of a need to simplify personal finance. The objective was to create an intuitive, fast, and highly accurate receipt scanning application that automatically categorizes expenses and tracks budgets, removing the friction from manual data entry.",
    problem: "People struggle to maintain accurate expense records because manual entry is tedious, and existing generic OCR solutions often miscategorize localized receipt data or require too much manual correction.",
    research: "To understand the target audience's pain points, I conducted interviews with 15 individuals who actively try to budget but consistently fail. The primary finding was that the 'moment of purchase' is the only reliable time data gets entered; if they have to wait until they are home, the receipt is lost or forgotten.",
    design: "Based on the research, the core philosophy became 'Scan & Forget'. I designed a massive, undeniable floating action button as the primary interaction point. The color palette utilizes energetic greens and calm blues to evoke financial growth and stability without feeling corporate.",
    nextProject: { name: "Yendidi", slug: "yendidi" }
  },
  "yendidi": {
    category: "APP DESIGN",
    title: "Yendidi",
    role: "UX/UI Design",
    timeline: "Coming Soon",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    link: "#",
    responsibilities: [
      "User Research",
      "Interaction Design",
      "Design System Creation"
    ],
    context: [
      "Community Platform",
      "Food Sharing",
      "Local Networks"
    ],
    overview: "Yendidi is a conceptual food-sharing application connecting local communities to reduce food waste and combat food insecurity.",
    problem: "Significant amounts of perfectly good food are wasted daily in households and local restaurants, while simultaneously, food insecurity remains a pressing issue in those exact same communities.",
    research: "Initial research shows that people are willing to share excess food, but lack a trusted, local platform to facilitate the exchange safely and efficiently.",
    design: "The UI focuses on warmth and community, utilizing warm orange and yellow tones. The interface heavily relies on geolocation routing to make sharing hyper-local and immediate.",
    nextProject: { name: "Snapciet", slug: "snapciet" }
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ProjectPage({ params }: { params: { project: string } }) {
  const data = projectData[params.project as keyof typeof projectData]

  if (!data) {
    notFound()
  }

  return (
    <article className="relative pt-64 pb-24 px-6 md:px-12 xl:px-32 bg-white overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-50/40 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header Section */}
        <motion.header 
          {...fadeInUp}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12">
            
            {/* Title & Category */}
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[12px] font-bold tracking-[0.2em] text-teal-600 uppercase mb-4"
              >
                {data.category}
              </motion.p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-700">
                {data.title}
              </h1>
            </div>

            {/* Meta Info (Role & Timeline) */}
            <div className="flex gap-16 pb-1">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">My Role</p>
                <p className="text-lg text-gray-900 font-light">{data.role}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Timeline</p>
                <p className="text-lg text-gray-900 font-light">{data.timeline}</p>
              </div>
            </div>

          </div>
          <div className="border-t border-gray-200/60" />
        </motion.header>

        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-24 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] group bg-gray-100"
        >
           <Image
            src={data.heroImage}
            alt={`${data.title} Hero`}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
           />
        </motion.div>

        {/* Responsibilities & Context Section */}
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
        >
          <motion.div variants={fadeInUp} className="bg-gray-50/50 rounded-3xl p-10 border border-gray-100/50 backdrop-blur-sm">
            <h3 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-8 flex items-center gap-3">
              Responsibilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.responsibilities.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 font-light text-base">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400/50 mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-gray-50/50 rounded-3xl p-10 border border-gray-100/50 backdrop-blur-sm">
            <h3 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-8 flex items-center gap-3">
              Project Context
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.context.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 font-light text-base">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400/50 mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Main Narratives Section */}
        <div className="space-y-32">
          
          {/* Overview */}
          <motion.section 
             variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 tracking-tight">
              Project <span className="font-semibold text-gray-900 border-b-2 border-teal-400/30">Overview</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              {data.overview}
            </p>
            <div className="mt-12 border-t border-gray-200/60" />
          </motion.section>

          {/* Problem */}
          <motion.section 
            variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 tracking-tight">
              The <span className="font-semibold text-gray-900 border-b-2 border-red-400/30">Challenge</span>
            </h2>
            <div className="bg-red-50/30 p-8 rounded-2xl">
              <p className="text-xl text-gray-700 font-light leading-relaxed italic">
                {data.problem}
              </p>
            </div>
          </motion.section>

          {/* Visual Showcase - Large & Artistic */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-purple-50 rounded-[40px] -rotate-1 group-hover:rotate-0 transition-transform duration-700 -z-10" />
            <div className="relative w-full aspect-[16/10] rounded-[40px] overflow-hidden border border-white/50 shadow-xl bg-white/40 flex items-center justify-center p-12">
               <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6 text-teal-600">
                    <Image src="/logo.png" alt="Logo" width={32} height={32} className="opacity-50 grayscale" />
                  </div>
                  <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase">Snapciet Wireframes</span>
               </div>
            </div>
          </motion.div>

           {/* Research */}
           <motion.section 
            variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
           >
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 tracking-tight">
              Research & <span className="font-semibold text-gray-900 border-b-2 border-teal-400/30">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              {data.research}
            </p>
            <div className="mt-12 border-t border-gray-200/60" />
          </motion.section>

           {/* Design Approach */}
           <motion.section 
            variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
           >
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 tracking-tight">
              Design & <span className="font-semibold text-gray-900 border-b-2 border-purple-400/30">Execution</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              {data.design}
            </p>
            <div className="mt-12 border-t border-gray-200/60" />
          </motion.section>

          {/* Final Design Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40" />
             <span className="relative z-10 text-white/50 font-bold tracking-[0.4em] text-lg uppercase">Final Interface Design</span>
          </motion.div>

          {/* External Link Callout */}
          {data.link !== "#" && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-10 flex flex-col items-center"
            >
              <a 
                href={data.link} 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-10 py-5 rounded-full overflow-hidden flex items-center gap-3 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gray-900 group-hover:bg-teal-600 transition-colors" />
                <span className="relative text-white font-bold text-lg">Launch Project Website</span>
                <ExternalLink size={20} className="relative text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          )}

        </div>

        {/* Up Next - Major Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-64 pt-32 text-center"
        >
           <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Next Project</p>
           
           <Link 
            href={`/work/${data.nextProject.slug}`}
            className="group inline-flex flex-col items-center"
           >
              <div className="flex items-center gap-6">
                 <h2 className="text-6xl md:text-9xl font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-purple-500 transition-all duration-500 tracking-tighter">
                   {data.nextProject.name}
                 </h2>
                 <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-teal-400 group-hover:bg-teal-50/50 transition-all duration-500">
                   <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-gray-300 group-hover:text-teal-500 -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                 </div>
              </div>
           </Link>
        </motion.div>

      </div>
    </article>
  )
}
