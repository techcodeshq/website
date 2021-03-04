import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';

const StyledSection = styled(Section)`
  overflow-x: hidden;
  min-height: 20rem;
  padding: 0 !important;
  margin: 0 !important;
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
  background-color: #5426d7;
  width: 100% !important;
  padding: 10vh 12vw;
`;
const Prizes = ({ data }) => {
  return (
    <StyledSection>
      <Container max style={{ padding: 0 }}>
        <Col max>
          <Row>
            <Main>
              <Row>
                <Col>
                  <BigText>2nd Place</BigText>
                  <Description>
                    $160 Vist Gift Card
                    <br />
                    1Password Membership
                    <br />
                    Repl.it Hacker Plan
                  </Description>
                </Col>
                <Col>
                  <BigText>1st Place</BigText>
                  <Description>
                    $260 Visa Gift Card
                    <br />
                    Wolfram | One Person Edition
                    <br />
                    Wolfram | Alpha Pro
                    <br />
                    1Password Membership
                    <br />
                    Repl.it Hacker Plan
                    <br />
                    $50 Amazon Gift Card
                  </Description>
                </Col>
                <Col>
                  <BigText>3rd Place</BigText>
                  <Description>
                    $95 Visa Gift Card
                    <br />
                    Repl.it Hacker Plan
                  </Description>
                </Col>
              </Row>

              <BigText>Raffle winner gets AirPods and 24 premium months of Framer</BigText>
            </Main>
          </Row>
        </Col>
      </Container>
    </StyledSection>
  );
};

export default Prizes;
