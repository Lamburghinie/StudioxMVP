import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/chrome-bug.css'
import { Navbar } from '@/components/common'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studio X',
  description: 'The future of Home.',
}

const navBarLinks = [
  { href: '/3d-studio', label: '3D Studio' },
  { href: '/furniture', label: 'Furniture' },
  { href: '/smart-home', label: 'Smart Home' },
  { href: '/automation-setup', label: 'Automation Setup' },
  { href: '/partners', label: 'Partners' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar links={navBarLinks} />
        {children}
      </body>
    </html>
  )
}
