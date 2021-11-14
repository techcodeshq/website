import { Heading } from "@chakra-ui/react";
import React from "react";

interface WorkHeadingProps {
  color: string;
}

const WorkHeading: React.FC<WorkHeadingProps> = ({ color, children }) => {
  return (
    <Heading color={color} fontWeight="500" fontSize={{ base: "2.2rem", md: "3rem" }}>
      {children}
    </Heading>
  );
};

export default WorkHeading;
