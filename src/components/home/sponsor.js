import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card, Button } from '@styles';

import GoDaddy from '@images/sponsors/godaddy.png';
import StreamYard from '@images/sponsors/streamyard.svg';
import HackClubBank from '@images/sponsors/hackclubbank.svg';

const TextWrapper = styled.div`
  max-width: 1000px;

  ${media.thone`text-align: center;`};
`;
const Row = styled.div`
  display: flex;
  gap: 10rem;

  ${media.bigDesktop`gap: 2rem;`};
  ${media.desktop`
    flex-direction: column;
  `};
  ${media.thone`text-align: center;`};
`;
const ContentWrapper = styled.div`
  flex: 1;
  max-width: 1400px;

  a {
    font-size: 24px;

    ${media.tablet`font-size: 18px;`};
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.massive`flex-direction: column;`};
  ${media.desktop`
    flex-direction: row;
    flex-wrap: wrap;
  `};
  ${media.thone`justify-content: center;`};
`;
const Title = styled.h1`
  font-size: 75px;
  letter-spacing: -4px;
  line-height: 110%;
  font-weight: bold;
  margin-bottom: 5rem;

  ${media.tablet`
    font-size: 55px;
    margin-bottom: 2rem;
  `};
  ${media.thone`
    font-size: 30px;
    letter-spacing: -1px;
  `};
`;
const Description = styled.p`
  font-size: 28px;
  line-height: 146%;
  margin-top: 0;
  margin-bottom: 5rem;

  ${media.tablet`
    font-size: 24px;
    margin-bottom: 4rem;
  `};
  ${media.thone`font-size: 19px;`};
`;
const SponsorImage = styled.img`
  width: 300px;
  margin-right: 3rem;

  ${media.massive`
    :not(:first-child) {
      margin-top: 2rem;
    }
    :nth-child(even) {
      margin-left: 4rem;
    }
  `};
  ${media.desktop`
    :not(:first-child) {
      margin-top: 2rem;
    }
    :nth-child(even) {
      margin-left: 0;
      margin-right: 0;
    }
  `};
  ${media.thone`width: 200px;`};
`;

const Sponsor = () => {
  return (
    <Section>
      <Container>
        <Card bg="var(--gray)" color="var(--text)">
          <TextWrapper>
            <Title>...and get to work with some pretty unique people</Title>
          </TextWrapper>
          <Row>
            <ContentWrapper>
              <Description>
                Each year, major companies and organizations will sponsor everything that CODE has
                to offer. It is with their help that CODE can continue to bring computer science to
                those who need it most and strengthen their passion.
              </Description>
              <Button to="/sponsor">Sponsor us</Button>
            </ContentWrapper>
            <ImageContainer>
              <SponsorImage src={HackClubBank} alt="Hack Club Bank" />
              <SponsorImage src={StreamYard} alt="Stream Yard" />
              <SponsorImage src={GoDaddy} alt="GoDaddy" />
            </ImageContainer>
          </Row>
        </Card>
      </Container>
    </Section>
  );
};

export default Sponsor;
