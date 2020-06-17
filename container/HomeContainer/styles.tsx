import styled, { keyframes } from "styled-components";

interface ArtProps {
  width: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
  position: string;
  children: React.ReactNode;
  zindex: number;
  mobile: boolean;
}

const rotation = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
// const Img: React.FC<ArtProps> = (props): any => <>{props.children}</>;
export const Art = styled.img<ArtProps>`
  width: ${(props) => props.width};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zindex};
  overflow-x: hidden;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const GroupArt = styled.div`
  clip: rect(200px, 5000px, 5000px, 0px);
  overflow: hidden;
  animation: ${rotation} 8s infinite linear;
`;

export const Wrapper = styled.div`
  padding: 50px;
  max-width: 100vw;
  overflow-x: hidden;
  @media screen and (max-width: 780px) {
    padding: 30px;
  }
`;
