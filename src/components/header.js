import React from "react";
import { Flex, Link } from "rebass";
import { StaticImage } from "gatsby-plugin-image";

export default function Header() {
  return (
    <Flex p={4} alignItems="center">
      <Link href="/">
        <StaticImage
          src="../images/arshub.svg"
          alt="ArsHub"
          height={30}
          layout="constrained"
          color="text"
        />
      </Link>
    </Flex>
  );
}
