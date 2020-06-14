import styled, { css, keyframes } from "styled-components";

const Colmun = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
`;
const RowEdited = styled.div`
  display: flex;
  width: 700px;
  font-size: 1.5em;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    display: flex;
    width: 300px;
    font-size: 1.5em;
    overflow: hidden;
  }
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  top: -10px;
`;
const Title = styled.span`
  font-size: 1em;
  font-weight: bolder;
  color: black;
  border-radius: 5px;
  width: 35%;
  @media only screen and (max-width: 767px) {
    font-size: 1em;
    font-weight: bolder;
    color: black;
    border-radius: 5px;
    width: 35%;
  }
`;
export { Colmun, Row, Title, Img, RowEdited };
