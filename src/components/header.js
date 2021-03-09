import React from "react";
import { Flex, Link, Box, Text } from "rebass";
import { StaticImage } from "gatsby-plugin-image";

export default function Header() {
  return (
    <Flex p={4} alignItems="center">
      <Link href="/">
        <StaticImage
          src="../images/arshub.svg"
          alt="ArsHub"
          placeholder="BASE64"
          height={30}
          layout="constrained"
        />
      </Link>
      <Flex ml="auto">
        <Link px={3} variant="nav" href="/services">
          <Text>Services</Text>
        </Link>
        <Link px={3} variant="nav" href="/">
          <Text>Contact</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
