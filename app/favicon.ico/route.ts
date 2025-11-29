import { readFile } from 'fs/promises'
import { join } from 'path'

export const dynamic = 'force-static'
export const runtime = 'nodejs'

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'favicon.svg')
  const svg = await readFile(filePath)

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}

