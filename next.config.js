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
        disable: process.env.NODE_ENV === "development",
        dest: "public",
      },
      env: {
        ENVIRONMENT: process.env.ENVIRONMENT,
        NAME: "Baha eddine Chammakhi",
        // BASE_URL_STRAPIDEV: "https://bahadevchammakhi.mybluemix.net/",
        BASE_URL_STRAPIDEV: "http://localhost:1337",
        BASE_URL: "https://strapi-bahachammakhi.herokuapp.com/",
      },
      webpack(config, options) {
        return config;
      },
    })
  )
);
