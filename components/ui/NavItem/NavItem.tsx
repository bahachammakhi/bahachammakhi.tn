import React, { useState } from "react";
import Link from "next/link";

interface Props {
  path: string;
  content?: string;
  activated: boolean;
}

const NavItem = ({ path, content, activated }: Props) => {
  var color = "black";

  if (activated == true) {
    color = "black";
  } else {
    color = "gray";
  }
  return (
    <Link href={path}>
      <p style={{ textDecoration: "none", color: color, marginLeft: "60px" }}>
        {content}
      </p>
    </Link>
  );
};
export default NavItem;
