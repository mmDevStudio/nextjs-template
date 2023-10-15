import './globals.css'

import React from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nextjs Template with Tailwindcss',
  description: '',
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
