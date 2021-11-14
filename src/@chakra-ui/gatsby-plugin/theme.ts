import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const theme = {
  colors: {
    text: "#F6F6F6",
    background: "#1D166F",
    accent: "#E7E7E7",
    yellow: "#FFCC66",
    undertone: "#161616",
    gray: "#DCDCDC",
    pink: "#FF8FE6",
    blueText: "#7087FE",
    lightBlue: "#126DD9",
    darkText: "#141414",
  },
  fonts: {
    heading: "",
  },
  breakpoints: createBreakpoints({
    xs: "330",
    sm: "376",
    phablet: "480",
    thone: "600",
    md: "860",
    lg: "1000",
    xl: "1200",
    "2xl": "1440",
  }),
};

export default extendTheme(theme);
