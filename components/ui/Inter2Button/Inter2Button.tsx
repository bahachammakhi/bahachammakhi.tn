import React from "react";

import styled, { css, keyframes } from "styled-components";

const BackgroundAnimation = keyframes`
from{
  background-size: 10px 10px;
  background-color: #2A878F;
}
to{
  background-size: auto;
  background-color: #2A878F;
}
`;

export const Button = styled.div<any>`
  position: relative;
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  a {
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid #333;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }
  a span {
    position: relative;
    z-index: 2;
  }
  a:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #2a878f;
    transition: all 0.35s;
  }
  a:hover {
    color: #ffffff;
  }
  a:hover:after {
    width: 100%;
  }
  @media only screen and (max-width: 767px) {
    a {
      display: block;
      width: 130px;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      font-family: sans-serif;
      text-decoration: none;
      color: #333;
      border: 2px solid #333;
      letter-spacing: 2px;
      text-align: center;
      position: relative;
      transition: all 0.35s;
    }
  }
`;
export const ButtonAnimationWithoutLink = ({ children }) => {
  return <Button>{children}</Button>;
};
export const InterButtonOnHover = ({ children, link = "", target = false }) => (
  <Button>
    <a href={link} target={target ? "_blank" : ""}>
      <span>{children}</span>
    </a>
  </Button>
);
