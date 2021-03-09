import React from "react";
import { Flex, Box, Card, Heading, Text } from "rebass";
import MyCard from "./mycard";

export default function Services() {
  return (
    <Flex alignItems="center" p={4}>
      <Box width={[1, 1]} alignSelf="center">
        <Card
          sx={{
            px: 2,
            py: 4,
            borderRadius: 10,
          }}
        >
          <Heading as="h1" color="myblue" py={3}>
            Services
          </Heading>
          <Text fontSize={5} color="black" py={3}>
            受託開発
          </Text>
          <Text fontSize={4} color="black" py={3}>
            ブロックチェーン技術や、機械学習、ディープラーニングを用いたアプリケーション開発を行っています。
          </Text>
          <Text fontSize={4} color="black" pt={3}>
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
          <MyCard
            title="ブロックチェーン開発"
            content="Ethereumベースのトークン（ERC721等）の開発を行っております。またブロックチェーンのみの開発だけではなく、UI等含めたアプリケーションを含めて開発可能です。"
          />
          <MyCard
            title="Webシステム開発"
            content="toC向けから社内システムまで幅広く開発を行っております。サーバーやAPI、データベース構築も含めて開発可能です。"
          />
          <MyCard
            title="モバイルアプリ開発"
            content="Flutterを用いたiOS・Android両方に対応したアプリケーションの開発を行っております。"
          />
        </Card>
        <Card
          sx={{
            px: 2,
            py: 4,
            borderRadius: 10,
          }}
        >
          <Text fontSize={5} color="black" py={2}>
            自社開発
          </Text>
          <MyCard
            title="[開発中] Cybereum"
            content="楽曲をアートのように流通させる配信プラットフォームです。 "
          />
        </Card>
      </Box>
    </Flex>
  );
}
