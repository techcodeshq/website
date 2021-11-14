import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Footer, Nav, SectionWrapper } from "@components";
import OnePassword from "@images/sponsors/1Password.png";
import EchoImage from "@images/sponsors/echoar.png";
import GoDaddyImage from "@images/sponsors/godaddy.png";
import LinodeImage from "@images/sponsors/linode.svg";
import PrincetonImage from "@images/sponsors/princetonreview.png";
import ReplitImage from "@images/sponsors/replit.svg";
import StickerImage from "@images/sponsors/sticker.png";
import WolframImage from "@images/sponsors/wolfram.png";
import React, { useRef } from "react";
import ContentWrapper from "./components/ContentWrapper";
import { CTA } from "@components";
import DescriptionBody from "./components/DescriptionBody";
import DescriptionTitle from "./components/DescriptionTitle";
import DescriptionWrapper from "./components/DescriptionWrapper";
import Hero from "./components/Hero";
import InitiativesSection from "./components/InitiativesSection";
import SponsorImage from "./components/SponsorImage";
import Stripes from "./components/Stripes";
import WorkBody from "./components/WorkBody";
import WorkHeading from "./components/WorkHeading";
import WorkWrapper from "./components/WorkWrapper";

interface HomeViewProps {
  data: any;
}

const HomeView: React.FC<HomeViewProps> = ({ data }) => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SectionWrapper>
        <Nav />
        <ContentWrapper h="100%" mt="2rem">
          <Hero />
        </ContentWrapper>
        <ContentWrapper h={{ xs: "60%", md: "60%", xl: "40%" }}>
          <Box ref={descriptionRef}>
            <DescriptionTitle />
            <DescriptionWrapper>
              <DescriptionBody>
                TechCodes is dedicated to fostering computer science education to students of all
                backgrounds and expose them to the creativity and innovation technology brings.
                TechCodes is dedicated to fostering computer science education to students of all
                backgrounds and expose them to the creativity and innovation technology brings.
              </DescriptionBody>
              <WorkWrapper>
                <>
                  <WorkHeading color="blueText">Hosting events</WorkHeading>
                  <WorkBody>
                    We have hosted and continue to host events like hackathons and guest panels to
                    help inspire computer science education in today’s youth.
                  </WorkBody>
                </>
                <>
                  <WorkHeading color="pink">Creating connections</WorkHeading>
                  <WorkBody>
                    We have hosted and continue to host events like hackathons and guest panels to
                    help inspire computer science education in today’s youth.
                  </WorkBody>
                </>
                <>
                  <WorkHeading color="yellow">Building experiences</WorkHeading>
                  <WorkBody>
                    We have hosted and continue to host events like hackathons and guest panels to
                    help inspire computer science education in today’s youth.
                  </WorkBody>
                </>
              </WorkWrapper>
            </DescriptionWrapper>
          </Box>
        </ContentWrapper>

        <ContentWrapper>
          <Box w="100%" h="100%" position="relative">
            <InitiativesSection data={data} />
          </Box>
        </ContentWrapper>

        <ContentWrapper>
          <Flex
            flexDirection="column"
            w="100%"
            // h="95vh"
            bgColor="gray"
            position="relative"
            zIndex="-2">
            <Box visibility={{ base: "hidden", xl: "visible" }}>
              <Stripes />
            </Box>
            <Stack as={Center} pt="8vh" position="relative" zIndex="10">
              <Heading
                color="darkText"
                fontWeight="64"
                fontSize="7vh"
                textAlign="center"
                maxWidth={{ base: undefined, md: "50%", lg: "40%" }}>
                We work with some pretty unique people
              </Heading>
              <Text
                color="darkText"
                textAlign="center"
                pt="3vh"
                fontWeight="19"
                fontSize="2vh"
                maxWidth={{ base: undefined, md: "60%", lg: "40%" }}>
                Each year, major organizations will sponsor everything that CODE has to offer. It is
                with their help that CODE can continue to bring computer science to those who need
                it most and strengthen their passion.
              </Text>
              <Stack
                display="flex"
                width="50%"
                justifyContent="space-evenly"
                pb="3vh"
                direction={{ base: "column", md: "row" }}>
                <SponsorImage src={ReplitImage} />
                <SponsorImage src={GoDaddyImage} />
                <SponsorImage src={OnePassword} />
              </Stack>
              <Stack
                display="flex"
                width="60%"
                justifyContent="space-evenly"
                pb="3vh"
                direction={{ base: "column", md: "row" }}>
                <SponsorImage src={StickerImage} />
                <SponsorImage src={PrincetonImage} />
                <SponsorImage src={LinodeImage} />
              </Stack>
              <Stack
                display="flex"
                width="60%"
                justifyContent="space-evenly"
                pb="3vh"
                direction={{ base: "column", md: "row" }}>
                <SponsorImage src={WolframImage} />
                <SponsorImage src={EchoImage} />
              </Stack>
            </Stack>
          </Flex>
          <CTA mt="-2vh" />
          <Footer />
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default HomeView;
