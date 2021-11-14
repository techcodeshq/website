import { Box, Link } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import Div100vh from "react-div-100vh";
import GatsbyLink from "gatsby-link";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { BoxProps, chakra } from "@chakra-ui/react";

interface MenuProps {
  open: boolean;
}

const MotionBox = motion<BoxProps>(Box);
const StylableLink = chakra(GatsbyLink);

const StyledLink: React.FC<{ to: string }> = ({ to, children }) => (
  <StylableLink
    to={to}
    textDecoration="none"
    textTransform="uppercase"
    fontSize="6vw"
    fontWeight="500"
    color="text"
    lineHeight="100%"
    w="fit-content"
    _hover={{ color: "pink" }}>
    {children}
  </StylableLink>
);

const StyledALink: React.FC<{ href: string }> = ({ href, children }) => (
  <Link
    href={href}
    textDecoration="none"
    textTransform="uppercase"
    fontSize="6vw"
    fontWeight="500"
    color="text"
    lineHeight="100%"
    w="fit-content"
    _hover={{ textDecoration: "none", color: "pink" }}>
    {children}
  </Link>
);

const SmolLink: React.FC<{ href: string }> = ({ href, children }) => (
  <Link
    fontSize="1.2vw"
    textDecoration="none"
    color="text"
    _hover={{ color: "yellow" }}
    href={href}>
    {children}
  </Link>
);

const Menu: React.FC<MenuProps> = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <Flex position="fixed" zIndex="9998" w="100%" top={0}>
          <Div100vh>
            <Flex
              position="fixed"
              flexDirection="column"
              top={0}
              zIndex="9998"
              w="100%"
              h="100vh"
              p="1vw">
              <Box overflow="hidden">
                <MotionBox
                  initial={{ y: "-100%" }}
                  animate={{
                    y: 0,
                    transition: { delay: 0.3, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}
                  exit={{
                    y: "-100%",
                    transition: { delay: 0.3, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}>
                  <StyledLink to="/initiatives">Initiatives.</StyledLink>
                </MotionBox>
              </Box>
              <Box overflow="hidden">
                <MotionBox
                  initial={{ y: "-100%" }}
                  animate={{
                    y: 0,
                    transition: { delay: 0.4, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}
                  exit={{
                    y: "-100%",
                    transition: { delay: 0.4, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}>
                  <StyledLink to="/about">About.</StyledLink>
                </MotionBox>
              </Box>
              <Box overflow="hidden">
                <MotionBox
                  initial={{ y: "-100%" }}
                  animate={{
                    y: 0,
                    transition: { delay: 0.5, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}
                  exit={{
                    y: "-100%",
                    transition: { delay: 0.5, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}>
                  <StyledALink href="https://bank.hackclub.com/donations/start/techcodes">
                    Donate.
                  </StyledALink>
                </MotionBox>
              </Box>
              <Box overflow="hidden">
                <MotionBox
                  initial={{ y: "-100%" }}
                  animate={{
                    y: 0,
                    transition: { delay: 0.6, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}
                  exit={{
                    y: "-100%",
                    transition: { delay: 0.6, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}>
                  <StyledLink to="/contact">Contact.</StyledLink>
                </MotionBox>
              </Box>
              <Box mt="2vw" ml="0.4vw">
                <Box overflow="hidden">
                  <MotionBox
                    initial={{ y: "-100%" }}
                    animate={{
                      y: 0,
                      transition: { delay: 0.7, ease: [0.7, 0, 0.07, 1], duration: 1 },
                    }}
                    exit={{
                      y: "-100%",
                      transition: { delay: 0.7, ease: [0.7, 0, 0.07, 1], duration: 1 },
                    }}>
                    <SmolLink href="/press-release.pdf">Latest press release</SmolLink>
                  </MotionBox>
                </Box>
              </Box>
            </Flex>
            <MotionBox
              position="fixed"
              bgColor="background"
              w="50%"
              h={0}
              sx={{ ":last-child": { left: "50%" } }}
              animate={{ height: "inherit" }}
              exit={{
                height: 0,
                transition: { ease: [0.7, 0, 0.07, 1], duration: 1.2, delay: 0.7 },
              }}
              transition={{ ease: [0.7, 0, 0.07, 1], duration: 1.2 } as any}
            />
            <MotionBox
              position="fixed"
              bgColor="background"
              w="50%"
              h={0}
              sx={{ ":last-child": { left: "50%" } }}
              animate={{ height: "inherit" }}
              exit={{
                height: 0,
                transition: { ease: [0.7, 0, 0.07, 1], duration: 1.2, delay: 0.8 },
              }}
              transition={{ ease: [0.7, 0, 0.07, 1], duration: 1.2, delay: 0.1 } as any}
            />
          </Div100vh>
        </Flex>
      )}
    </AnimatePresence>
  );
};

export default Menu;
