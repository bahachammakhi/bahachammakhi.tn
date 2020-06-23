import React, { useState } from "react";
import { InterButtonOnHover } from "../Inter2Button/Inter2Button";
import { TopRightTriangle, ImageIcon } from "../Shapes/Shapes";
// import contentLoading from "../../hoc/contentLoading";
import { Title, Wrapper } from "./styles";

interface Props {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: Props) => {
  const [display, setdisplay] = useState(false);
  const Front = () => {
    return (
      <Wrapper
        onMouseEnter={(e) => {
          setdisplay(true);
          e.preventDefault();
        }}
      >
        <TopRightTriangle>
          <ImageIcon src={"/static/codeicon.png"} alt="web" />
        </TopRightTriangle>
        <div>
          <Title>{title}</Title>
          <p className="description">{description}</p>
        </div>

        <div style={{ display: "flex" }}>
          <InterButtonOnHover link="#contact">GET STARTED</InterButtonOnHover>
        </div>
      </Wrapper>
    );
  };

  const Back = () => {
    return (
      <Wrapper onMouseLeave={() => setdisplay(false)}>
        <TopRightTriangle>
          <ImageIcon
            src="http://cdn.onlinewebfonts.com/svg/img_545326.png"
            alt="web"
          />
        </TopRightTriangle>
        <div>
          {" "}
          <Title>Technologies:</Title>
          <p className="description">
            Front : Reactjs/Typescript/Javascript/CSS/Redux
          </p>
          <p className="description">
            Backend: NODEJS/Express/MongoDB/API REST
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <InterButtonOnHover link="#contact">GET STARTED</InterButtonOnHover>
        </div>
      </Wrapper>
    );
  };
  return <>{display ? <Back /> : <Front />}</>;
};
// export default contentLoading(false)(ServiceCard);
export default ServiceCard;
