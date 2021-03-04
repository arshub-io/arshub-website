import React from "react";
import { Flex, Box, Card, Heading, Text } from "rebass";
import MyCard from "./mycard";

export default function Services() {
  return (
    <Flex alignItems="center" p={4}>
      <Box width={[1, 1]} alignSelf="center">
        <Card
          sx={{
            p: 4,
            borderRadius: 10,
          }}
        >
          <Heading as="h1" color="black" py={3}>
            What We Do?
          </Heading>
          <Text fontSize={6} color="black" py={3}>
            自社開発
          </Text>
          <MyCard
            title="Cybereum"
            content="楽曲をアートのように流通させる配信プラットフォームです。 "
          />
          <Text fontSize={6} color="black" py={3}>
            受託開発
          </Text>
          <Text fontSize={4} color="black" py={3}>
            ブロックチェーン技術や、機械学習、ディープラーニングを用いたアプリケーション開発を行っています。
          </Text>
          <Text fontSize={4} color="black" py={3}>
            主な取引先
          </Text>
          <ul>
            <li>
              <Text fontSize={3} color="black" py={1}>
                株式会社 GURUGURU 様
              </Text>
            </li>
            <li>
              <Text fontSize={3} color="black" py={1}>
                株式会社 Gab 様
              </Text>
            </li>
          </ul>
          <MyCard title="ブロックチェーン" content="" />
          <MyCard title="機械学習・ディープラーニング" content="" />
          <MyCard title="アプリケーション開発" content="" />
        </Card>
      </Box>
    </Flex>
  );
}
