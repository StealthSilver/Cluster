import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cluster - Relationship-Aware Social App',
  description: 'Think before you share. Connect with intention.',
  keywords: ['social', 'connection', 'community', 'relationships'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
