import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Absolute Back Button */}
      <div className="absolute top-52 left-6 md:left-12 xl:left-32 z-50">
        <Link 
          href="/work" 
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium">Back to Work</span>
        </Link>
      </div>
      
      {children}
    </div>
  )
}
