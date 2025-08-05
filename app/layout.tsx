import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Thomas Boye Asante - UI/UX Designer & Prompt Engineering Specialist',
  description: 'Portfolio of Thomas Boye Asante, a multi-disciplinary UI/UX designer with expertise in Prompt Engineering and AI-enhanced design solutions based in Herndon, Virginia.',
  keywords: 'UI/UX Designer, Prompt Engineering, AI Design, User Experience, Herndon Virginia, Product Design',
  authors: [{ name: 'Thomas Boye Asante' }],
  openGraph: {
    title: 'Thomas Boye Asante - UI/UX Designer & Prompt Engineering Specialist',
    description: 'Portfolio of Thomas Boye Asante, a multi-disciplinary UI/UX designer with expertise in Prompt Engineering and AI-enhanced design solutions.',
    url: 'https://thomasboye.com',
    siteName: 'Thomas Boye Asante Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Boye Asante - UI/UX Designer & Prompt Engineering Specialist',
    description: 'Portfolio of Thomas Boye Asante, a multi-disciplinary UI/UX designer with expertise in Prompt Engineering and AI-enhanced design solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${outfit.variable}`}>
        <Navbar />
        <main className="min-h-screen bg-gradient-hero">
          {children}
        </main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}