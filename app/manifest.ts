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
    theme_color: '#092334',
    lang: 'en',
    icons: [
      {
        src: '/blue-heart.png',
        purpose: 'any',
        sizes: '144x144',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: 'https://user-images.githubusercontent.com/40894497/187774626-91b2361b-9174-45af-b9c1-a410bdf85076.jpg',
        sizes: '1280x720',
        type: 'image/jpeg',
      },
    ],
  }
}
