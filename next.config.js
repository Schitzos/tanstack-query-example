/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  transpilePackages: ['@styles'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // async rewrites() {
  //   return [
  // {
  //   source: '/api/login',
  //   destination: `/api/login`,
  // },
  // {
  //   source: '/api/:path*',
  //   destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
  // },
  //   ];
  // },
}

module.exports = nextConfig
