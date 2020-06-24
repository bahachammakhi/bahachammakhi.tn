import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getArticle, getArticles } from "../../requests/requests";
import styled from "styled-components";
import Layout from "../../components/layout/PortfolioLayout/Layout";
import Head from "next/head";

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const Wrap = styled.div`
  padding: 5% 15% 5% 15%;
  @media screen and (max-width: 768px) {
    padding: 5% 5% 5% 5%;
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
const Article = ({ article }) => {
  const renderers = {};
  renderers["image"] = imageRenderer;
  return (
    <Layout>
      <Head>
        <title>Baha chammakhi-{article?.title}</title>
        <meta name="description" content={article?.preview}></meta>
        <meta
          name="keywords"
          content={`blogs, articles,Javascript,Code,Programming,Baha ,chammakhi, Portfolio, Projects, bahachammakhi, devops,arcitecture,tunisia,developer,nodejs,typescript,${article?.title},${article?.preview}`}
        ></meta>
      </Head>
      <Wrap>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article?.image?.url}
          data-srcset={article?.image?.url}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown
              source={imagePreprocessor(article.content)}
              renderers={renderers}
            />
            <h2>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </h2>
          </div>
        </div>
      </Wrap>
    </Layout>
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
    props: { article: data },
    unstable_revalidate: 1,
  };
}
// [![Heroku App Status](http://heroku-shields.herokuapp.com/strapi-bahachammakhi)](https://strapi-bahachammakhi.herokuapp.com)
export default Article;
