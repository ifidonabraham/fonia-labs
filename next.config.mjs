/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy workaround route — keep old links working.
      { source: "/brands", destination: "/companies", permanent: true },
      // Redirect old Vercel subdomain to the new custom domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "fonialabs.vercel.app" }],
        destination: "https://fonialabs.tech/:path*",
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
