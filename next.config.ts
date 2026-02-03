import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'i.imgur.com' }, { hostname: 'user-images.githubusercontent.com' }],
  },
}

export default nextConfig
