import React from "react";
import { Card, Heading, Text } from "rebass";

export default function MyCard({ title, content, color }) {
  return (
    <Card
      sx={{
        p: 4,
        borderRadius: 10,
        backgroundColor: color,
        boxShadow: "card",
      }}
    >
      <Heading as="h1" color="black" py={3}>
        {title}
      </Heading>
      <Text fontSize={3} color="gray" py={3}>
        {content}
      </Text>
    </Card>
  );
}
