import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div<any>`
  min-height: 500px;
  position: relative;
  background: rgb(105, 129, 150);
  background: linear-gradient(
    90deg,
    rgba(105, 129, 150, 1) 0%,
    rgba(42, 135, 143, 1) 2%,
    rgba(5, 56, 129, 1) 85%
  );
`;

export const Copyrigth = styled.div<any>`
  font-size: 1.1rem;
  color: white;
  padding-top: 5px;
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 760px) {
    font-size: 0.8rem;
  }
`;

export const Logo = styled.img`
  padding-top: 25px;
  width: 43em;
  margin-left: 28vw;
  @media screen and (max-width: 760px) {
    padding-top: 15vh;
    width: 30em;
    margin-left: -5vw;
  }
`;
export const Writing = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: #b1acc3;
  @media screen and (max-width: 760px) {
    font-size: 1rem;
  }
`;
export const Icon = styled.a`
  width: 40px;
  position: relative;
  color: #262626;
  transition: 1.5s;
  z-index: 3;
  width: 60px;
  height: 60px;
  /* background-color: #fff; */
  text-align: center;
  line-height: 85px;
  font-size: 35px;
  margin: 0 10px;
  display: block;
  border-radius: 50%;
  position: relative;
  /* overflow: hidden; */
  border: 0.5px solid #fff;
  z-index: 1;
  :hover {
    color: #fff;
    transform: rotateY(360deg);
    background: black;
  }
  @media screen and (max-width: 760px) {
    width: 50px;
    height: 50px;
  }
`;
export const Row = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 760px) {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
`;
export const Img = styled.img`
  width: 30px;
  position: absolute;
  top: 15px;
  left: 15px;
  transition: 1.5s;
  z-index: 3;
  @media screen and (max-width: 760px) {
    width: 25px;
    top: 10px;
    left: 10px;
  }
`;
