import styled, { css, keyframes } from "styled-components";

const mymove = keyframes`
  from {
              transform: rotateX(90deg);
            }
            to {
              transform: rotateX(0deg);
            }
`;
const fade = keyframes`
  from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
`;
const Wrapper = styled.div<any>`
  background-color: white;
  width: 550px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  animation-name: ${mymove};
  animation-duration: 1s;
  flex-wrap: wrap;
  position: relative;
  display: flex;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media only screen and (max-width: 767px) {
    width: 300px;
  }
`;
const Title = styled.h1<any>`
  font-weight: bold;
  font-size: 1.4em;
  color: #2a878f;
  @media only screen and (max-width: 767px) {
    font-weight: bold;
    font-size: 19px;
  }
`;
export { Title, Wrapper };
