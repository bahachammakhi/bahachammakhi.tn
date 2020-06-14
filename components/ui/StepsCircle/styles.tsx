import styled, { css, keyframes } from "styled-components";

const Row = styled.div`
  display: flex;
`;

const Circle = styled.span`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid rgb(189, 189, 189);
  text-align: center;
  padding: 12px;
  @media only screen and (max-width: 767px) {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid rgb(189, 189, 189);
    text-align: center;
    padding: 12px;
  }
`;

export { Row, Circle };
