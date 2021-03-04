import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';

const StyledSection = styled(Section)`
  overflow-x: hidden;
  min-height: 40rem;
  padding-top: 0 !important;

  ${media.tablet`max-height: 30rem;`};
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
const Description = styled.p`
  font-size: 28px;
  max-width: 90%;
  line-height: 146%;
  text-align: center !important;
  color: ${props => (props.black ? 'black' : 'white')};
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
  width: ${props => (props.max ? '100%' : props.bigger ? '60%' : '30%')};
  align-items: center;
  justify-content: center;

  ${media.tablet`width: 100%;`};
`;

const Main = styled.div`
  width: 100% !important;
  padding: 19vh 12vw;
  min-height: 60vh;
`;
const Prizes = ({ data }) => {
  return (
    <StyledSection>
      <Container max style={{ padding: 0 }}>
        <Col max>
          <Main>
            <BigText black>Our beloved sponsors supporting us for this hackathon.</BigText>
          </Main>
        </Col>
      </Container>
    </StyledSection>
  );
};

export default Prizes;
