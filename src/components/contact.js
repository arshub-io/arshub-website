import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {Flex, Box, Card, Heading, Text, Button} from "rebass";
import {Label, Input, Textarea} from "@rebass/forms";

export default function Contact() {
  return (
    <Flex alignItems="center" p={4}>
      <Box width={[1, 1]} alignSelf="center">
        <Card
          sx={{
            px: 2,
            py: 4,
            borderRadius: 30,
          }}
        >
          <Heading as="h1" color="myblue" py={3}>
            Contact
          </Heading>
          <Text fontSize={5} py={3}>
            お問い合わせ
          </Text>
          <Box
            as="form"
            name="contact"
            data-netlify="true"
            data-netlify-recaptcha="true"
            method="POST"
            action="/thanks"
          >
            <input type="hidden" name="form-name" value="contact" />
            <Flex alignItems="center">
              <Box width={1} px={2}>
                <Label py={3} htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
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
                <Label py={3} htmlFor="content">
                  お問い合わせ内容
                </Label>
                <Textarea
                  height={200}
                  id="content"
                  name="content"
                  required={true}
                  defaultValue=""
                />
              </Box>
              <Box my={4} px={2}>
                <ReCAPTCHA sitekey={process.env.SITE_RECAPTCHA_KEY} />
                <Button my={4} type="submit" backgroundColor="myblue">
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
