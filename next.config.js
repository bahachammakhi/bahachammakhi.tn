// require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });
require("dotenv").config({ path: `./.env` });
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const rehypePrism = require("@mapbox/rehype-prism");
// const withMdxEnhanced = require("next-mdx-enhanced");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});
const withImages = require("next-images");

// module.exports = withImages(
//   withPWA(
//     withMDX({
//       pageExtensions: ["mdx", "tsx"],
//       pwa: {
//         disable: process.env.NODE_ENV === "development",
//         dest: "public",
//       },
//       env: {
//         ENVIRONMENT: process.env.ENVIRONMENT,
//         NAME: "Baha eddine Chammakhi",
//         BASE_URL_STRAPIDEV: "https://bahadevchammakhi.mybluemix.net/",
//         // BASE_URL_STRAPIDEV: "http://localhost:1337",
//         BASE_URL: "https://strapi-bahachammakhi.herokuapp.com/",
//         // BASE_URL: "http://localhost:1337",
//       },
//       webpack(config, options) {
//         return config;
//       },
//     })
//   )
// );

const mdx = require("next-mdx-enhanced")({
  defaultLayout: false,
  fileExtensions: ["mdx", "md"],
  rehypePlugins: [rehypePrism],
});

const nextConfig = {
  pageExtensions: ["mdx", "tsx"],
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
    // BASE_URL: "http://localhost:1337",
  },
  webpack(config, options) {
    return config;
  },
};
module.exports = withPlugins(
  [
    mdx,
    withImages,
    withPWA,
    // you may add more plugins, and their configs, to this array
  ],
  nextConfig
);
