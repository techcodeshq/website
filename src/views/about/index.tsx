import { Avatar, Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { Footer, Nav, SectionWrapper } from "@components";
import BlastImage from "@images/props/blast.png";
import BoxedImage from "@images/props/boxed.png";
import React from "react";
import { Member } from "../../pages/about";
import ContentWrapper from "../home/components/ContentWrapper";
import { CTA } from "@components";

const AboutView: React.FC<{ team: Member[] }> = ({ team }) => {
  return (
    <SectionWrapper>
      <Nav />
      <ContentWrapper h="fit-content">
        <Heading
          textAlign="center"
          textTransform="uppercase"
          fontSize="20vw"
          fontWeight="medium"
          lineHeight="90%"
          mt="50px">
          tech <br /> codes
        </Heading>
        <Text fontWeight="regular" fontSize={{ base: "2.4vw", md: "2vw" }} pl="15vw">
          <Box as="span" ml="8vh">
            CODE is a student-run 501(c)(3) nonprofit
          </Box>
          , for <br />
          students, by students. Founded by Chanul Dandeniya and <br /> Kyrylo Orlov in June 2020,
          in hopes to rejuvenate and revive
          <br />
          student interest in programming in the largest and most <br /> prestigious STEM secondary
          institution, Brooklyn Technical <br /> High School, through countless initiatives and
          programs <br /> TechCodes has now grown and impacted students all across the <br /> NYC
          Metropolitan area
        </Text>
        <Box
          position="absolute"
          left="-3vw"
          width={{ base: "22vw", "2xl": "36vw" }}
          top={{ base: "35vh", "2xl": "10vh" }}
          display={{ base: "none", lg: "flex" }}>
          <Image src={BoxedImage} top={0} />
        </Box>
        <Box
          position="absolute"
          right="9vw"
          width={{ base: "20vw", "2xl": "54vmin" }}
          top="6vh"
          display={{ base: "none", lg: "flex" }}>
          <Image src={BlastImage} top={0} />
        </Box>
      </ContentWrapper>
      <ContentWrapper h="pixie">
        <Box width={{ base: "100%", md: "90%" }} ml="5%" mt="10vh">
          <Heading fontSize="10vh" mb="20px">
            Meet the team.
          </Heading>
        </Box>
        <Grid width="90%" m="auto" templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          {team.map(member => (
            <GridItem>
              <Box>
                <Flex alignItems="flex-start">
                  <Avatar src={member.image.url} alt={member.image.alt} size="lg" />
                  <Box ml={4}>
                    <Heading fontWeight="medium" lineHeight="3vh" mb="1vh">
                      {member.name} <br />
                      <Box as="span" color="gray" fontWeight="normal" fontSize="2vh" mt="10px">
                        {member.memberPosition}
                      </Box>
                    </Heading>
                    {/* {I am perfectly aware that this isn't good, but honestly why we're rendering HTML like this in the first place...} */}
                    <Box
                      dangerouslySetInnerHTML={{ __html: member.description }}
                      fontSize="2.5vh"
                      fontWeight="normal"
                      textAlign="justify"
                    />
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </ContentWrapper>
      <ContentWrapper h="50vh">
        <CTA />
        <Footer />
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default AboutView;
