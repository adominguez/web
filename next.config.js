/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'myblog-ar9m5tg6pv.live-website.com',
          port: '',
          pathname: '/wp-content/uploads/**',
        },
      ],
    },
  }