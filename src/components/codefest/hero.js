import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';
import Img from 'gatsby-image';

const StyledSection = styled(Section)`
  padding-top: 15rem;
  padding-bottom: 15rem;
  overflow-x: hidden;
  min-height: 60rem;

  ${media.tablet`max-height: 40rem;`};
  ${media.thone`padding-top: 10rem;`};
`;
const BigText = styled.h1`
  font-weight: bold;
  fontsize: 65px;
  letter-spacing: -2px;
  line-height: 100%;
  text-align: center !important;
  margin-top: 10px !important;

  ${media.massive`font-size: 70px;`};
  ${media.thone`font-size: 48px;`};
`;
const Description = styled.p`
  font-size: 28px;
  max-width: 90%;
  line-height: 146%;
  text-align: center !important;

  ${media.tablet`
    max-width: 100%;
    font-size: 24px;
  `};
  ${media.thone`font-size: 19px;`};
`;

const RedText = styled.p`
  max-width: 90%;
  line-height: 146%;
  text-align: center !important;
  color: #ff6142;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0px !important;

  ${media.tablet`
    max-width: 100%;
    font-size: 24px;
  `};
  ${media.thone`font-size: 19px;`};
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center !important;

  ${media.tablet`flex-direction: column-reverse;`};
`;
const Col = styled.div`
  flex: 0 0 auto;
  width: ${props => (props.max ? '100%' : props.bigger ? '60%' : '40%')};
  align-items: center;
  justify-content: center;

  ${media.tablet`width: 100%;`};
`;
const StyledImage = styled(Img)`
  width: 100%;

  ${media.tablet`display: none;`};
`;
const Outlined = styled.span`
  color: white;
  -webkit-text-stroke: 3px black;
`;

const CrossedOut = styled.span`
  text-decoration: line-through;
`;

const Hero = ({ data }) => {
  return (
    <StyledSection>
      <Container max>
        <Col max>
          <Row>
            <RedText>Join us for the week of March 14th-20th</RedText>
          </Row>
          <Row>
            <BigText>
              Let’s get hacking at our <CrossedOut>virtual</CrossedOut>
              <br />
              comfy hackathon - <Outlined>CodeFest</Outlined> 2021
            </BigText>
          </Row>
          <Row>
            <Description>
              The last year had been unlike any other; therefore, we’re
              <br />
              hosting a hackathon unlike any other. Get in your pajamas,
              <br />
              lay down in your bed, and let’s build something cool!
            </Description>
          </Row>
        </Col>
      </Container>
    </StyledSection>
  );
};

export default Hero;
