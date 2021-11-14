import React from "react";
import { Text } from "@chakra-ui/react";

interface WorkBodyProps {}

const WorkBody: React.FC<WorkBodyProps> = ({ children }) => {
  return (
    <Text flex="2" fontSize="1rem" display="flex">
      {children}
    </Text>
  );
};

export default WorkBody;
