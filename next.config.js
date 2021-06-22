const path = require("path");

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, module: false };
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};
