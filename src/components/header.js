import React from "react";
import { Link } from "gatsby";
import { Flex, Button } from "rebass";

import { StaticImage } from "gatsby-plugin-image";

export default function Header() {
  return (
    <Flex p={4} alignItems="center">
      <Link to="/">
        <StaticImage
          src="../images/arshub.svg"
          alt="ArsHub"
          placeholder="BASE64"
          height={30}
          layout="constrained"
        />
      </Link>
      <Flex ml="auto">
        <Link to="/services">
          <Button variant="nav">Services</Button>
        </Link>
        <Link to="/contact">
          <Button variant="nav">Contact</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
