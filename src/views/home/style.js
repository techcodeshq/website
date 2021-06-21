import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media, Container } from '@styles';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
export const ContentWrapper = styled(Container)`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 2vw;
  padding-bottom: 2vw;
  overflow-x: hidden;
`;
export const SectionTitle = styled.h1`
  width: 100%;
  text-align: center;
  padding: 0 10vw;
  flex-grow: 1;
  padding-top: 0.05px;
  padding-bottom: 0.05px;
  margin: 0;
  color: var(--text);
  font-weight: 500;
  line-height: 95%;
  text-transform: uppercase;
  font-size: 6vw;

  ${media.desktop`
    font-size: 8.7vw;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    flex-grow: 0;
    margin-bottom: 8vh;
  `}
  ${media.thone`
    font-size: 8.7vw;
    margin-bottom: 0;
  `};
`;
export const TitleLine = styled(motion.span)`
  position: relative;
  display: block;
  overflow: hidden;
  padding-top: 0.2em;
  margin-top: -0.2em;
`;
export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 6vw;
  text-transform: uppercase;
  margin-top: 2vw;

  ${media.desktop`font-size: 8vw;`};
  ${media.thone`font-size: 7.8vw;`};

  a:first-child {
    margin-right: 4vw;
    ${media.desktop`margin-right: 1vw;`};
    ${media.thone`margin-right: 3vw;`};
  }
`;
export const DescriptionWrapper = styled(motion.div)`
  width: 18vw;
  align-self: flex-end;
  margin-top: 6vw;

  ${media.thone`
    width: 70vw;
    margin-bottom: 6vw;
  `};
`;
export const StyledText = styled(motion.p)`
  color: var(--text);
  text-indent: 2vw;
  font-size: 1vw;

  ${media.desktop`
    font-size: 1.4vw;
    width: 40vw;
  `};
  ${media.thone`
    text-indent: 8vw;
    font-size: 3vw;
    width: 70vw;
  `};
`;

// Images
export const FlaskImage = styled(motion.div)`
  position: absolute;
  transform: scaleX(-1) rotate(8deg);
  width: 25vw;
  top: 5%;
  left: -2%;

  ${media.thone`
    width: 30vw;
  `};
`;
export const FolderImage = styled(motion.div)`
  position: absolute;
  transform: rotate(-8deg);
  width: 25vw;
  top: 35%;
  left: 20%;

  ${media.desktop`
    top: 15%;
    left: 25%;
  `};
  ${media.thone`
    top: 25%;
    left: 20%;
    width: 35vw;
  `};
`;
export const CupImage = styled(motion.div)`
  position: absolute;
  width: 20vw;
  top: 35%;
  left: 50%;

  ${media.desktop`
    top: 10%;
    left: 50%;
  `};
  ${media.thone`
    top: 20%;
    left: 65%;
    width: 30vw;
  `};
`;
export const RocketImage = styled(motion.div)`
  position: absolute;
  transform: rotate(-10deg);
  width: 22vw;
  top: 6%;
  right: 0;

  ${media.desktop`
    width: 25vw;
  `};
  ${media.thone`
    top: 5%;
    left: 40%;
    width: 36vw;
  `};
`;
