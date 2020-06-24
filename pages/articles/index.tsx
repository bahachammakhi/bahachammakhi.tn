import React from "react";
import { getArticles } from "../../requests/requests";
import Layout from "../../components/layout/PortfolioLayout/Layout";
import ArticlesGrid from "../../components/ui/ArticlesGrid/ArticlesGrid";

const Articles = ({ articles }) => {
  return (
    <Layout>
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
