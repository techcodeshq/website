import { Center, Heading } from "@chakra-ui/react";
import React from "react";

interface DescriptionTitleProps {}

const DescriptionTitle: React.FC<DescriptionTitleProps> = ({}) => {
  return (
    <Center color="text" mb="3vh">
      <Heading
        fontWeight="normal"
        fontSize={{ base: "2rem", sm: "2rem", md: "3rem" }}
        textAlign="center"
        maxW={{ base: undefined, sm: undefined, md: undefined, lg: "60%" }}>
        We’re a student-led nonprofit aiming to increase computer science engagement
      </Heading>
    </Center>
  );
};

export default DescriptionTitle;
