import React, { useState } from "react";
import Button from "../Button/Button";
// const [bo, changebo] = useState(false);
// let width = "100px";
// let height = "50px"
// if ( window.innerWidth > 768) {
//   width = "500px";
// }

// window.onresize = () => changebo(!bo);

const ContactHome = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="colmun">
          <p
            className="title"
            style={{ fontWeight: "bolder", color: "#2A878F" }}
          >
            Email
          </p>
          <p className="email">bahachammakhi25@gmail.com</p>
        </div>
        <Button
          content="Contact me"
          path="/contact"
          width="100px"
          height="50px"
          executed={false}
        />
      </div>
    </div>
  );
};

export default ContactHome;
