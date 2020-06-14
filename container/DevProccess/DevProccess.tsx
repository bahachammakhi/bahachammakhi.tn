import React, { useState } from "react";
import StepsCircle from "../../components/ui/StepsCircle/StepsCircle";
import { Steps, Line, Content, ContentText, Button } from "./styles";
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
  return data.map((element) => {
    return (
      <>
        <StepsCircle
          activated={current === element.step}
          done={current > element.step}
          number={element.step.toString()}
          step={element.title}
        />
        <Line
          style={{
            backgroundColor: current > element.step ? "#2A878F" : "gray",
          }}
        />
      </>
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
        {data.slice(current, current + 1).map((el) => {
          return <ContentText>{el.content}</ContentText>;
        })}
        /** Needs some fixes here ! */
        <Button
          style={{ display: current < 2 ? "" : "none" }}
          onClick={() => nextStep()}
        >
          Next
        </Button>
        <Button
          width="80px"
          style={{ display: current > 0 ? "" : "none" }}
          onClick={() => previousStep()}
        >
          Previous
        </Button>
      </Content>
    </>
  );
};

export default DevProccess;
