import React from "react";
import { Flex, Box, Card, Heading, Text, Button } from "rebass";
import { Label, Input, Textarea } from "@rebass/forms";

export default function Contact() {
  return (
    <Flex alignItems="center" p={4}>
      <Box width={[1, 1]} alignSelf="center">
        <Card
          sx={{
            p: 4,
            borderRadius: 30,
            backgroundColor: "mygray",
          }}
        >
          <Heading as="h1" py={3}>
            CONTACT
          </Heading>
          <Text fontSize={5} py={3}>
            お問い合わせ
          </Text>
          <Box as="form" data-netlify="true" data-netlify-recaptcha="true">
            <Flex alignItems="center">
              <Box width={1} px={2}>
                <Label py={3} htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  required={true}
                  defaultValue=""
                />
              </Box>
              <Box width={1} px={2}>
                <Label py={3} htmlFor="name">
                  お名前
                </Label>
                <Input id="name" name="name" required={true} defaultValue="" />
              </Box>
            </Flex>
            <Flex flexWrap="wrap">
              <Box width={1} px={2}>
                <Label py={3} htmlFor="contact">
                  お問い合わせ内容
                </Label>
                <Textarea
                  height={200}
                  id="contact"
                  name="contact"
                  required={true}
                  defaultValue=""
                />
              </Box>
              <Box my={4} px={2}>
                <Button type="submit" backgroundColor="myblue">
                  送信
                </Button>
              </Box>
            </Flex>
          </Box>
        </Card>
      </Box>
    </Flex>
  );
}