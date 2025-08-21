import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sesiones Bajo La Higuera',
  description: 'Es un espacio de meditación y bienestar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
