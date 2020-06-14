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
      <Img src={img} alt="img" />

      <span>{title}</span>
      {/* <style jsx>
        {`
          .img {
            width: 100%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 5px; 
          }
          .wrapper {
            overflow: hidden;
            padding: 20px;
            background-color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 5px; 
            text-align: center;
          }
          .wrapper:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }
        `}
      </style> */}
    </Wrapper>
  );
};
export default CardPic;
