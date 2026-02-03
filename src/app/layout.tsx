import type { Metadata } from 'next'

import './globals.css'

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
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='font-sans antialiased'>{children}</body>
    </html>
  )
}
