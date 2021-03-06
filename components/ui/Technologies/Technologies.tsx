import React, { useState } from "react";
import TextLoop from "react-text-loop";
import { Colmun, Row, Title, Img, RowEdited } from "./styles";

const imgs = [
  "/static/reactIcon.png",
  "/static/firebaseicon.png",
  "/static/rn.png",
  "/static/redux.png",
  "/static/jsicon.jpg",
  "/static/mongodb.png",
];

const Technologies = () => {
  return (
    <RowEdited>
      <div>
        Specialized in JavaScript with over a two years of experience in building the
        web and working with technologies like
        <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
          <Row>
            {" "}
            <Img src={imgs[0]} alt="pic" />
            <Title>ReactJS</Title>
          </Row>
          <Row>
            <Img src={imgs[1]} alt="pic" />
            <Title>Firebase</Title>
          </Row>
          <Row>
            {" "}
            <Img src={imgs[2]} alt="pic" />
            <Title>React Native</Title>
          </Row>
          <Row>
            <Img src={imgs[3]} alt="pic" style={{ width: "70px" }} />
            <Title>Redux</Title>
          </Row>
          <Row>
            <Img src={imgs[4]} alt="pic" />
            <Title>Nodejs</Title>
          </Row>
        </TextLoop>
      </div>
      {/* <style jsx>
        {`
          .colmun {
            display: flex;
            flex-direction: column;
          }
          .row {
            display: flex;
            width: 700px;
            font-size: 1.5em;
            overflow: hidden;
          }
          .img {
            width: 50px;
            height: 50px;
            position: relative;
            top: -10px;
          }
          .title {
            font-size: 1em;
            font-weight: bolder;
            color: black;
            border-radius: 5px;
            width: 35%;
          }
          @media only screen and (max-width: 767px) {
            .title {
              font-size: 1em;
              font-weight: bolder;
              color: black;
              border-radius: 5px;
              width: 35%;
            }
            .row {
              display: flex;
              width: 300px;
              font-size: 1.5em;
              overflow: hidden;
            }
          }
        `}
      </style> */}
    </RowEdited>
  );
};

export default Technologies;
