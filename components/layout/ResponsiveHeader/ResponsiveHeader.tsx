import React, { useState } from "react";
import { RightSquareOutlined } from "@ant-design/icons";

//Components
import SideNav from "../SideNav/SideNav";
import { Nav, SideNav as SidenavWrapper, Icons, Logo } from "./styles";

const ResponsiveHeader = ({ match, social }: any) => {
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
          {social.length > 0 ? (
            social?.map((element) => {
              return (
                <a href={element?.link}>
                  <Logo
                    width="30px"
                    style={{ marginRight: "15px", cursor: "pointer" }}
                    alt="logo"
                    src={`/static/social/${element?.name}-original.svg`}
                  />
                </a>
              );
            })
          ) : (
            <></>
          )}
        </Icons>
      </Nav>
      <SidenavWrapper>
        {opened ? (
          <div style={{ height: "700px", zIndex: 50000, position: "static" }}>
            <SideNav
              matche={match}
              setOpen={setOpened}
              navitems={["Home", "Projects", "Articles", "Contact"]}
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
