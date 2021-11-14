import React from "react";
import { Footer } from "@components";
import { Nav } from "@components";
import SectionWrapper from "../../components/SectionWrapper";
import { Heading, Flex, Box, Text, Link } from "@chakra-ui/react";

interface ErrorViewProps {}

const ErrorView: React.FC<ErrorViewProps> = ({}) => {
  return (
    <SectionWrapper>
      <Nav />
      <Flex w="100vw" h="45vh" justifyContent="space-around" alignItems="center" mt="8.5vh">
        <Heading fontSize="20vw" ml="5.5vw">
          404
        </Heading>
        <Box w="45vw">
          <Text textTransform="uppercase" fontSize="5vw" lineHeight="4.6vw" mb="40px">
            uh-oh. We couldn’t find that page!
          </Text>
          <Link
            href="/"
            border="1px solid white"
            borderRadius="3.5vw"
            textTransform="uppercase"
            fontSize="5vw"
            padding="0vw 2.6vw"
            textDecoration="none !important">
            home
          </Link>
        </Box>
      </Flex>
      <Footer />
    </SectionWrapper>
  );
};

export default ErrorView;
