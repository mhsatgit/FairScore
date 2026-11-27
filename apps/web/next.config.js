const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/fairscore' : '',
  reactStrictMode: true,
  transpilePackages: ['@fairscore/ui'],
}

module.exports = nextConfig
