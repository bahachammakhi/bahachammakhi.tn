import styled, { css, keyframes } from "styled-components";

const Card = styled.div`
  padding-left: 20%;
  padding-top: 10%;
  padding-bottom: 2%;

  @media only screen and (max-width: 767px) {
    padding-left: 10%;
    padding-top: 10%;
    padding-bottom: 2%;
  }
`;

const Wrapper = styled.div`
  max-height: 1000px;
  @media only screen and (max-width: 767px) {
  }
`;

const Button = styled.div`
  padding-left: 45%;
  padding-bottom: 10%;
  @media only screen and (max-width: 767px) {
    padding-left: 30%;
    padding-bottom: 10%;
  }
`;

const Title = styled.div`
  text-align: center;
  font-weight: bolder;
  @media only screen and (max-width: 767px) {
    margin-top: 10%;
  }
`;

export { Title, Card, Button, Wrapper };
