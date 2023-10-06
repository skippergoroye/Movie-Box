import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'


const dm_Sans = DM_Sans ({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Movie Box | skipper',
  description: 'Data fetch from TMDB Api for this project',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dm_Sans.className}>{children}</body>
    </html>
  )
}
