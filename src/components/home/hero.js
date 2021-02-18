import React from 'react';
import styled from 'styled-components';
import { media, Section, Container } from '@styles';
import { motion } from 'framer-motion';
import useMousePosition from '@hooks/useMousePosition';
import Img from 'gatsby-image';

const StyledSection = styled(Section)`
  padding-top: 15rem;
  padding-bottom: 15rem;
  height: 100vh;
  overflow-x: hidden;
  min-height: 80rem;

  ${media.desktop`padding-top: 10rem;`};
  ${media.thone`
    min-height: 20rem;
    padding-top: 5rem;
  `};
`;
const TextWrapper = styled.div`
  max-width: 900px;

  ${media.massive`max-width: 750px;`};
  ${media.tablet`max-width: 100%;`};
`;
const BigText = styled(motion.h1)`
  font-weight: bold;
  font-size: 80px;
  letter-spacing: -2px;
  line-height: 100%;

  ${media.massive`font-size: 70px;`};
  ${media.thone`font-size: 48px;`};
`;
const BaseWrapper = styled(motion.div)`
  position: absolute;
  z-index: -1;
`;
const VeryTop = styled(BaseWrapper)`
  left: 50vw;
  top: 50px;
  width: 800px;
  transform: rotate(1deg);
  filter: blur(3px);

  ${media.bigDesktop`display: none;`};
`;
const LowerTop = styled(BaseWrapper)`
  left: 70vw;
  top: 400px;
  width: 450px;
  transform: rotate(1deg);
  filter: blur(2px);

  ${media.bigDesktop`
    left: 50vw;
    top: 350px;
  `};
  ${media.tablet`display: none;`};
  ${media.desktop`left: 45vw;`};
`;
const BottomLeft = styled(BaseWrapper)`
  left: 15vw;
  top: 550px;
  width: 500px;
  transform: rotate(1deg);

  ${media.bigDesktop`
    left: 0;
    width: 350px;
  `};
  ${media.thone`
    width: 250px;
    top: auto;
    bottom: 30px;
  `};
`;
const BottomRight = styled(BaseWrapper)`
  left: 50vw;
  top: 550px;
  width: 400px;
  transform: rotate(1deg);
  filter: blur(1px);

  ${media.bigDesktop`
    left: 30vw;
    top: 650px;
    width: 350px;
  `};
  ${media.tablet`left: 40vw;`};
  ${media.thone`
    width: 150px;
    top: auto;
    bottom: 200px;
    left: auto;
    right: 30px;   
  `};
`;
const StyledImage = styled(Img)`
  width: 100%;
`;

const Hero = ({ data }) => {
  const { x, y } = useMousePosition();

  return (
    <StyledSection>
      <Container max>
        <VeryTop
          initial={{ y: 0 }}
          animate={{ y: 25 }}
          transition={{ duration: 1.7, yoyo: Infinity }}>
          <div data-scroll data-scroll-speed={4}>
            <motion.div style={{ x: x / 100, y: y / 100 }}>
              <StyledImage fluid={data.rocket.childImageSharp.fluid} alt="Rocket" />
            </motion.div>
          </div>
        </VeryTop>
        <LowerTop
          initial={{ y: 0 }}
          animate={{ y: 25 }}
          transition={{ duration: 1.7, yoyo: Infinity, delay: 1 }}>
          <div data-scroll data-scroll-speed={3}>
            <motion.div style={{ x: x / 80, y: y / 80 }}>
              <StyledImage fluid={data.bucket.childImageSharp.fluid} alt="Bucket" />
            </motion.div>
          </div>
        </LowerTop>
        <TextWrapper>
          <BigText>We’re inspiring students to pursue their passions in technology.</BigText>
        </TextWrapper>
        <div />
        <BottomRight
          initial={{ y: 0 }}
          animate={{ y: 25 }}
          transition={{ duration: 1.7, yoyo: Infinity, delay: 1 }}>
          <div data-scroll data-scroll-speed={2}>
            <motion.div style={{ x: x / 50, y: y / 50 }}>
              <StyledImage fluid={data.folder.childImageSharp.fluid} alt="Folder" />
            </motion.div>
          </div>
        </BottomRight>
        <BottomLeft
          initial={{ y: 0 }}
          animate={{ y: 25 }}
          transition={{ duration: 1.7, yoyo: Infinity, delay: 1 }}>
          <div data-scroll data-scroll-speed={3}>
            <motion.div style={{ x: x / 20, y: y / 20 }}>
              <StyledImage fluid={data.potion.childImageSharp.fluid} alt="Potion" />
            </motion.div>
          </div>
        </BottomLeft>
      </Container>
    </StyledSection>
  );
};

export default Hero;
