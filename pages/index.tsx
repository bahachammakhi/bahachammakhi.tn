import Head from "next/head";
import Layout from "../components/layout/PortfolioLayout/Layout";
import HomeContainer from "../container/HomeContainer";

export default function Home() {
  return (
    <Layout>
      <HomeContainer />
    </Layout>
  );
}
