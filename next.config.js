/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,


  async rewrites() {
    return [
      {
        destination: 'http://localhost:5000/*',
        source: '/:path*',
      },
    ];
  },


}

module.exports = nextConfig
