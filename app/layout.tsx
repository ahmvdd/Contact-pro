import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contact pro',
  description: 'Created with sayeeeh',
  generator: 'sayeeh',
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
