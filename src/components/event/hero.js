import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';

const StyledSection = styled(Section)`
  padding-top: 15rem;
  padding-bottom: 15rem;
  overflow-x: hidden;
  min-height: 65rem;

  ${media.thone`padding-top: 10rem;`};
`;
const BigText = styled.h1`
  font-weight: bold;
  font-size: 70px;
  letter-spacing: -2px;
  line-height: 100%;
  margin: 0;

  ${media.thone`font-size: 48px;`};
`;
const Description = styled.p`
  font-size: 28px;
  max-width: 70%;
  line-height: 146%;
  margin: 0;

  ${media.tablet`
    max-width: 100%;
    font-size: 24px;
  `};
  ${media.thone`font-size: 19px;`};
`;
const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-top: 5vh;
`;
const Hero = props => {
  return (
    <StyledSection>
      <Container max>
        <BigText>{props.name}</BigText>
        <Description>{props.date}</Description>
        <Image alt="" src={props.src} />
      </Container>
    </StyledSection>
  );
};

export default Hero;
