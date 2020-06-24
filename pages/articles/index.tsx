import React from "react";
import { getArticles } from "../../requests/requests";
import Layout from "../../components/layout/PortfolioLayout/Layout";
import ArticlesGrid from "../../components/ui/ArticlesGrid/ArticlesGrid";
import Head from "next/head";

const Articles = ({ articles }) => {
  return (
    <Layout>
      <Head>
        <title>Baha chammakhi-Articles</title>
        <meta
          name="description"
          content="List of Articles made by baha chammakhi"
        ></meta>
        <meta
          name="keywords"
          content={`blogs, articles,Javascript,Code,Programming,Baha ,chammakhi, Portfolio, bahachammakhi, devops,arcitecture,tunisia,developer,nodejs,typescript`}
        ></meta>
      </Head>
      <h1>Articles:</h1>
      <ArticlesGrid data={articles} />
    </Layout>
  );
};

export async function getStaticProps() {
  const articles = await getArticles();
  return {
    props: { articles: articles.data || [] },
    unstable_revalidate: 1,
  };
}

export default Articles;
