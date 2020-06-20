import Head from "next/head";
import { DefaultSeo } from "next-seo";
function setGoogleTags() {
  return {
    __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-139163951-3');
        `,
  };
}
export const DEFAULT_SEO = {
  titleTemplate: "Baha chammakhi-Fullstack Javascript Developer",
  title: "Baha chammakhi-Fullstack Javascript Developer",
  description:
    "I am a motivated Fullstack js developer mainly working with the MERN stack always trying to ensurebest practices to keep my code clean. Dont hesitate to contact me to bring your project to live !",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.bahachammakhi.tn",
    title: "Baha chammakhi-Fullstack Javascript Developer",
    description:
      "I am a motivated Fullstack js developer mainly working with the MERN stack always trying to ensurebest practices to keep my code clean. Dont hesitate to contact me to bring your project to live !",
    image:
      "https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg",
    site_name: "Bahachammakhi",
    imageWidth: 1200,
    imageHeight: 1200,
    profile: {
      firstname: "Baha eddine",
      lastname: "Chammakhi",
      username: "bahachammakhi",
      gender: "male",
    },
  },
  twitter: {
    handle: "@garmeeh",
    cardType: "summary_large_image",
  },
};
const HeadSEO = () => {
  return (
    <Head>
      <meta
        name="keywords"
        content="bahachammakhi baha chammakhi developer tunisian tunisia tunisien portfolio JS javascript js fullstack frontend backend devops docker react nodejs vuejs angular firebase mongodb strapi "
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="application-name" content="Baha chammakhi Fullstackjs" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content="Baha chammakhi-Fullstack Javascript Developer"
      />
      <meta
        name="description"
        content="I am a motivated Fullstack js developer mainly working with the MERN stack always trying to ensurebest practices to keep my code clean. Dont hesitate to contact me to bring your project to live !"
      />
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
      <link href="static/manifest.json" rel="manifest"></link>

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://bahachammakhi.tn" />
      <meta
        name="twitter:title"
        content="Baha chammakhi-Fullstack Javascript Developer"
      />
      <meta
        name="twitter:description"
        content="I am a motivated Fullstack js developer mainly working with the MERN stack always trying to ensurebest practices to keep my code clean. Dont hesitate to contact me to bring your project to live !"
      />
      <meta
        name="twitter:image"
        content="https://bahachammakhi.tn/static/icons/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@DavidWShadow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PWA App" />
      <meta
        property="og:description"
        content="I am a motivated Fullstack js developer mainly working with the MERN stack always trying to ensurebest practices to keep my code clean. Dont hesitate to contact me to bring your project to live !"
      />
      <meta property="og:site_name" content="PWA App" />
      <meta property="og:url" content="https://bahachammakhi.tn" />
      <meta
        property="og:image"
        content="https://bahachammakhi.tn/static/icons/apple-touch-icon.png"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-139163951-3"
      ></script>
      <script dangerouslySetInnerHTML={setGoogleTags()} />
    </Head>
  );
};

export default HeadSEO;
