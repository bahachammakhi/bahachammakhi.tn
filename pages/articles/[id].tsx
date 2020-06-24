import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getArticle, getArticles } from "../../requests/requests";
import Layout from "../../components/layout/PortfolioLayout/Layout";
const imageSizeRegex = /_33B2BF251EFD_([0-9]+x|x[0-9]+|[0-9]+x[0-9]+)$/;
const imagePreprocessor = (source) =>
  source.replace(
    /(!\[[^\]]*\]\([^)\s]+) =([0-9]+x|x[0-9]+|[0-9]+x[0-9]+)\)/g,
    "$1_33B2BF251EFD_$2)"
  );
function imageRenderer({ src, ...props }) {
  const match = imageSizeRegex.exec(src);

  if (!match) {
    return <img src={src} alt="RendredPicture" {...props} />;
  }

  const [width, height] = match[1]
    .split("x")
    .map((s) => (s === "" ? undefined : Number(s)));
  return (
    <img
      src={src.replace(imageSizeRegex, "")}
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
      <div style={{ padding: "5% 15% 5% 15%" }}>
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
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await getArticles();
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
