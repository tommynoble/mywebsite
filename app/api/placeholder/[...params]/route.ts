import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  const [width, height] = params.params || ['400', '300']
  
  // Create a proper placeholder image with gradient background
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f0f9ff;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#e0f2fe;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#ffffff;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad)"/>
    <circle cx="${parseInt(width) / 2}" cy="${parseInt(height) / 2}" r="40" fill="#0891b2" opacity="0.1"/>
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#0891b2" font-family="system-ui, sans-serif" font-size="14" font-weight="500">
      ${width} × ${height}
    </text>
  </svg>`

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}