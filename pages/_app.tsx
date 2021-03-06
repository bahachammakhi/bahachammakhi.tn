import React, { createContext, ContextType } from "react";
import "antd/dist/antd.css";
import dynamic from "next/dynamic";
import useApi from "../hooks/useApi";
import Preloader from "../components/ui/Preloader/Preloader";
import NextNProgress from "nextjs-progressbar";
const Layout = dynamic(
  () => import("../components/layout/PortfolioLayout/Layout"),
  {
    ssr: false,
    loading: () => <Preloader />,
  }
);
import {
  getProjects,
  getSettings,
  postContact,
  getArticles,
  getSocial,
} from "../requests/requests";
// import MessengerCustomerChat from "../utils/MessangerChat";
const MessengerCustomerChat = dynamic(() => import("../utils/MessangerChat"), {
  ssr: false,
});

import { useApiRequest } from "../hooks/useApi";
export interface callsType {
  getPeople: useApiRequest;
}
type useApiContextType = {
  name: string;
  calls: any;
};
export const Redux = createContext<useApiContextType | undefined>(undefined);

export function reportWebVitals(metric: any) {}

const MyApp = ({ Component, pageProps }: any): any => {
  const { ...calls } = useApi({
    getProjects,
    getSettings,
    postContact,
    getArticles,
    getSocial,
  });

  return (
    <Redux.Provider value={{ name: process.env.NAME, calls: calls }}>
      <Layout>
        <Component {...pageProps} />
        <NextNProgress
          color="#2a878f"
          options={{ easing: "ease", speed: 500 }}
        />
        <MessengerCustomerChat
          pageId="714175575683300"
          appId="272738577387387"
        />
      </Layout>
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
          }
        `}
      </style>
    </Redux.Provider>
  );
};
export default MyApp;
