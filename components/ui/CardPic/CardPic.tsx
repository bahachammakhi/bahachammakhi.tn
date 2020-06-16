import React, { useEffect, useState } from "react";
import { Wrapper, Img } from "./styles";
interface Props {
  width?: string;
  reswidth?: string;
  img?: string;
  title?: string;
}

const CardPic = ({ width, reswidth, img, title }: Props) => {
  const [cardwidth, setCardWidth] = useState(width);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setCardWidth(reswidth);
    }
  }, []);
  return (
    <Wrapper cardwidth={cardwidth}>
      <Img src={img} alt="ImageComponent" />
      <span>{title}</span>
    </Wrapper>
  );
};
export default CardPic;
