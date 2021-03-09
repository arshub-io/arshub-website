import React, { useState, useEffect, useRef } from "react";
import { Flex, Box, Text } from "rebass";
import * as THREE from "three";
import NET from "../vanta/vanta.net.min";
import useWindowSize from "../hooks/useWindowSize";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const { height } = useWindowSize();

  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE: THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 0.0,
          minWidth: 0.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x5225e3,
          backgroundColor: 0xffffff,
          points: 4.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Flex height={height - 100} flexWrap="wrap" alignItems="center" ref={myRef}>
      <Box px={4} my={3}>
        <Text fontSize={6} fontWeight="bold" alignSelf="center">
          アーティストの経済圏を構築する
        </Text>
        <Text fontSize={4} color="gray">
          ブロックチェーン技術（NFT）を用いた新しい経済圏の構築します
        </Text>
      </Box>
    </Flex>
  );
}
