import React from "react";
import { Layout } from "./src/components";
import "swiper/css";

export const wrapPageElement = ({ element, props }) => {
  console.clear();
  console.log(
    `%cStop!%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a special feature or "hack" someone's account, it is a scam and will give them access to your personal information.
    `,
    "color:#fa594d;-webkit-text-stroke:2px black;font-size:5rem;font-weight:bolder;text-align:center;",
    "color:red;font-size:1rem;font-weight:bolder;",
  );

  return <Layout {...props}>{element}</Layout>;
};
