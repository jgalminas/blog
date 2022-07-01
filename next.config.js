/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config) => {

      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      })
    return config;
  }
}

module.exports = nextConfig
