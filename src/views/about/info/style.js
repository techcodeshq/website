import styled from 'styled-components';
import { media } from '@styles';
import { motion } from 'framer-motion';

export const InfoSection = styled.section`
  position: relative;
  width: 100%;
`;
export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 14vw;

  ${media.tablet`padding: 10vw 0;`};
`;
export const Title = styled.h1`
  font-size: 22vw;
  line-height: 80%;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  color: var(--text);

  ${media.tablet`font-size: 28vw;`};
`;
export const TitleLine = styled(motion.span)`
  position: relative;
  display: block;
  overflow: hidden;
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  margin-left: auto;
  width: 75%;

  ${media.thone`width: 100%;`};
`;
export const DescriptionText = styled.p`
  font-size: 2.6vw;
  line-height: 120%;
  color: var(--text);
  text-indent: 9vw;

  ${media.thone`font-size: 18px;`};
`;

// Images
export const RightImage = styled(motion.div)`
  z-index: 2;
  position: absolute;
  width: 54vmin;
  right: -4vw;
  bottom: 22vw;

  ${media.thone`
    width: 55vw;
    bottom: 60vw;
  `};
`;
export const LeftImage = styled(motion.div)`
  z-index: 2;
  position: absolute;
  width: 32vw;
  left: -8vw;
  bottom: 1vw;

  ${media.thone`
    left: -4vw;
    width: 55vw;
    bottom: 54vw;
  `};
`;
