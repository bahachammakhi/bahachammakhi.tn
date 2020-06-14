import React from "react";

import styled, { css, keyframes } from "styled-components";

export const TopRightTriangle = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 0;
  height: 0;
  border-top: 80px solid #2a878f;
  border-left: 80px solid transparent;
`;

export const ImageIcon = styled.img<any>`
  width: 30px;
  position: relative;
  top: -70px;
  right: 40px;
`;
