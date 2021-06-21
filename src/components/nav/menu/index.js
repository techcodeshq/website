import React, { useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import { OverflowWrapper } from '@styles';
import { AnimatePresence, motion } from 'framer-motion';
import {
  SplitsWrapper,
  HalfSplit,
  StyledLink,
  LinksWrapper,
  BottomLinkWrapper,
  SmallLink,
  StyledALink,
} from './style';

const Menu = ({ menuOpen }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        if (menuOpen) {
          window.scroll.stop();
        } else {
          window.scroll.start();
        }
      }, 500);
    }
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {menuOpen && (
        <SplitsWrapper>
          <Div100vh>
            <LinksWrapper>
              <OverflowWrapper>
                <motion.div
                  initial={{ y: '-100%' }}
                  animate={{
                    y: 0,
                    transition: { delay: 0.3, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}
                  exit={{
                    y: '-100%',
                    transition: { delay: 0.3, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}>
                  <StyledLink to="/initiatives">Initiatives.</StyledLink>
                </motion.div>
              </OverflowWrapper>
              <OverflowWrapper>
                <motion.div
                  initial={{ y: '-100%' }}
                  animate={{
                    y: 0,
                    transition: { delay: 0.4, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}
                  exit={{
                    y: '-100%',
                    transition: { delay: 0.4, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}>
                  <StyledLink to="/about">About.</StyledLink>
                </motion.div>
              </OverflowWrapper>
              <OverflowWrapper>
                <motion.div
                  initial={{ y: '-100%' }}
                  animate={{
                    y: 0,
                    transition: { delay: 0.5, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}
                  exit={{
                    y: '-100%',
                    transition: { delay: 0.5, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}>
                  <StyledALink href="https://bank.hackclub.com/donations/start/techcodes">
                    Donate.
                  </StyledALink>
                </motion.div>
              </OverflowWrapper>
              <OverflowWrapper>
                <motion.div
                  initial={{ y: '-100%' }}
                  animate={{
                    y: 0,
                    transition: { delay: 0.6, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}
                  exit={{
                    y: '-100%',
                    transition: { delay: 0.6, ease: [0.7, 0, 0.07, 1], duration: 1 },
                  }}>
                  <StyledLink to="/contact">Contact.</StyledLink>
                </motion.div>
              </OverflowWrapper>
              <BottomLinkWrapper>
                <OverflowWrapper>
                  <motion.div
                    initial={{ y: '-100%' }}
                    animate={{
                      y: 0,
                      transition: { delay: 0.7, ease: [0.7, 0, 0.07, 1], duration: 1 },
                    }}
                    exit={{
                      y: '-100%',
                      transition: { delay: 0.7, ease: [0.7, 0, 0.07, 1], duration: 1 },
                    }}>
                    <SmallLink href="/press-release.pdf">Latest press release</SmallLink>
                  </motion.div>
                </OverflowWrapper>
              </BottomLinkWrapper>
            </LinksWrapper>
            <HalfSplit
              animate={{ height: 'inherit' }}
              exit={{
                height: 0,
                transition: { ease: [0.7, 0, 0.07, 1], duration: 1.2, delay: 0.7 },
              }}
              transition={{ ease: [0.7, 0, 0.07, 1], duration: 1.2 }}
            />
            <HalfSplit
              animate={{ height: 'inherit' }}
              exit={{
                height: 0,
                transition: { ease: [0.7, 0, 0.07, 1], duration: 1.2, delay: 0.8 },
              }}
              transition={{ ease: [0.7, 0, 0.07, 1], duration: 1.2, delay: 0.1 }}
            />
          </Div100vh>
        </SplitsWrapper>
      )}
    </AnimatePresence>
  );
};

export default Menu;
