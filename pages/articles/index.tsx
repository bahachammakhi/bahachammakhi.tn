import React from "react";
import { getArticles } from "../../requests/requests";
import Layout from "../../components/layout/PortfolioLayout/Layout";
import ArticlesGrid from "../../components/ui/ArticlesGrid/ArticlesGrid";
import Head from "next/head";
import SEO from "../../utils/SeoUtils";

const Articles = ({ articles }) => {
  return (
    <>
      <SEO
        title={`Bahachammakhi- Articles`}
        description={"List of Articles made by baha chammakhi"}
        language="en-us"
        image={"/static/logo.png"}
        pageUrl={`https://www.bahachammakhi.com/articles/`}
        keywords={
          "`blogs, articles,Javascript,Code,Programming,Baha ,chammakhi, Portfolio, bahachammakhi, devops,arcitecture,tunisia,developer,nodejs,typescript"
        }
      />
      <h1>Articles:</h1>
      <ArticlesGrid data={articles} />
    </>
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
