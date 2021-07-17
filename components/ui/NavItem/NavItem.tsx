import React from "react";
import Link from "next/link";

interface Props {
  path: string;
  content?: string;
  activated: boolean;
}

const NavItem = ({ path, content, activated }: Props) => {
  if(content === "Articles") return <a style={{
          textDecoration: "none",
          color: activated ? "black" : "gray",
          marginLeft: "60px",
          cursor: "pointer",
        }} href="blog.bahachammakhi.tn" target="_self">Articles</a>
  return (
    <Link href={path}>
      <p
        style={{
          textDecoration: "none",
          color: activated ? "black" : "gray",
          marginLeft: "60px",
          cursor: "pointer",
        }}
      >
        {content}
      </p>
    </Link>
  );
};
export default NavItem;
