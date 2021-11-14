import { Box } from "@chakra-ui/layout";
import React from "react";

interface SectionWrapperProps {
  h?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ h, children }) => {
  return (
    <Box position="relative" h={h || "100vh"} overflowX="hidden" w="100vw">
      {children}
    </Box>
  );
};

export default SectionWrapper;
