import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';
import Shapes from '@images/codefest/Shapes.svg';
import { motion } from 'framer-motion';

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
const StyledImage = styled.img`
  width: 100%;
  z-index: 1;
  position: absolute;
  top: -20.3rem;
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
const BaseWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ShapesWrapper = styled(BaseWrapper)`
  width: 95.9rem;
  display: flex;
  justify-content: center;
`;

const Community = () => {
  return (
    <StyledSection style={{ padding: 0, margin: 0 }}>
      <Container max style={{ padding: 0 }}>
        <Col max>
          <Row>
            <ShapesWrapper>
              <StyledImage src={Shapes} alt="Shapes" data-scroll data-scroll-speed={0.25} />
            </ShapesWrapper>
          </Row>
          <Row>
            <Main>
              <BigText>
                CodeFest is a community of students, fighting for a better future through computer
                science.
              </BigText>
              <Description>
                CODE is dedicated to fostering computer science education to students of all
                backgrounds and expose them to the creativity and innovation technology brings. By
                hosting numerous activities, such as guest speaker events, workshops, hackathons,
                and programming competitions, we are able to fulfill our goal on a wider scale.
                Although we are primarily based in the NYC Metropolitan Area, we are expanding our
                reach through numerous partnerships and corporations.
              </Description>
            </Main>
          </Row>
        </Col>
      </Container>
    </StyledSection>
  );
};

export default Community;
