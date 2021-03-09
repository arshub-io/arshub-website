import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { navigate } from "gatsby";
import { Flex, Box, Text, Button } from "rebass";
import { Link } from "gatsby";

export default function Home() {
  const [time, setTime] = useState(5);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
      console.log(time);
      if (time < 1) {
        navigate("/");
      }
    }, 1000);
  }, [time]);

  return (
    <>
      <Helmet>
        <html lang="ja" />
        <title>Thanks</title>
        <meta name="description" httpEquiv="reflesh" content="5; url=/" />
      </Helmet>
      <Flex flexWrap="wrap" alignItems="center">
        <Box width={[1 / 2]} p={4} mx="auto">
          <Text fontSize={4} fontWeight="bold">
            🛸 回答を送信しました。
          </Text>
          <Text fontSize={4} pb={4} fontWeight="bold">
            {time > 0 ? time : 0}秒後にホームに戻ります。
          </Text>
          <Link to="/">
            <Button variant="primary" ml="auto" p={3}>
              ホームに戻る
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}
