/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy workaround route — keep old links working.
      { source: "/brands", destination: "/companies", permanent: true }
    ];
  }
};

export default nextConfig;
