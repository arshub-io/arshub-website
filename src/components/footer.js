import React from "react";
import { Link } from "gatsby";
import { Flex, Box, Text } from "rebass";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <Flex as="footer" p={3} alignItems="center" backgroundColor="">
      <Box p={4} width={1}>
        <Link to="/">
          <StaticImage
            src="../images/arshub.svg"
            alt="ArsHub"
            height={30}
            layout="constrained"
            placeholder="BASE64"
          />
        </Link>
        <Box py={3} color="gray">
          <Text p={1}>東京都 杉並区</Text>
          <Text p={1}>Copyright ©︎ArsHub Inc.</Text>
        </Box>
      </Box>
      <Box py={3} width={1}>
        <Box color="gray">
          <Text p={1}>会社名：合同会社ArsHub</Text>
          <Text p={1}>設立：2021年2月</Text>
          <Text p={1}>代表：篠田虎彦</Text>
          <Text p={1}>資本金：100,000円</Text>
        </Box>
      </Box>
    </Flex>
  );
}
