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

const scriptText = `!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on", "setUserAttributes" ],
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('xbihnxs9wsb5');
`;
function setDrif() {
  return {
    __html: `${scriptText}`,
  };
}
export const DEFAULT_SEO = {
  title: "Baha chammakhi-Fullstack Javascript Developer",
  description:
    "I am a motivated Fullstack js developer mainly working with the MERN stack always trying to ensurebest practices to keep my code clean. Dont hesitate to contact me to bring your project to live !",
  language: "en-tn",
  pageUrl: "https://www.bahachammakhi.tn",
  image: "/static/default-monochrome-black.svg",
  keywords:
    "Baha chammakhi bahachammakhi bahaeddinnechammakhi fullstackdeveloper",
};
const HeadSEO = ({
  keywords,
  title,
  description,
  language,
  pageUrl,
  image,
}: any = DEFAULT_SEO) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
      />
      <meta name="keywords" content={keywords} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={description} />
      <meta name="subject" content={description} />
      <meta name="rating" content="General" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="msapplication-config"
        content="/static/icons/browserconfig.xml"
      />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

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
      <meta name="twitter:card" content={description} />
      <meta name="twitter:site" content="@bahachammakhi" />
      <meta name="twitter:creator" content="@bahachammakhi" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      <meta property="fb:app_id" content="bahadevchammakhi" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content={language} />
      <meta
        property="article:author"
        content="Baha eddine chammakhi"
        key="article-author"
      />
      <title>{title}</title>
      <script
        async
        defer
        src="https://connect.facebook.net/en_US/sdk.js"
      ></script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-139163951-3"
      ></script>
      <script dangerouslySetInnerHTML={setGoogleTags()} />
    </Head>
  );
};

export default HeadSEO;
