import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';

import Mackenzie from './Speaker images/mackenzie.jpg';
import ChrisSean from './Speaker images/ChrisSean.jpg';
import JacobThomas from './Speaker images/JacobThomas.jpg';

import Matthieu from './Speaker images/matthieu.jpg';
import Calvin from './Speaker images/Calvin.jpg';
import EncodeJustice from './Speaker images/encodeJustice.png';

const StyledSection = styled(Section)`
  overflow-x: hidden;
  padding: 0 !important;
  margin: 0 !important;
  text-align: center !important;
  color: var(--text);
`;
const BigText = styled.h1`
  font-weight: 700;
  font-size: 65px;
  letter-spacing: -2px;
  line-height: 100%;

  ${media.massive`font-size: 70px;`};
  ${media.thone`font-size: 48px;`};
`;
const Description = styled.p`
  font-size: 28px;
  line-height: 146%;

  ${media.tablet`
    max-width: 100%;
    font-size: 24px;
  `};
  ${media.thone`font-size: 19px;`};
`;
const Main = styled.div`
  background-color: #ffe767;
  width: 100% !important;
  padding: 10vh 12vw;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  text-align: center !important;
  margin: 2vw;

  ${media.tablet`flex-direction: column;`};
`;
const Col = styled.div`
  flex: 0 0 auto;
  justify-content: center;
  align-content: space-around;

  ${media.tablet`width: 100%;`};
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 7.5vw;
`;

const SpeakerName = styled.p`
  font-weight: 700;
  margin: 0;
  margin-left: 2vw;
`;

const SpeakerTitle = styled.p`
  color: #4f4f4f;
  margin: 0;
  margin-left: 2vw;
`;

const Person = ({ name, src, title }) => {
  return (
    <Row>
      <ProfilePicture alt={name} src={src} />
      <Col>
        <SpeakerName>{name}</SpeakerName>
        <SpeakerTitle>{title}</SpeakerTitle>
      </Col>
    </Row>
  );
};

const Workshop = ({ name, src, title, description }) => {
  return (
    <Col>
      <Person name={name} src={src} />
      <SpeakerName>{title}</SpeakerName>
      <SpeakerTitle>{description}</SpeakerTitle>
    </Col>
  );
};

const Speakers = () => {
  return (
    <StyledSection>
      <Container max style={{ padding: 0 }}>
        <Main>
          <BigText black>Speakers</BigText>
          <Col>
            <Person
              name="MacKenzie Fisher"
              src={Mackenzie}
              title="Director of Partnerships at Encode Justice"
            />
            <Person name="Chris Sean" src={ChrisSean} title="Web Developer and Youtuber" />
            <Person
              name="Jacob Thomas"
              src={JacobThomas}
              title="Game Developer for Insomniac Games"
            />
          </Col>
          <BigText black>Workshops</BigText>
          <Workshop
            name="Encode Justice"
            src={EncodeJustice}
            title="AI Workshop"
            description="blah blah blah"
          />
          <Workshop
            name="Matthieu DeRobles"
            src={Matthieu}
            title="Game Development Workshop"
            description="blah blah blah"
          />
          <Workshop
            name="Calvin To"
            src={Calvin}
            title="Web Development Workshop"
            description="blah blah blah"
          />
        </Main>
      </Container>
    </StyledSection>
  );
};

export default Speakers;
