import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getArticle, getArticles } from "../../requests/requests";
import styled from "styled-components";
import Layout from "../../components/layout/PortfolioLayout/Layout";
import Head from "next/head";
import CodeBlock from "../../utils/CodeBlock";
import SEO from "../../utils/SeoUtils";
import React from "react";
import MarkdownWrap from "../../components/ui/Markdown";

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const Wrap = styled.div`
  margin: 30%;
  margin-top: 5%;
  margin-bottom: 5%;

  font-family: Fira Code, monospace !important;
  h1 {
    color: #0f172a;
    font-size: 2.6666667em !important;
    line-height: 1 !important;
    margin-bottom: 0.8333333em !important;
  }
  p {
    line-height: 2rem;
    font-size: 18px;
  }

  img {
    visibility: visible;

    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;

    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 5% 5% 5% 5%;
    margin: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;
const imageSizeRegex = /_33B2BF251EFD_([0-9]+x|x[0-9]+|[0-9]+x[0-9]+)$/;
const imagePreprocessor = (source) =>
  source.replace(
    /(!\[[^\]]*\]\([^)\s]+) =([0-9]+x|x[0-9]+|[0-9]+x[0-9]+)\)/g,
    "$1_33B2BF251EFD_$2)"
  );
function imageRenderer({ src, ...props }) {
  const match = imageSizeRegex.exec(src);

  if (!match) {
    return <Image src={src} alt="RendredPicture" {...props} />;
  }

  const [width, height] = match[1]
    .split("x")
    .map((s) => (s === "" ? undefined : Number(s)));
  return (
    <Image
      src={src.replace(imageSizeRegex, "")}
      alt="RendredPicture"
      width={width}
      height={height}
      {...props}
    />
  );
}
const Article = ({ article, slug }) => {
  const renderers = {};
  // renderers["image"] = imageRenderer;
  renderers["code"] = CodeBlock;
  return (
    <>
      <SEO
        title={`Bahachammakhi- ${article?.title}`}
        description={article?.preview}
        language="en-us"
        image={article?.image?.formats?.thumbnail?.url}
        pageUrl={`https://www.bahachammakhi.com/articles/${slug}`}
        keywords={article?.keywords}
      />
      <MarkdownWrap>
        <div className="markdown-body">
          <h1>{article.title}</h1>
          <ReactMarkdown
            source={imagePreprocessor(article.content)}
            renderers={renderers}
          />
          <h2>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </h2>
        </div>
      </MarkdownWrap>
    </>
  );
};

export async function getStaticPaths() {
  const articles = await getArticles();
  // const paths = articles?.data?.map((article) => ({
  //   params: { id: article?._id, slug: article?.title },
  // }));
  return {
    paths: articles?.data?.map((article) => `/articles/${article._id}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await getArticle(params.id);
  return {
    props: { article: data, slug: params.id },
    unstable_revalidate: 1,
  };
}
// [![Heroku App Status](http://heroku-shields.herokuapp.com/strapi-bahachammakhi)](https://strapi-bahachammakhi.herokuapp.com)
export default Article;
