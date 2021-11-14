import { Box } from "@chakra-ui/layout";
import { ResponsiveValue } from "@chakra-ui/react";
import React from "react";

interface ContentWrapperProps {
  h?: ResponsiveValue<string>;
  mt?: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ h, mt, children }) => {
  return (
    <Box mt={mt} h={h || "100%"}>
      {children}
    </Box>
  );
};

export default ContentWrapper;
