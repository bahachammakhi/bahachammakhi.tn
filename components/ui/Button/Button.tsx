import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  path: string;
  content?: string;
  width: string;
  height: string;
  executed: boolean;
}

const ButtonWrapper = styled.div`
  background-color: #2a878f;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 6.5px #999;
  :active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const Content = styled.div`
  color: white;
  text-align: center;
  padding-top: 10%;
`;

const Button = ({ path, content, width, height, executed }: Props) => {
  return (
    <>
      {executed ? (
        <ButtonWrapper style={{ width: width, height: height }}>
          <Content>{content}</Content>
        </ButtonWrapper>
      ) : (
        <Link href={path}>
          <ButtonWrapper style={{ width: width, height: height }}>
            <Content>{content}</Content>
          </ButtonWrapper>
        </Link>
      )}
    </>
  );
};

export default Button;
