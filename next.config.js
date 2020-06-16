// require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });
require("dotenv").config({ path: `./.env` });

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});
const withImages = require("next-images");

module.exports = withImages(
  withMDX({
    env: {
      ENVIRONMENT: process.env.ENVIRONMENT,
      NAME: "Baha eddine Chammakhi",
    },
    webpack(config, options) {
      return config;
    },
  })
);
