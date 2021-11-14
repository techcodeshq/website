import { Box } from "@chakra-ui/layout";
import React from "react";

interface StripesProps {
  h?: string;
  col: string;
}

const Stripe: React.FC<StripesProps> = ({ h, col }) => {
  return <Box w="177.33vw" h={h || "2vw"} background={col} />;
};

const Stripes: React.FC = () => {
  return (
    <Box
      width="100vw"
      transform="rotate(30deg)"
      position="absolute"
      zIndex="-1"
      left="-13.71vw"
      top="-60vh">
      <Stripe col="blueText" />
      <Stripe col="pink" />
      <Stripe h="8vw" col="yellow" />
    </Box>
  );
};

export default Stripes;
