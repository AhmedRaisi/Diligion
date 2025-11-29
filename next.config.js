const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./lib/i18n/config.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily disable static export for development
  // Re-enable with: output: 'export' for production builds
  // output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = withNextIntl(nextConfig)
