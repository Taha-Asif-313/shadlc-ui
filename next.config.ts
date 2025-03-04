import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
const withTM = require("next-transpile-modules")(["shadlc"]);

module.exports = withTM({
  reactStrictMode: true,
});

export default nextConfig;
