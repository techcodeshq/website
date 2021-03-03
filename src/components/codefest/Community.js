import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';
import Img from 'gatsby-image';
import Shapes from '@images/codefest/Shapes.svg';

const StyledSection = styled(Section)`
  padding-top: 15rem;
  padding-bottom: 15rem;
  overflow-x: hidden;
  min-height: 60rem;

  ${media.tablet`max-height: 40rem;`};
  ${media.thone`padding-top: 10rem;`};
`;
const BigText = styled.h1`
  font-weight: bold;
  font-size: 80px;
  letter-spacing: -2px;
  line-height: 100%;
  text-align: center !important;

  ${media.massive`font-size: 70px;`};
  ${media.thone`font-size: 48px;`};
`;
const Description = styled.p`
  font-size: 28px;
  max-width: 90%;
  line-height: 146%;
  text-align: center !important;

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
  width: 100vw;
  z-index: 1;

  ${media.tablet`display: none;`};
`;

const Main = styled.div`
  background-color: #3c61af;
  width: 100vw !important;
  padding: 20px;
  min-height: 10vh;
`;

const NewContainer = styled.Container`
  padding: 0 !important;
`;

const Community = ({ data }) => {
  return (
    <StyledSection>
      <NewContainer max>
        <Col max>
          <Row>
            <StyledImage src={Shapes} alt="hello" />
          </Row>
          <Row>
            <Main></Main>
          </Row>
        </Col>
      </NewContainer>
    </StyledSection>
  );
};

export default Community;
