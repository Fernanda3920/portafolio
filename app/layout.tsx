import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'América Nevárez — Desarrolladora de Software',
  description: 'Portafolio de América Nevárez, desarrolladora de software en Tijuana. Proyectos de salud digital, Web3, inteligencia artificial e IoT.',
  generator: 'v0.app',
  icons: {
    icon: '/icon__1_-removebg-preview.png',
    apple: '/icon__1_-removebg-preview.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f8f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
