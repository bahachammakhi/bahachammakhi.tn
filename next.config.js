// require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });
require("dotenv").config({ path: `./.env` });
const withPWA = require("next-pwa");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});
const withImages = require("next-images");

module.exports = withImages(
  withPWA(
    withMDX({
      pwa: {
        dest: "public",
      },
      env: {
        ENVIRONMENT: process.env.ENVIRONMENT,
        NAME: "Baha eddine Chammakhi",
        BASE_URL: "https://swapi.dev/api/",
      },
      webpack(config, options) {
        return config;
      },
    })
  )
);
