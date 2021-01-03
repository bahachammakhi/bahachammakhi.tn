import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx global>
            {`
              body {
                overflow-x: hidden;
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
        </body>
      </Html>
    );
  }
}
