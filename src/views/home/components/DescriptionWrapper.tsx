import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

const DescriptionWrapper: React.FC = ({ children }) => {
  return (
    <Stack
      w="90%"
      m="auto"
      spacing="6vw"
      as={Flex}
      overflow="hidden"
      direction={{ base: "column", md: "row" }}>
      {children}
    </Stack>
  );
};

export default DescriptionWrapper;
