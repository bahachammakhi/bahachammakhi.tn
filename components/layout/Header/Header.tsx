import React, { useState } from "react";
import { useRouter } from "next/router";
import { Logo } from "../SideNav/styles";
// import logo from "./../../img/logo.svg";
//Components
import NavItem from "../../ui/NavItem/NavItem";
import Button from "../../ui/Button/Button";
// import Logo from "./Logo";
const Links = [
  { name: "Home", pathname: "/" },
  { name: "Projects", pathname: "/projects" },
  { name: "Contact", pathname: "/contact" },
];
const NavItems = (pathname) => {
  return Links.map((element, index) => {
    return (
      <NavItem
        content={element.name}
        path={element.pathname}
        activated={element.pathname === pathname}
        key={index}
      />
    );
  });
};
const Header = ({ match }: any) => {
  const [state, changestate] = useState(true);
  const router = useRouter();
  return (
    <>
      <div className="wrapper">
        {/* <div className="logo">
        Baha chammakhi
        </div> */}
        <img
          src="/static/default-monochrome-black.svg"
          className="logo"
          width="300px"
          style={{ top: "-100px", position: "relative" }}
          height="300px"
          alt="logo"
        />
        <div className="navigation">{NavItems(router.pathname)}</div>
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
    </>
  );
};
export default Header;
