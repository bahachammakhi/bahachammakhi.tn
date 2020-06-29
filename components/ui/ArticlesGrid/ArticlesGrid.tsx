import React from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import ArticleCard from "../ArticleCard/Card";

const ArticlesGrid = ({ data }) => {
  const ArticlesElements = data?.map((article: any) => {
    return (
      <Link href={`/articles/${article._id}`}>
        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 8, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
          xl={{ span: 6, offset: 2 }}
          xxl={{ span: 6, offset: 2 }}
        >
          <ArticleCard {...article} />
        </Col>
      </Link>
    );
  });
  return (
    <Row style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      {ArticlesElements}
    </Row>
  );
};

export default ArticlesGrid;
