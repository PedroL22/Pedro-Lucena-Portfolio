import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'i.imgur.com' }, { hostname: 'user-images.githubusercontent.com' }],
  },
  // Keeps the previously shared /resume.pdf URL working.
  redirects: async () => [{ source: '/resume.pdf', destination: '/resume-en.pdf', permanent: true }],
}

export default nextConfig
