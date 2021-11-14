import { Flex, HStack, Stack, Image, Box, Text, Link } from "@chakra-ui/react";
import LogoIcon from "@images/logo.svg";
import GithubImage from "@images/socials/github.svg";
import InstagramImage from "@images/socials/instagram.svg";
import LinkedInImage from "@images/socials/linkedin.svg";
import YoutubeImage from "@images/socials/youtube.svg";
import React from "react";

interface SocialLinkProps {
  href: string;
  src: any;
  w?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, src, w = "4vh" }) => {
  return (
    <Link href={href} target="_blank">
      <Image src={src} w={w} />
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <Flex
      h="40vh"
      alignItems="center"
      justifyContent="space-evenly"
      flexDirection={{ lg: "row", xs: "column" }}>
      <Image src={LogoIcon} h={{ base: "6vh", md: "10vh" }} />

      <Stack>
        <Box as="span" fontWeight="bold" fontSize={{ base: "3vw", md: "2vw" }}>
          <Text>Contact us</Text>
        </Box>
        <Box as="span" fontWeight="medium" fontSize="1rem" color="#A8A8A8">
          <Text mt="-5px">team@techcodes.org</Text>
        </Box>
      </Stack>

      <Box>
        <Text fontWeight="bold" fontSize="2rem">
          Socials
        </Text>
        <HStack alignItems="center">
          <SocialLink href="https://www.instagram.com/techcodeshq/" src={InstagramImage} />
          <SocialLink
            href="https://www.linkedin.com/company/council-of-digital-engineers"
            src={LinkedInImage}
          />
          <SocialLink
            href="https://www.youtube.com/channel/UC74GHmtwQoj3bFxw2pBYM0A"
            src={YoutubeImage}
          />
          <SocialLink href="https://github.com/CodeBTHS" src={GithubImage} />
        </HStack>
      </Box>
    </Flex>
  );
};

export default Footer;
