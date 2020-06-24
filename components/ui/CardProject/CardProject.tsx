import React, { useState } from "react";
import Link from "next/link";
import {
  CardWrapper,
  CardContent,
  CardTextTitle,
  CardTextParag,
  Square,
  NextArrow,
  Row,
  Circle,
  CardAnimationWrapper,
  Rectangle,
  Image,
  LittleCard,
  RowModi,
  Column,
  IconLink,
} from "./style";
// import contentLoading from "../../hoc/contentLoading";

const technologies = ["CSS", "JS", "Typescript", "React", "Nodejs"];

interface Props {
  data?: any;
}

const TechnologiesCard = technologies.map((el) => (
  <LittleCard>{el}</LittleCard>
));

const CardFront = ({ data, handleChange }: any) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardTextTitle>{data?.name}</CardTextTitle>
        <CardTextParag>{data?.description}</CardTextParag>
      </CardContent>
      <CardContent>
        <Row>
          <Square>{data?.finished_at}</Square>
          <Link
            href={{
              pathname: `/projects/${data?._id}`,
            }}
          >
            <Circle
            //  onClick={() => handleChange(true)}
            >
              <NextArrow />
              <NextArrow style={{ top: "-12px", right: "-15px" }} />
            </Circle>
          </Link>
        </Row>

        <img
          src={
            data?.logo?.formats?.thumbnail?.url
              ? data?.logo?.formats?.thumbnail?.url
              : data?.logo?.url
          }
          style={{
            position: "relative",
            zIndex: 0,
            top: "-25px",
            width: "150px",
          }}
          alt={data?.name}
        />
      </CardContent>
    </CardWrapper>
  );
};

const CardBack = ({ data, handleChange }: any) => {
  return (
    <CardWrapper>
      <CardContent>
        <Circle onClick={() => handleChange(false)} direction>
          <NextArrow direction="right" style={{ top: "8px" }} />
          <NextArrow direction="right" style={{ top: "-12px", left: "16px" }} />
        </Circle>

        <RowModi>
          {/* <Image src={data?.cover?.url} alt={data?.name} /> */}
          <img
            src={data?.cover?.formats?.thumbnail?.url}
            style={{
              // position: "relative",
              // zIndex: 0,
              // top: "-25px",
              width: "300px",
            }}
            alt={data?.name}
          />
          <Column>
            {data?.github ? (
              <IconLink
                onClick={() => {
                  window.open(data?.github);
                }}
                alt="github"
                src={"https://image.flaticon.com/icons/svg/25/25231.svg"}
              />
            ) : (
              <div />
            )}
            {data?.link ? (
              <IconLink
                onClick={() => {
                  window.open(data?.link);
                }}
                alt="link"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1JYtAzNaHYOw6fbIzAXOMjTRo7y4RDCbA4FdfRCG8jJ75Gb74g&s"
                }
              />
            ) : (
              <div />
            )}
          </Column>
        </RowModi>
      </CardContent>

      <Rectangle>{TechnologiesCard}</Rectangle>
    </CardWrapper>
  );
};
const CardProject = ({ data }: Props) => {
  const [change, handleChange] = useState(false);

  return (
    <div style={{ padding: "20px", paddingLeft: "0px" }}>
      {/* {change ? (
        <CardBack data={data} handleChange={handleChange} />
      ) : ( */}
      <CardFront data={data} handleChange={handleChange} />
      {/* )} */}
    </div>
  );
};
// export default contentLoading(false)(CardProject);
export default CardProject;
