import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';
import Shapes from '@images/codefest/Shapes.svg';

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
  width: ${props => (props.max ? '100%' : props.bigger ? '60%' : '40%')};
  align-items: center;
  justify-content: center;

  ${media.tablet`width: 100%;`};
`;
const Main = styled.div`
  background-color: #3c61af;
  width: 100% !important;
  padding: 19vh 12vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const FlexWrapper = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;
const BaseWrapper = styled.div`
  position: relative;
  top: -6.95rem;
  width: 95.9rem;
`;
const StyledImage = styled.img`
  width: 100%;
  position: absolute;
`;

const Community = () => {
  return (
    <>
      <BaseWrapper data-scroll data-scroll-speed={0.25}>
        <FlexWrapper>
          <StyledImage src={Shapes} alt="Shapes" />
        </FlexWrapper>
      </BaseWrapper>
      <StyledSection style={{ padding: 0, margin: 0 }}>
        <Container max style={{ padding: 0 }}>
          <Col max>
            <Row>
              <Main>
                <BigText>
                  CodeFest is a community of students, fighting for a better future through computer
                  science.
                </BigText>
                <Description>
                  Calling all innovative programmers, designers, and developers! CODE is proud to
                  announce its very own 24-hour virtual hackathon: CodeFest! This event will take
                  place virtually on March 14th, 17th, and 20th with the theme being Humanitarian
                  Issues!∂ Everyone is welcome! CodeFest will allow creative individuals with any
                  background or experience in coding to take part in thought-provoking challenges,
                  work with like-minded and diverse groups of people, as well as have the ability to
                  win up to thousands of dollars in prizes!
                </Description>
              </Main>
            </Row>
          </Col>
        </Container>
      </StyledSection>
    </>
  );
};

export default Community;
