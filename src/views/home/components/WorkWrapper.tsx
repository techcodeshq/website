import { Stack } from "@chakra-ui/react";
import React from "react";

interface WorkWrapperProps {}

const WorkWrapper: React.FC<WorkWrapperProps> = ({ children }) => {
  return <Stack flex="2">{children}</Stack>;
};

export default WorkWrapper;
