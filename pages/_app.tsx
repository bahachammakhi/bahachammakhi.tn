import React from "react";
import "antd/dist/antd.css";

const MyApp = ({ Component, pageProps }: any): any => {
  return (
    <>
      {" "}
      <Component {...pageProps} />{" "}
      <style global jsx>
        {`
          body {
            @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
            background: rgb(227, 228, 228);
            background: linear-gradient(
              90deg,
              rgba(227, 228, 228, 0.6895133053221288) 0%,
              rgba(255, 255, 255, 1) 98%
            );
            font-family: "Montserrat", sans-serif;
          }
        `}
      </style>
    </>
  );
};
export default MyApp;
