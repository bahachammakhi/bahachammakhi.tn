import styled, { keyframes } from "styled-components";

const Row = styled.div`
  display: flex;
  padding-bottom: 50px;
  flex-wrap: wrap;
`;
const Wrap = styled.div`
  padding: 100px;
  @media screen and (max-width: 780px) {
    padding: 50px;
  }
`;
const Title = styled.div`
  width: 40vw;
  @media screen and (max-width: 780px) {
    width: 80vw;
  }
`;

const ModalImg = styled.div`
  display: ${(props) =>
    props.display ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 25vh; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
`;
const Img = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
`;
const Image = styled.img`
  width: ${(props) => props.width};
  border: 1px solid black;

  @media screen and (max-width: 780px) {
    width: ${(props) => props.widthmobile};
  }
`;
const SvgIllustration = styled.img`
  width: ${(props) => props.width};
`;
const Close = styled.span`
  position: absolute;
  top: 15vh;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  :hover {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
  :focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`;
export { Row, SvgIllustration, Image, Img, Close, Wrap, ModalImg, Title };
