import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';

import OnePassword from '@images/sponsors/1Password.png';
import Balsamiq from '@images/sponsors/balsamiq.png';
import EchoAR from '@images/sponsors/echoar.png';
import Framer from '@images/sponsors/framer.png';
import GoDaddy from '@images/sponsors/godaddy.png';
import InspiritAI from '@images/sponsors/inspiritAI.png';
import HackClubBank from '@images/sponsors/hackclubbank.svg';
import Linode from '@images/sponsors/linode.svg';
import PrincetonReview from '@images/sponsors/princetonreview.png';
import ReplIt from '@images/sponsors/replit.svg';
import StreamYard from '@images/sponsors/streamyard.svg';
import Wolfram from '@images/sponsors/wolfram.png';

const StyledSection = styled(Section)`
  overflow-x: hidden;
  min-height: 40rem;
  padding-top: 0 !important;
`;
const BigText = styled.h1`
  font-weight: 500;
  font-size: 65px;
  letter-spacing: -2px;
  line-height: 100%;
  text-align: center !important;
  color: ${props => (props.black ? 'black' : 'white')};

  ${media.massive`font-size: 70px;`};
  ${media.thone`font-size: 48px;`};
`;
const Col = styled.div`
  flex: 0 0 auto;
  width: ${props => (props.max ? '100%' : props.bigger ? '60%' : '30%')};
  align-items: center;
  justify-content: center;

  ${media.tablet`width: 100%;`};
`;
const Main = styled.div`
  width: 100% !important;
  padding: 10vh 12vw;
  min-height: 60vh;
`;
const SponsorImage = styled.img`
  margin-top: 0.5rem;
  :not(:first-child) {
    margin-left: 1.5rem;
  }
`;
const SponsorRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;

  img {
    width: ${props => (props.paid ? '20rem' : '9rem')};
  }
`;
const Prizes = () => {
  return (
    <StyledSection>
      <Container max style={{ padding: 0 }}>
        <Col max>
          <Main>
            <BigText black>Our beloved sponsors supporting us for this hackathon.</BigText>
            <SponsorRow paid>
              <SponsorImage src={InspiritAI} alt="InspiritAI" />
              <SponsorImage src={Linode} alt="Linode" />
              <SponsorImage
                src={PrincetonReview}
                alt="The Princeton Review"
                style={{ width: '15rem' }}
              />
            </SponsorRow>
            <SponsorRow>
              <SponsorImage src={EchoAR} alt="echoAR" style={{ width: '12rem' }} />
              <SponsorImage src={OnePassword} alt="OnePassword" />
              <SponsorImage src={Wolfram} alt="Wolfram" style={{ width: '7rem' }} />
              <SponsorImage src={Framer} alt="Framer" />
              <SponsorImage src={ReplIt} alt="ReplIt" />
            </SponsorRow>
            <SponsorRow>
              <SponsorImage src={Balsamiq} alt="Balsamiq" />
              <SponsorImage src={GoDaddy} alt="GoDaddy" />
              <SponsorImage src={StreamYard} alt="StreamYard" />
              <SponsorImage src={HackClubBank} alt="Hackclub Bank" />
            </SponsorRow>
          </Main>
        </Col>
      </Container>
    </StyledSection>
  );
};

export default Prizes;
