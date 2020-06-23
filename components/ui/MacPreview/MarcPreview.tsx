import React from "react";

import styled from "styled-components";

const Preview = styled.img<any>`
  /* background-image: ${(props: any) => `url(${props.src})`}; */
  width: ${(props: any) => props.width};
  cursor:pointer;
  @media screen and (max-width: 480px) {
width:300px;
}
`;
const Cover = styled.img<any>`
  cursor: pointer;
  position: absolute;
  width: ${(props: any) => props.width};
  top: ${(props: any) => props.top};
  left: ${(props: any) => props.left};
  @media screen and (max-width: 760px) {
    width: 220px;
    top: 3vw;
    left: 10vw;
  }
`;

export { Preview, Cover };
