const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl({
  images: {
    domains: ["strapi.culicom.amsterdam"],
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
});
