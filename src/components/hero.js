import React, { useState, useEffect, useRef } from "react";
import { Flex, Box, Text } from "rebass";
import * as THREE from "three";
import NET from "../vanta/vanta.net.min";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
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
          minHeight: 300.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x5225e3,
          backgroundColor: 0xffffff,
          points: 5.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef}>
      <Flex px={4} height="body" alignItems="center">
        <Box width={1} backgroundColor="">
          <Text fontSize={6} my={7} fontWeight="bold" alignSelf="center">
            アーティストの経済圏を構築する
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
