import React, { useContext } from "react";
import Head from "next/head";
import Layout from "../components/layout/PortfolioLayout/Layout";
import HomeContainer from "../container/HomeContainer";
import { Redux } from "./_app";

export default function Home() {
  const state = useContext(Redux);
  console.log("Redux", state);
  return (
    <Layout>
      <HomeContainer />
    </Layout>
  );
}
