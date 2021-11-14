import { Box, Text, Image, Flex, Link } from "@chakra-ui/react";
import React from "react";

interface ThumbnailProps {
  href: string;
  url: string;
  name: string;
  date: string;
  homePage?: boolean;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ href, url, name, date, homePage }) => (
  <Link href={href}>
    <Box role="group">
      <Flex
        w={homePage ? "34vw" : { sm: "100%", md: "43.75vw" }}
        h={homePage ? "20vw" : { sm: "100%", md: "25.7vw" }}
        borderRadius={homePage ? "0px" : "40px"}
        overflow="hidden"
        alignItems="center"
        justifyContent="center"
        transition="0.2s"
        _groupHover={{ borderRadius: "40px" }}>
        <Image
          src={url}
          w="100%"
          h="100%"
          transition="0.2s"
          _groupHover={{ transform: "scale(1.2)", filter: "brightness(0.5)" }}
        />
        <Text
          position="absolute"
          textTransform="uppercase"
          fontSize={{ sm: "2.5vw", md: "1.2vw" }}
          border="1px solid white"
          borderRadius="50px"
          padding="0px 6px"
          display="none"
          _groupHover={{ display: "flex !important" }}>
          View Event
        </Text>
      </Flex>
      {homePage ? (
        <>
          <Text fontWeight="medium" fontSize={{ base: "2vw", md: "1.2vw" }}>
            {name}
          </Text>
          <Text fontWeight="medium" fontSize="0.8vw" display={{ base: "none", md: "flex" }}>
            {date}
          </Text>
        </>
      ) : (
        <></>
      )}
    </Box>
  </Link>
);

export default Thumbnail;
