import React from "react";
import { Card, Heading, Text } from "rebass";

export default function MyCard({ title, content }) {
  return (
    <Card
      sx={{
        p: 4,
        m: 4,
        borderRadius: 10,
        backgroundColor: "white",
        boxShadow: "card",
      }}
    >
      <Heading as="h1" color="black" py={3}>
        {title}
      </Heading>
      <Text fontSize={3} color="black" py={3}>
        {content}
      </Text>
    </Card>
  );
}
