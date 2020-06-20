import React, { useState } from "react";

import ContactForm from "./ContactForm/ContactForm";
import Art from "../static/artcontact.jpg";
import InterButton from "../components/ui/InterButton/InterButton";
import styled, { css, keyframes } from "styled-components";
const Start = css`
  left: -450px;
`;
const End = css`
  left: 80px;
`;

const StartMB = css`
  left: -300px;
`;
const EndMB = css`
  left: 0;
`;

export const Img = styled.img<any>`
  width: 500px;
  margin-left: 50px;
  @media screen and (max-width: 1300px) {
    width: 0px;
  }
  @media screen and (max-width: 1000px) {
    width: 00px;
  }
  @media screen and (max-width: 780px) {
    width: 0px;
  }
`;
export const SectionWrapper = styled.div<any>`
  overflow: hidden;
  display: flex;
  position: relative;
  transition: left 3s;
  ${(props) => (props.start ? End : Start)}
  @media screen and (max-width: 780px) {
    width: 800px;
    ${(props) => (props.start ? EndMB : StartMB)}
  }
`;

const visible = css`
  opacity: 1;
`;
const invisible = css`
  opacity: 0;
`;

export const ButtonDiss = styled.div<any>`
  margin: auto;
  transition: opacity 5s;
  ${(props) => (props.start ? invisible : visible)}
  @media screen and (max-width: 780px) {
    margin: 10px;
  }
`;
const ContactSection = () => {
  const [start, handleStart] = useState(false);
  return (
    <SectionWrapper start={false}>
      <ContactForm />
      <Img src={Art} alt="art" />
      <ButtonDiss onClick={() => handleStart(true)} start={start}>
        <InterButton />
      </ButtonDiss>
    </SectionWrapper>
  );
};

export default ContactSection;
