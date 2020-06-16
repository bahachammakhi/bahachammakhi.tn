import React, { createContext } from "react";
import "antd/dist/antd.css";
import Head from "next/head";
import useApi from "../hooks/useApi";
import { getPeople } from "../requests/requests";
import { DefaultSeo } from "next-seo";
export const Redux = createContext({
  name: process.env.author,
  calls: {
    getPeople: {
      call: () => {
        return {};
      },
    },
  },
});
//getPeople
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
function setGoogleTags() {
  return {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-XXXXXXXX-X');
    `,
  };
}
const MyApp = ({ Component, pageProps }: any): any => {
  const { ...calls } = useApi({ getPeople });
  return (
    /** Do this after !!!!!!!!!!!!!!!!!!!!!!!! */
    // <Redux.Provider value={{ name: process.env.NAME, calls: calls }}>
    <>
      <Head>
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/static/icons/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/manifest.json" />
        <link
          rel="mask-icon"
          href="/static/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/static/icons/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/static/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PWA App" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/static/icons/apple-touch-icon.png"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-139163951-3"
        ></script>
        <script dangerouslySetInnerHTML={setGoogleTags()} />
      </Head>
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
      {/* </Redux.Provider>*/}
    </>
  );
};
export default MyApp;
