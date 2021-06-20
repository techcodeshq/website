import styled from 'styled-components';
import { media } from '@styles';
import { Link as GatsbyLink } from 'gatsby';
import { motion } from 'framer-motion';

export const SplitsWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 9998;
  width: 100%;
  top: 0;
`;
export const HalfSplit = styled(motion.div)`
  position: fixed;
  background-color: var(--accent);
  width: 50%;
  height: 0;

  :last-child {
    left: 50%;
  }
`;
export const LinksWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  z-index: 9998;
  width: 100vw;
  height: 100vh;
  margin: 1vw;
`;
export const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 6vw;
  font-weight: 500;
  color: var(--text);
  line-height: 100%;
  width: fit-content;
  ${media.thone`font-size: 8.7vw;`};

  :hover {
    color: var(--green);
  }
`;
export const BottomLinkWrapper = styled.div`
  margin-top: 2vw;
  margin-left: 0.4vw;
`;
export const SmallLink = styled.a`
  font-size: 1.2vw;
  text-decoration: none;
  color: var(--undertone);

  :hover {
    color: var(--green);
  }
`;
