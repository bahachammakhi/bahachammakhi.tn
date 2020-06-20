import React, { createContext, ContextType } from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import Drift from "react-driftjs";
import useApi from "../hooks/useApi";
import { getProjects } from "../requests/requests";
import SEO, { DEFAULT_SEO } from "../utils/SeoUtils";
import { DefaultSeo } from "next-seo";

import { useApiRequest } from "../hooks/useApi";
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
drift.load('xbihnxs9wsb5');`;
export interface callsType {
  getPeople: useApiRequest;
}
type useApiContextType = {
  name: string;
  calls: any;
};
export const Redux = createContext<useApiContextType | undefined>(undefined);

//https://strapi.io/blog/build-a-blog-with-next-react-js-strapi-and-apollo

export function reportWebVitals(metric: any) {
  console.log("metric", metric);
}

const MyApp = ({ Component, pageProps }: any): any => {
  const { ...calls } = useApi({ getProjects });
  // console.log("pageProps", pageProps);
  return (
    <Redux.Provider value={{ name: process.env.NAME, calls: calls }}>
      {/* <Drift appId="xbihnxs9wsb5" /> */}
      <Component {...pageProps} />
      <SEO />
      <DefaultSeo {...DEFAULT_SEO} />
      <style global jsx>
        {`
          body {
            overflow-x: hidden;
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
