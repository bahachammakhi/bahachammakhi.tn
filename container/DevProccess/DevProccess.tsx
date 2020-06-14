import React, { useState } from "react";
import StepsCircle from "../../components/ui/StepsCircle/StepsCircle";
import { Steps, Line, Content, ContentText, Button } from "./styles";
// import contentLoading from "../hoc/contentLoading";

const data = [
  {
    content:
      "We will plan together and design a prototype with great user experience and user interface using AdobeXD, Figma, ...",
    title: "Design",
  },
  {
    content:
      "I will develop your website, mobile app with the Hottest technologies  to make your next app Fast, scalable, secure ",
    title: "Development",
  },
  {
    content: "Testing your app  and fixing bugs is an important phase",
    title: "Testing",
  },
];

const DevProccess = () => {
  let step1 = true;
  let step2 = false;
  let step3 = false;
  let done1 = false;
  let done2 = false;
  let done3 = false;
  let buttontext = "Next";
  let display = "none";
  let display2 = "";
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
  if (current === 0) {
    step1 = true;
    step2 = false;
    step3 = false;
    display = "none";
    display2 = "";
  } else if (current === 1) {
    step1 = false;
    step2 = true;
    step3 = false;
    done1 = true;
    display = "";
    display2 = "";
  } else if (current === 2) {
    step1 = false;
    step2 = false;
    step3 = true;
    done1 = true;
    done2 = true;
    buttontext = "Done";
    display = "";
    display2 = "none";
  }
  console.log("dispaly", display, "2", display2);
  return (
    <>
      <Steps>
        <StepsCircle
          activated={step1}
          done={done1}
          number="1"
          step={data[0].title}
        />
        <Line
          style={{
            backgroundColor:
              current === 1 || current === 2 ? "#2A878F" : "gray",
          }}
        />
        <StepsCircle
          activated={step2}
          done={done2}
          number="2"
          step={data[1].title}
        />
        <Line style={{ backgroundColor: current === 2 ? "#2A878F" : "gray" }} />
        <StepsCircle
          activated={step3}
          done={done3}
          number="3"
          step={data[2].title}
        />
      </Steps>
      <Content>
        {data.slice(current, current + 1).map((el) => {
          return <ContentText>{el.content}</ContentText>;
        })}
        <Button style={{ display: display2 }} onClick={() => nextStep()}>
          {buttontext}
        </Button>
        <Button
          width="80px"
          style={{ display: display }}
          onClick={() => previousStep()}
        >
          Previous
        </Button>
      </Content>
    </>
  );
};

export default DevProccess;
