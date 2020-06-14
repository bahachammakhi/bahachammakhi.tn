import React, { useState, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { Wrapper, NavItem } from "./styles";
import Button from "../../ui/Button/Button";
const navlinks = (navitems, router) =>
  navitems.map((item: String) => {
    const path =
      item === "Home" ? "/" : item.charAt(0).toLowerCase() + item.substring(1);
    return router.pathname === `/${path}` ||
      (router.pathname === "/" && item === "Home") ? (
      <NavItem
        style={{
          color: "#4285F4",
          textDecoration: "none",
          backgroundColor: "#d3f0ec",
          borderRadius: "5px",
        }}
      >
        <Link href={path}>{item}</Link>
      </NavItem>
    ) : (
      <NavItem
        style={{
          color: "black",
          textDecoration: "none",
        }}
      >
        <Link href={path}>{item}</Link>
      </NavItem>
    );
  });

const SideNav = ({ navitems, matche, setOpen }: any) => {
  const router = useRouter();
  return (
    <Wrapper>
      <CloseOutlined
        style={{ fontSize: "20px", padding: "20px" }}
        onClick={() => {
          setOpen(false);
        }}
      />
      {navlinks(navitems, router)}

      <div>
        <hr />
        <span
          style={{
            color: "#4285F4",
            position: "relative",
            bottom: "0px",
            textAlign: "center",
          }}
        >
          Always updating this
        </span>
        <div style={{ padding: "10px" }}>
          <Button
            path="/contact"
            content="Hire me"
            width="100px"
            height="40px"
            executed={false}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default SideNav;
