import React from "react";
import { Text } from "@chakra-ui/react";

interface DescriptionBodyProps {}

const DescriptionBody: React.FC<DescriptionBodyProps> = ({ children }) => {
  return (
    <Text flex="2" fontSize="1.2rem">
      {children}
    </Text>
  );
};

export default DescriptionBody;
