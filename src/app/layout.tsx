import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

import { Footer } from '~/layouts/footer'
import { Header } from '~/layouts/header'

export const metadata: Metadata = {
  title: "Pedro Lucena's Portfolio - Ready to Work!",
  keywords: [
    'Front-End',
    'Developer',
    'Pedro',
    'Lucena',
    'React',
    'React Native',
    'Next JS',
    'Tailwind CSS',
    'TypeScript',
    'JavaScript',
  ],
  authors: [{ name: 'Pedro Lucena' }],
  icons: {
    icon: '/blue-heart.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
