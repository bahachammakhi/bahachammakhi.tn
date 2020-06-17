import React, { useState } from "react";
import { RightSquareOutlined } from "@ant-design/icons";

//Components
import SideNav from "../SideNav/SideNav";
import { Nav, SideNav as SidenavWrapper, Icons, Logo } from "./styles";
import logo from "../logo.jpg";

const ResponsiveHeader = ({ match }: any) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Nav>
        <RightSquareOutlined
          style={{
            fontSize: "30px",
            color: "#333333",
            padding: "15px",
          }}
          onClick={() => {
            setOpened(true);
          }}
        />
        <Icons>
          {/* <a href="www.facebook.com/bahachammakhi2" target="_blank">
            <Icon
              type="facebook"
              style={{ color: "black", cursor: "pointer" }}
            />
          </a>
          <a href="https://github.com/bahachammakhi" target="_blank">
            <Icon
              type="github"
              style={{ paddingLeft: "10px", color: "black", cursor: "pointer" }}
            />
          </a>
          <a href="https://www.instagram.com/bahachammakhi/" target="_blank">
            <Icon
              type="instagram"
              style={{ paddingLeft: "10px", color: "black", cursor: "pointer" }}
            />
          </a> */}
        </Icons>
      </Nav>
      <SidenavWrapper>
        {opened ? (
          <div
            style={{ height: "700px" }}
            className=" sidenav animated slideInLeft"
          >
            <SideNav
              matche={match}
              setOpen={setOpened}
              navitems={["Home", "Contact"]}
            />{" "}
          </div>
        ) : (
          <></>
        )}
      </SidenavWrapper>
    </>
  );
};

export default ResponsiveHeader;
