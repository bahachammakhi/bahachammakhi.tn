import styled, { css, keyframes } from "styled-components";
import { cpuUsage } from "process";

const Img = styled.img`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
`;
const Wrapper = styled.div`
  overflow: hidden;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  text-align: center;
  width: ${(props: any) => props.cardwidth};
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export { Img, Wrapper };
