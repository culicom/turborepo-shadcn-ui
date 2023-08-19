const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl({
  images: {
    domains: ["localhost"],
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
});
// "#0806B6"
