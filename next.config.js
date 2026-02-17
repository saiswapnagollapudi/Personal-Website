/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  experimental: {
    optimizePackageImports: ['@mui/material']
  }
};

export default nextConfig;
