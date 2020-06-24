import React from "react";
import classes from "./stonecard.module.scss";
import { Card, Progress, Typography } from "antd";
import styled from "styled-components";
const { Meta } = Card;
const { Paragraph } = Typography;
const CardStyled = styled(Card)`
  width: 20vw !important;
  box-shadow: 0 5px 8px 0 rgba(139, 139, 139, 0.781) !important;
  @media screen and (max-width: 1100px) {
    width: 30vw !important;
    margin-top: 2vh !important;
  }
  @media screen and (max-width: 680px) {
    width: 80vw !important;
    margin-top: 2vh !important;
  }
  :hover {
    box-shadow: 0 8px 16px 0 rgba(139, 139, 139, 0.781) !important;
    transform: scale(1.02);
  }
`;
const Cover = styled.div`
  position: relative !important;
  text-decoration: inherit !important;
  transition: all 0.2s ease-in-out !important;
  max-height: 200px !important;
  overflow: hidden !important;
`;
const Title = styled.p`
  position: absolute !important;
  bottom: 3px !important;
  text-shadow: 2px 2px 4px #000000;
  left: 20%;
  font-weight: bold;
  line-height: 1.2;
  font-size: 1.25rem;
  z-index: 2;
  font-family: "sharp-sans", Montserrat, Verdana, sans-serif;
  color: white;
`;
const ArticleCard = ({ title, content, image, published_at }: any) => {
  return (
    <div>
      <CardStyled
        hoverable
        loading={false}
        cover={
          <Cover>
            <Title>{title}</Title>
            <img
              style={{ width: "100%", height: "100%" }}
              alt={title}
              src={image?.url}
            />
          </Cover>
        }
      >
        <Meta
          description={
            <Paragraph ellipsis={{ rows: 8, expandable: false }}>
              {content.slice(0, 10)}....
            </Paragraph>
          }
        />

        {/* <span className={classes.money}>
          <b>${currentValue} raised</b> of ${but}
        </span> */}
      </CardStyled>
    </div>
  );
};

export default ArticleCard;
