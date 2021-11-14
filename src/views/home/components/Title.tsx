import { Heading, Center, Stack, Button, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";

interface TitleProps {}

const TitleLine: React.FC = ({ children }) => {
  return (
    <Heading
      fontSize={{ base: "2.5rem", sm: "3.75rem", md: "5rem", lg: "6rem" }}
      fontWeight="500"
      lineHeight="95%"
      textAlign="center">
      {children}
    </Heading>
  );
};

const JoinButton: React.FC = () => (
  <Flex
    alignItems="center"
    justifyContent="space-around"
    bgGradient="linear-gradient(90deg, #c766ff 0%, #ff8b66 100%)"
    borderRadius="41px"
    width={{ base: "318px", md: "425px" }}
    height={{ base: "37px", md: "50px" }}
    fontWeight="500"
    textTransform="none"
    fontSize={{ base: "0.8rem", md: "1.2rem" }}
    marginTop="10px !important">
    <Text color="background">Join us for another year</Text>
    <Link href="https://bit.ly/techcodes">
      <Button
        bgColor="background"
        borderRadius="41px"
        width={{ base: "97px", md: "170px" }}
        height={{ base: "30px", md: "40px" }}
        fontSize={{ base: "12px", md: "16px" }}
        fontWeight="500">
        <Text color="text">Sign up now</Text>
      </Button>
    </Link>
  </Flex>
);

const Title: React.FC<TitleProps> = ({}) => {
  return (
    <Center textTransform="uppercase" color="text" as={Stack} spacing={0}>
      <TitleLine>teaching students</TitleLine>
      <TitleLine>around the world</TitleLine>
      <TitleLine>how to code</TitleLine>
      <JoinButton />
    </Center>
  );
};

export default Title;
