import React, { createContext } from "react";
import "antd/dist/antd.css";
import { DefaultSeo } from "next-seo";
export const Redux = createContext({
  name: process.env.author,
});
const DEFAULT_SEO = {
  title: "Baha Chammakhi",
  description: "My portfolio ",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.bahachammakhi.tn",
    title: "Baha chammakhi",
    description: "SEO made easy for Next.js projects",
    image:
      "https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg",
    site_name: "GaryMeehan.ie",
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: "@garmeeh",
    cardType: "summary_large_image",
  },
};
//https://strapi.io/blog/build-a-blog-with-next-react-js-strapi-and-apollo
const MyApp = ({ Component, pageProps }: any): any => {
  return (
    <Redux.Provider value={{ name: process.env.NAME }}>
      <DefaultSeo {...DEFAULT_SEO} /> <Component {...pageProps} />{" "}
      <style global jsx>
        {`
          body {
            @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
            background: rgb(227, 228, 228);
            background: linear-gradient(
              90deg,
              rgba(227, 228, 228, 0.6895133053221288) 0%,
              rgba(255, 255, 255, 1) 98%
            );
            font-family: "Montserrat", sans-serif;
          }
        `}
      </style>
    </Redux.Provider>
  );
};
export default MyApp;
