/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports ={
  images: {
    domains: ['i.imgur.com', 'images.unsplash.com'],
  },
  async rewrites() {

    return [

      {

        source: '/api/:path*',

        destination: 'https://josmsservice.com/:path*',

      },

    ]

  },
}
