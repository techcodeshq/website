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
  color: var(--text);

  ${media.massive`font-size: 70px;`};
  ${media.thone`font-size: 48px;`};
`;
const Description = styled.p`
  font-size: 28px;
  line-height: 146%;
  text-align: center !important;
  color: var(--text);

  ${media.tablet`font-size: 24px;`};
  ${media.thone`font-size: 19px;`};
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center !important;

  ${media.tablet`flex-direction: column;`};
`;
const Col = styled.div`
  flex: 0 0 auto;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${media.tablet`width: 100%;`};
`;
const Main = styled.div`
  background-color: var(--blue);
  width: 100% !important;
  padding: 10vh 12vw;
`;

const Schedule = () => {
  return (
    <StyledSection>
      <Container max style={{ padding: 0 }}>
        <Col max>
          <Row>
            <Main>
              <Row>
                <Col>
                  <BigText>Day 1</BigText>
                  <Description>
                    March 14th | 10-8PM EST
                    <br />
                    10 AM-12PM | Opening Ceremony
                    <br />
                    12-2PM | Hack Time!
                    <br />
                    2-3PM | Lunch!
                    <br />
                    3-4PM | EchoAR Workshop
                    <br />
                    4-7PM | Hack Time!
                    <br />
                    7-8PM | Game Night!
                  </Description>
                </Col>
                <Col>
                  <BigText>Day 2</BigText>
                  <Description>
                    4-5PM | Keynote Speaker #1 - MacKenzie Fisher
                    <br />
                    5-6PM | Artificial Intelligence Workshop
                    <br />
                    6-7PM | Keynote Speaker #2 - Chris Sean
                    <br />
                    7-8PM | Web Development Workshop
                  </Description>
                </Col>
                <Col>
                  <BigText>Day 3</BigText>
                  <Description>
                    10-11:30AM | Opening Ceremony
                    <br />
                    12-1PM | Jacob Thomas, Game Developer
                    <br />
                    1-2PM | Game Development Workshop
                    <br />
                    2:30PM | Deadline for All Projects on Devpost
                    <br />
                    3-6PM | Presentations & Judging
                    <br />
                    6-7PM | Closing Ceremony
                    <br />
                    7-8PM | Movie Night
                  </Description>
                </Col>
              </Row>
            </Main>
          </Row>
        </Col>
      </Container>
    </StyledSection>
  );
};

export default Schedule;
