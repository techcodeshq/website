import React from 'react';
import { Section, Container } from '@styles';
import styled from 'styled-components';

import EchoAR from '@images/sponsors/echoar.png';
import Linode from '@images/sponsors/linode.svg';
import GoDaddy from '@images/sponsors/godaddy.png';
import StreamYard from '@images/sponsors/streamyard.svg';
import HackClubBank from '@images/sponsors/hackclubbank.svg';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  :first-child {
    img {
      width: 20rem;
    }
  }

  :not(:first-child) {
    padding-top: 3rem;

    img {
      width: 10rem;
    }
  }
`;
const SponsorImage = styled.img`
  margin-top: 0.5rem;
  :not(:first-child) {
    margin-left: 1.5rem;
  }
`;

const List = () => {
  return (
    <Section>
      <Container max>
        <Row>
          <SponsorImage src={Linode} alt="Linode" />
        </Row>
        <Row>
          <SponsorImage src={EchoAR} alt="echoAR" />
          <SponsorImage src={GoDaddy} alt="GoDaddy" />
          <SponsorImage src={StreamYard} alt="StreamYard" />
          <SponsorImage src={HackClubBank} alt="Hackclub Bank" />
        </Row>
      </Container>
    </Section>
  );
};

export default List;
