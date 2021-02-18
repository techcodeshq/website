import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card, Button, DefaultText } from '@styles';
import Img from 'gatsby-image';

const CustomSection = styled(Section)`
  ${media.bigDesktop`padding-top: 24rem;`};
  ${media.tablet`padding-top: 16rem;`};
`;
const TextWrapper = styled.div`
  max-width: 1000px;

  a {
    font-size: 24px;

    ${media.tablet`font-size: 18px;`};
  }

  ${media.massive`max-width: 1500px;`};
  ${media.bigDesktop`padding-top: 10rem;`};
  ${media.thone`text-align: center;`};
  ${media.phablet`padding-top: 3rem;`};
`;
const StyledCard = styled(Card)`
  padding-bottom: 3rem;

  ${media.bigDesktop`width: 100%;`};
`;
const ImageWrapper = styled.div`
  position: absolute;
`;
const StyledImage = styled(Img)`
  width: 1000px;
  position: absolute;
  left: 90%;
  transform: translate(-10%, 12%);

  ${media.massive`left: 80%;`};
  ${media.bigDesktop`
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -30rem;
  `};
  ${media.tablet`
    width: 600px;
    margin-top: -15rem;
  `};
  ${media.thone`
    width: 90vw;
    margin-top: -13rem;
  `};
`;
const Title = styled.h1`
  font-size: 75px;
  letter-spacing: -4px;
  line-height: 110%;
  font-weight: bold;
  margin: 0;

  ${media.tablet`font-size: 55px;`};
  ${media.thone`
    font-size: 30px;
    letter-spacing: -1px;
  `};
`;
const Description = styled(DefaultText)`
  max-width: 75%;
  margin-top: 5rem;
  margin-bottom: 5rem;

  ${media.tablet`
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 4rem;
  `};
`;

const Events = ({ data }) => {
  return (
    <CustomSection>
      <Container>
        <ImageWrapper>
          <div data-scroll data-scroll-direction="horizontal" data-scroll-speed={1}>
            <StyledImage fluid={data.drawing.childImageSharp.fluid} alt="Drawing" />
          </div>
        </ImageWrapper>
        <StyledCard bg="var(--yellow)" color="var(--text)" width="60%">
          <TextWrapper>
            <Title>We also host some pretty cool events</Title>
            <Description>
              We have hosted and continue to host events like hackathons and guest panels to help
              inspire computer science education in today’s youth, especially those marginalized and
              disadvantaged. Organized by high-school students, we are able to gather students
              across the United States who share a similar passion for computer science.
            </Description>
            <Button to="/events">Explore events</Button>
          </TextWrapper>
        </StyledCard>
      </Container>
    </CustomSection>
  );
};

export default Events;
