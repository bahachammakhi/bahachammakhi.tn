import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/PortfolioLayout/Layout";
import HomeContainer from "../container/HomeContainer/HomeContainer";
import { Redux } from "./_app";

export default function Home({ name, data }) {
  console.log("name", name, data);
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
export const getStaticProps = async (name: any) => {
  console.log("start", name);
  return {
    props: {
      name: "Ameeni",
      data: name,
    },
  };
};
