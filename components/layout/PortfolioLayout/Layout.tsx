import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Redux } from "../../../pages/_app";
import { useDidMount } from "../../../hooks/useLifeCycle";
import ResponsiveHeader from "../ResponsiveHeader/ResponsiveHeader";

interface Props {
  children: any;
}
const Layout = ({ children }: Props) => {
  const redux = useContext(Redux);
  const [state, setState] = useState(1800);

  // const resize = () => {
  //   if (window.innerWidth < 700) {
  //     setState(600);
  //   } else {
  //     setState(1800);
  //   }
  // };
  // window.addEventListener("resize", resize);
  useDidMount(() => {
    if (window.innerWidth < 700) {
      setState(600);
    }
    redux.calls.getSettings.call();
    redux.calls.getSocial.call();
  });
  const {
    email,
    description,
    phone,
    footer,
    social_media,
    uptowork,
  } = redux.calls.getSettings.data;
  const social = redux.calls.getSocial.data;
  const footerProps = { email, phone, footer, social_media, social };
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="header">
        {state < 700 ? <ResponsiveHeader /> : <Header />}
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <Footer {...footerProps} />
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          width: 100%;
          background-color: white;
          z-index: 5;
          overflow-x: hidden;
        }
        .body {
          padding: 20px;
          padding-top: 100px;
          overflow-x: hidden;
          max-width: 100vw;
        }

        @media only screen and (max-width: 767px) {
          .body {
            padding: 0px;
            padding-top: 80px;
            overflow-x: hidden;
          }

          .header {
            position: absolute;
            background-color: white;
            z-index: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
