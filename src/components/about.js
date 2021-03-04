import React from "react";
import { Flex, Box, Card, Heading, Text } from "rebass";

export default function About() {
  return (
    <Flex alignItems="center" p={4}>
      <Box width={[1, 1]} alignSelf="center">
        <Card
          sx={{
            p: 4,
            borderRadius: 30,
            backgroundColor: "myblue",
          }}
        >
          <Heading as="h1" color="white" py={3}>
            About Us
          </Heading>
          <Text fontSize={6} color="white" py={3}></Text>
          <Text fontSize={4} color="white" py={3}>
            ブロックチェーン技術や、機械学習、ディープラーニングを用いたアプリケーションの開発を行っています。
          </Text>
        </Card>
      </Box>
    </Flex>
  );
}
