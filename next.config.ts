import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',

  // Optional: React Strict Mode
  reactStrictMode: true,

  // Configure images for static export (if using image optimization)
  images: {
    unoptimized: true,  // Disable image optimization for static export (Netlify won't handle Next.js image optimization)
  },

  // Enable internationalization if necessary (optional)
  i18n: {
    locales: ['en', 'fr', 'es'],  // Add the languages you want to support
    defaultLocale: 'en',
  },

  // Custom Webpack configuration (optional, if needed)
  webpack(config) {
    return config;
  },

  // Other optional configurations
};

export default nextConfig;

