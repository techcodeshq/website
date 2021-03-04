import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';

const StyledSection = styled(Section)`
  overflow-x: hidden;
  padding: 0 !important;
  margin: 0 !important;
  text-align: center !important;
  color: var(--text);
`;
const BigText = styled.h1`
  font-weight: 500;
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
`;

const Speakers = ({ data }) => {
  return (
    <StyledSection>
      <Container max style={{ padding: 0 }}>
        <Main>
          <BigText black>Speakers and workshops</BigText>
          <Description black>Coming soon</Description>
        </Main>
      </Container>
    </StyledSection>
  );
};

export default Speakers;
