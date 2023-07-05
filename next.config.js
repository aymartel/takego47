/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ['@svgr/webpack'],
  //   })

  //   return config
  // },
  i18n: {
    locales: ['es', 'en', 'ru'],
    defaultLocale: 'es',
  },
   images: {
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
