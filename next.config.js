/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "my-projects.iran.liara.run",
      //   port: "",
      //   pathname: "/uploads/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "my-projects.iran.liara.run",
      //   port: "",
      //   pathname: "/images/**",
      // },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
