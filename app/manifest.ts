import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `Pedro Lucena's Portfolio - Ready to Work!`,
    short_name: `Pedro Lucena's Portfolio`,
    description: `Hi, my name is Pedro, I'm a 20 years old Front-End Developer with a focus on TypeScript/JavaScript. Having
    more than 20 projects and 5 years of practice, I have experience with Front-End and Mobile development.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#0b3149',
    theme_color: '#28b6d5',
    lang: 'en',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
