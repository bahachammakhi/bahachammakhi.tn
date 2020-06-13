import React, { useState } from "react";
import classes from "./css/header.module.scss";
// import logo from "./../../img/logo.svg";
//Components
import NavItem from "../../ui/NavItem/NavItem";
import Button from "../../ui/Button/Button";
// import Logo from "./Logo";

const Header = ({ match }: any) => {
  const [state, changestate] = useState(true);
  // console.log(match);
  let home = false;
  let work = false;
  let contact = false;
  if (match.path === "/") {
    home = true;
    work = false;
    contact = false;
  } else if (match.path === "/work") {
    home = false;
    work = true;
    contact = false;
  } else if (match.path === "/contact") {
    home = false;
    work = false;
    contact = true;
  }
  let display = "none";
  if (state === true) {
    display = "none";
  } else {
    display = "";
  }
  return (
    <div>
      <div className="wrapper">
        <div className="logo">Baha chammakhi</div>
        <div className="navigation">
          <NavItem content="Home" path={"/"} activated={home} />
          {/* <NavItem content="Work" path={"/work"} activated={work} /> */}
          <NavItem content="Contact me" path={"/contact"} activated={contact} />
        </div>
        <div className="button">
          <Button
            path="/contact"
            content="Hire me"
            width="100px"
            height="40px"
            executed={false}
          />
        </div>
      </div>
      <style jsx>{`
        @import url(
          https://fonts.googleapis.com/css?family=Raleway:400,
          700,
          900,
          400italic,
          700italic,
          900italic
        );

        .wrapper {
          display: flex;
          overflow: hidden;
          height: 100px;
          background-color: rgb(255, 255, 255);
          border-bottom: 1px solid rgb(173, 173, 173);
        }
        .logo {
          animation: text-shadow 2s ease-in-out infinite;
          padding: 40px;
          font-size: 2em;
          font-weight: 900;
          line-height: 1;
        }

        .logo:hover {
          animation-play-state: paused;
        }

        .navigation {
          display: flex;
          font-size: 2.5vh;
          padding: 40px;
        }
        .button {
          position: absolute;
          margin-top: 1%;
          right: 47px;
        }
        .mobilebutton {
          display: none;
        }
        @media only screen and (max-width: 910px) {
          .logo {
            margin-left: 2%;
          }
        }

        @keyframes text-shadow {
          0% {
            transform: translateY(0);
            text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b,
              0 0 0 #fefc4b;
          }

          20% {
            transform: translateY(-1em);
            text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd,
              0 -0.125em 0 #fb203b, 0 -0.25em 0 #fefc4b;
          }

          40% {
            transform: translateY(0.5em);
            text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
              0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
          }

          60% {
            transform: translateY(-0.25em);
            text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
              0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
          }

          80% {
            transform: translateY(0);
            text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b,
              0 0 0 #fefc4b;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};
export default Header;
