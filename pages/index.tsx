import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/PortfolioLayout/Layout";
import HomeContainer from "../container/HomeContainer";
import { Redux } from "./_app";

export default function Home({ name }) {
  console.log("name", name);
  const state = useContext(Redux);
  useEffect(() => {
    state.calls.getPeople.call();
  }, []);
  console.log("Response1", state.calls.getPeople);

  return (
    <Layout>
      <HomeContainer />
    </Layout>
  );
}
export const getStaticProps = async () => {
  return {
    props: {
      name: "Ameeni",
    },
  };
};
