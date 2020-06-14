import styled, { css, keyframes } from "styled-components";

const mymove = keyframes`
   from {
              transform: translate(0, -100px);
            }
            to {
              transform: translate(0, 0px);
            }
`;

export const Steps = styled.div`
  display: flex;
  @media screen and (max-width: 780px) {
    display: inline;
  }
`;

export const Line = styled.div`
  width: 200px;
  height: 2px;
  border-bottom: 1px solid rgba(156, 156, 156, 0);
  background-color: rgb(110, 108, 108);
  margin: 2%;

  @media screen and (max-width: 780px) {
    width: 50px;
    height: 2px;
    border-bottom: 1px solid rgba(156, 156, 156, 0);
    background-color: rgb(110, 108, 108);
    margin: 2%;
    display: none;
  }
`;

export const Content = styled.div`
  margin: 20px;
  margin-left: 15%;
  width: 700px;
  position: relative;
  height: 300px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  padding: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  overflow: hidden;
  @media screen and (max-width: 780px) {
    margin: 10px;
    margin-left: -5%;
    width: 300px;
    position: relative;
    height: 300px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    padding: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
  }
`;

export const ContentText = styled.p`
  animation: ${mymove} 1s ease-in;
`;

export const Button = styled.div`
  background-color: #2a878f;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 8px;
  width: ${(props: any) => (props?.width ? props.width : "60px")};
  height: 30px;
  padding: 6px;
  transition: 0.3s;
  color: white;
  cursor: pointer;
`;
