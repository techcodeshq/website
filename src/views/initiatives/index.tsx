import React from "react";
import { Footer } from "@components";
import { Nav, SectionWrapper } from "@components";
import Thumbnail from "../home/components/InitiativeThumbnail";
import { Heading, SimpleGrid, Flex } from "@chakra-ui/react";

interface InitiativesViewProps {
  data: any;
}

const InitiativesView: React.FC<InitiativesViewProps> = ({ data }) => {
  return (
    <SectionWrapper>
      <Nav />
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading
          textTransform="uppercase"
          fontSize="8vw"
          padding="5%"
          textAlign="left"
          width="100%">
          Initiatives
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2.5vw" w="90vw">
          {data.map((content: any) => (
            <Thumbnail
              href={content.slug}
              url={content.thumbnail.url}
              name={content.title}
              date={new Date().toLocaleDateString()}
            />
          ))}
        </SimpleGrid>
      </Flex>
      <Footer />
    </SectionWrapper>
  );
};

export default InitiativesView;
