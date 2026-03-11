"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, ArrowRight, Github, Linkedin } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    toast.success("Message sent! I'll get back to you within 24 hours.")
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <section id="contact" className="min-h-screen py-24 px-6 md:px-12 xl:px-32 bg-gradient-connect-light">
      <div className="max-w-5xl mx-auto w-full">

        {/* Page Header — matches Journey/About style */}
        <motion.div {...fadeInUp} className="mb-8">
          <h1 className="text-xl md:text-xl lg:text-2xl text-gray-700 mb-2">
            Say <span className="font-semibold">Hello</span>
          </h1>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-700 max-w-4xl">
            Have a project in mind?{" "}
            <span className="text-gradient-teal">Let's talk.</span>
          </h2>
          <p className="mt-8 text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
            I'm always open to new opportunities, collaborations, and conversations. Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left Column — Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</p>
                <a
                  href="mailto:thomas@thomasboye.com"
                  className="text-lg text-gray-800 font-light hover:text-teal-600 transition-colors"
                >
                  thomas@thomasboye.com
                </a>
              </div>
              <div className="border-t border-gray-200/60" />
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Location</p>
                <p className="text-lg text-gray-800 font-light flex items-center gap-2">
                  <MapPin size={16} className="text-gray-400" />
                  Herndon, Virginia
                </p>
              </div>
              <div className="border-t border-gray-200/60" />
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Elsewhere</p>
                <div className="flex gap-5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/thomas-boye-asante-6241a7145"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-teal-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Minimal Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-0 border-b border-gray-200 pb-3 text-lg text-gray-800 font-light placeholder:text-gray-300 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-0 border-b border-gray-200 pb-3 text-lg text-gray-800 font-light placeholder:text-gray-300 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-0 border-b border-gray-200 pb-3 text-lg text-gray-800 font-light placeholder:text-gray-300 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden transition-all duration-300 disabled:opacity-60"
                >
                  <div className="absolute inset-0 bg-gray-900 group-hover:bg-teal-600 transition-colors duration-300" />
                  <span className="relative text-white font-bold text-lg">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  {!isSubmitting && (
                    <ArrowRight size={20} className="relative text-white group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  )
}