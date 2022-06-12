/** @type {import('next').NextConfig} */

const nextConfig = {

  i18n: {
    locales: ['it', 'en',],
    defaultLocale: 'it',
    localeDetection: false,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
