/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'naxolutions.com',
          },
        ],
        destination: 'https://www.naxolutions.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
