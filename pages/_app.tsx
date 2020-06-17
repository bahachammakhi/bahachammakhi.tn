import React, { createContext, ContextType } from "react";
import "antd/dist/antd.css";
import useApi from "../hooks/useApi";
import { getPeople } from "../requests/requests";
import SEO from "../utils/SeoUtils";
import { useApiRequest } from "../hooks/useApi";

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
  const { ...calls } = useApi({ getPeople });
  // console.log("pageProps", pageProps);
  return (
    <Redux.Provider value={{ name: process.env.NAME, calls: calls }}>
      <Component {...pageProps} />
      <SEO />
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
