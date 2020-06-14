import React from "react";
import { Row, Circle } from "./styles";

interface Props {
  number?: string;
  step?: string;
  activated: boolean;
  done?: boolean;
}

const StepsCircle = ({ number, step, activated, done }: Props) => {
  let background = "";
  let border = "gray";
  let color = "black";
  let colortitle = "gray";
  if (activated === true && done === false) {
    background = "#2A878F";
    color = "white";
    border = "1px solid rgb(189, 189, 189)";
    colortitle = "black";
  } else if (activated === false && done === false) {
    background = "";
    color = "black";
    border = "1px solid rgb(189, 189, 189)";
    colortitle = "gray";
  } else if (activated === false && done === true) {
    background = "";
    color = "#2A878F";
    colortitle = "gray";
    border = "3px solid #2A878F";
    number = "✔";
  }

  return (
    <Row>
      <Circle
        style={{ backgroundColor: background, color: color, border: border }}
      >
        {number}
      </Circle>
      <span style={{ color: colortitle, fontSize: "1.5em", padding: "10px" }}>
        {step}
      </span>
    </Row>
  );
};

export default StepsCircle;
