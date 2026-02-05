import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

import { Footer } from '~/layouts/footer'
import { Header } from '~/layouts/header'

const baseUrl = 'https://pedrolucena.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Pedro Lucena's Portfolio - Full-Stack Engineer",
    template: '%s | Pedro Lucena',
  },
  description:
    'Senior Full-Stack Developer specializing in React, Next.js, and TypeScript. Building production fintech systems and scalable web applications.',
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
    'Full-Stack',
    'Software Engineer',
  ],
  authors: [{ name: 'Pedro Lucena', url: baseUrl }],
  creator: 'Pedro Lucena',
  publisher: 'Pedro Lucena',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/blue-heart.png',
    apple: '/blue-heart.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: "Pedro Lucena's Portfolio - Full-Stack Engineer",
    description:
      'Senior Full-Stack Developer specializing in React, Next.js, and TypeScript. Building production fintech systems and scalable web applications.',
    siteName: "Pedro Lucena's Portfolio",
    images: [
      {
        url: '/blue-heart.png',
        width: 512,
        height: 512,
        alt: "Pedro Lucena's Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pedro Lucena's Portfolio",
    description: 'Senior Full-Stack Developer specializing in React, Next.js, and TypeScript.',
    images: ['/blue-heart.png'],
    creator: '@lucena_l22',
  },
  alternates: {
    canonical: '/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pedro Lucena',
  url: baseUrl,
  jobTitle: 'Full-Stack Developer',
  sameAs: ['https://github.com/PedroL22/', 'https://www.linkedin.com/in/pedrolucena22/', 'https://x.com/lucena_l22/'],
  image: `${baseUrl}/blue-heart.png`,
  description: 'Senior Full-Stack Developer specializing in React, Next.js, and TypeScript.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
