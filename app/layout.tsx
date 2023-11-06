import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

import './globals.css'

import { Header } from '@/layouts/Header'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Pedro Lucena's Portfolio - Ready to Work!",
  icons: '/blue-heart.png',
  description: `Hi, my name is Pedro, I'm a 20 years old Front-End Developer with a focus on TypeScript/JavaScript. Having
  more than 20 projects and 5 years of practice, I have experience with Front-End and Mobile development.`,
  authors: [{ name: 'Pedro Lucena', url: 'https://github.com/PedroL22' }],
  keywords:
    'Front, End, Developer, Pedro, Lucena, JavaScript, TypeScript, React, React Native, Next JS, Zustand, Tailwind, Material UI, Styled Components',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={dmSans.className}>
        <Header />

        {children}
      </body>
    </html>
  )
}
