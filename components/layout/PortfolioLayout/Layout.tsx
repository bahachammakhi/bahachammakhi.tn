import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDidMount } from "../../../hooks/useLifeCycle";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  const [state, setState] = useState(1800);
  // const resize = () => {
  //   if (window.innerWidth < 700) {
  //     setState(600);
  //   } else {
  //     setState(1800);
  //   }
  // };
  // window.addEventListener("resize", resize);
  // useDidMount(() => {
  //   if (window.innerWidth < 700) {
  //     setState(600);
  //   }
  // });
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <Footer />
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          width: 100%;
          background-color: white;
          z-index: 5;
          overflow: hidden;
        }
        .body {
          padding: 20px;
          padding-top: 100px;
          overflow: hidden;
        }

        @media only screen and (max-width: 767px) {
          .body {
            padding: 0px;
            padding-top: 80px;
            overflow: hidden;
          }

          .header {
            position: absolute;
            background-color: white;
            z-index: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
