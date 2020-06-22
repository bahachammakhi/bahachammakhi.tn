import React, { useState } from "react";
import StepsCircle from "../../components/ui/StepsCircle/StepsCircle";
import {
  Steps,
  Line,
  Content,
  ContentText,
  Button,
  ButtonWrapper,
} from "./styles";
// import contentLoading from "../hoc/contentLoading";

const data = [
  {
    content:
      "We will plan together and design a prototype with great user experience and user interface using AdobeXD, Figma, ...",
    title: "Design",
    step: 0,
  },
  {
    content:
      "I will develop your website, mobile app with the Hottest technologies  to make your next app Fast, scalable, secure ",
    title: "Development",
    step: 1,
  },
  {
    content: "Testing your app  and fixing bugs is an important phase",
    title: "Testing",
    step: 2,
  },
];

const StepsContainer = (current) => {
  const length = data.length - 1;
  return data.map((element, index) => {
    const number = element.step + 1;
    return (
      <div key={index} style={{ display: "flex" }}>
        <StepsCircle
          activated={current === element.step}
          done={current > element.step}
          number={number.toString()}
          step={element.title}
        />
        {index < length ? (
          <Line
            style={{
              backgroundColor: current > element.step ? "#2A878F" : "gray",
              position: "relative",
              top: "20px",
            }}
          />
        ) : (
          <></>
        )}
      </div>
    );
  });
};

const DevProccess = () => {
  const [current, changeCurrent] = useState(0);
  function nextStep() {
    if (current < 2) {
      changeCurrent(current + 1);
    }
  }
  function previousStep() {
    if (current > 0) {
      changeCurrent(current - 1);
    }
  }

  return (
    <>
      <Steps>{StepsContainer(current)}</Steps>
      <Content>
        {data.slice(current, current + 1).map((el, index) => {
          return <ContentText key={index}>{el.content}</ContentText>;
        })}
        /** Needs some fixes here ! */
        <ButtonWrapper>
          <Button
            width="80px"
            style={{ display: current > 0 ? "" : "none" }}
            onClick={() => previousStep()}
          >
            Previous
          </Button>
          <Button
            style={{ display: current < 2 ? "" : "none" }}
            onClick={() => nextStep()}
          >
            Next
          </Button>
        </ButtonWrapper>
      </Content>
    </>
  );
};

export default DevProccess;
