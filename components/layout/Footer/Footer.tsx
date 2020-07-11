import React from "react";
import Button from "../../ui/Button/Button";
import { Wrapper, Copyrigth, Logo, Writing, Icon, Row, Img } from "./style";

export const SocialMedia = (logos: any) => {
  console.log("logos", logos);
  return logos.length > 0 ? (
    logos?.map((element: any) => {
      return (
        <Icon href={element.link} target="_blank">
          <Img alt="logo" src={`/static/social/${element.name}.svg`} />
        </Icon>
      );
    })
  ) : (
    <>Loading</>
  );
};
const Footer: any = ({ email, phone, footer, social_media, social }) => {
  return (
    <Wrapper>
      <Logo alt="Logo" src="/static/nobglogo.png" />
      <Writing>Living , Learning , Working</Writing>
      <Row>{SocialMedia(social)}</Row>
      <Copyrigth>{footer}</Copyrigth>
    </Wrapper>
  );
};

export default Footer;
