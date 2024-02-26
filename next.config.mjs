/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['media.steelseriescdn.com', 'assets3.razerzone.com', 'resource.logitechg.com', 'resource.logitech.com', 'hkgaming.hermanmiller.com', 'asset-us-store.msi.com', 'lh3.googleusercontent.com'],
  },
  env: {
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
  typescript:{
    ignoreBuildErrors:true,
  }
};

export default nextConfig;
