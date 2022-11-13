/** @type {import('next').NextConfig} */
const nextConfig = {
  /* experimental: {
    appDir: true,
  }, */
  images: {
    domains: [
      "www.hotelxcaret.com",
      "via.placeholder.com",
      "mdbcdn.b-cdn.net",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
