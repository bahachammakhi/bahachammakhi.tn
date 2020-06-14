import React from "react";
import CardPic from "../CardPic/CardPic";
import Button from "../Button/Button";
import { Button as ButtonWrapper, Title, Card, Wrapper } from "./styles";

interface Iprops {
  color?: string;
  title?: string;
  details?: string;
  description?: string;
  src?: string;
}

const Portfolio = ({ color, title, details, description, src }: Iprops) => {
  return (
    <Wrapper style={{ backgroundColor: color }}>
      <Card>
        <CardPic
          img="https://bahachammakhi.me/static/media/weather.a7973bb5.PNG"
          width="800px"
          reswidth="300px"
        />
      </Card>
      <Title>{title}</Title>
      <p className="description">{description}</p>
      <h3 className="details">{details}</h3>

      <ButtonWrapper>
        <Button
          path={""}
          content="Preview"
          width="150px"
          height="50px"
          executed={false}
        />
      </ButtonWrapper>
      {/* <style jsx>
        {`
          .card {
            padding-left: 20%;
            padding-top: 10%;
            padding-bottom: 2%;
          }
          .wrapper {
            max-height: 1000px;
          }
          .button {
            padding-left: 45%;
            padding-bottom: 10%;
          }
          .title {
            text-align: center;
            font-weight: bolder;
          }
          .details {
            text-align: center;
          }
          .description {
            text-align: center;
          }
          @media only screen and (max-width: 767px) {
            .card {
              padding-left: 10%;
              padding-top: 10%;
              padding-bottom: 2%;
            }
            .button {
              padding-left: 30%;
              padding-bottom: 10%;
            }
            .title {
              margin-top: 10%;
            }
          }
        `}
      </style> */}
    </Wrapper>
  );
};
export default Portfolio;
