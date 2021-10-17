import styled, { css } from 'styled-components';
import { media } from '@styles';
import { Link as GatsbyLink } from 'gatsby';
import { motion } from 'framer-motion';

const LinkStyles = css`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 6vw;
  font-weight: 500;
  color: var(--text);
  line-height: 100%;
  width: fit-content;
  ${media.thone`font-size: 13vw;`};

  :hover {
    color: var(--yellow);
  }
`;
export const SplitsWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 9998;
  width: 100%;
  top: 0;
`;
export const HalfSplit = styled(motion.div)`
  position: fixed;
  background-color: var(--background);
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
  width: 100%;
  height: 100vh;
  padding: 1vw;
`;
export const StyledLink = styled(GatsbyLink)`
  ${LinkStyles};
`;
export const StyledALink = styled.a`
  ${LinkStyles};
`;
export const BottomLinkWrapper = styled.div`
  margin-top: 2vw;
  margin-left: 0.4vw;

  ${media.tablet`margin-top: 8vw;`};
`;
export const SmallLink = styled.a`
  font-size: 1.2vw;
  text-decoration: none;
  color: var(--text);
  ${media.tablet`font-size: 18px;`};

  :hover {
    color: var(--yellow);
  }
`;
