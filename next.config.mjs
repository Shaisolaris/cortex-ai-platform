/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cortex-ai-platform',
  assetPrefix: '/cortex-ai-platform/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
