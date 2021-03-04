import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';
import { FormattedIcon } from '@components/icons';

const StyledSection = styled(Section)`
  overflow-x: hidden;
  min-height: 12rem;
  padding: 0 !important;
  margin: 0 !important;

  ${media.tablet`max-height: 40rem;`};
`;
const BigText = styled.h1`s
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
  font-size: 36px;
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

const DiscordWrapper = styled.div`
  background-color: #7289da;
  width: 50% !important;
  padding: 10vh 4vw;
  min-height: 60vh;

  svg {
    width: 4rem;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    color: #fff;
    margin: 2rem;

    :hover {
      transform: scale(1.1);
    }
  }
`;
const SocialsWrapper = styled.div`
  background-color: #1da1f2;
  width: 50% !important;
  padding: 10vh 4vw;
  min-height: 60vh;
  justify-content: space-between;

  svg {
    width: 4rem;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    color: #fff;
    margin: 2rem;

    :hover {
      transform: scale(1.1);
    }
  }
`;
const Prizes = ({ data }) => {
  return (
    <StyledSection>
      <Container max style={{ padding: 0 }}>
        <Col max>
          <Row>
            <DiscordWrapper>
              <Row>
                <a href="https://discord.gg/KuYsVuY" target="_blank" rel="noopener noreferrer">
                  <FormattedIcon name="discord" />
                </a>
              </Row>
              <Row>
                <Description>Join our discord for more</Description>
              </Row>
            </DiscordWrapper>
            <SocialsWrapper>
              <Row>
                <a href="https://instagram.com/bthscode" target="_blank" rel="noopener noreferrer">
                  <FormattedIcon name="instagram" />
                </a>
                <a href="https://twitter.com/bthscode" target="_blank" rel="noopener noreferrer">
                  <FormattedIcon name="twitter" />
                </a>
              </Row>
              <Row>
                <Description>Follow our socials for updates</Description>
              </Row>
            </SocialsWrapper>
          </Row>
        </Col>
      </Container>
    </StyledSection>
  );
};

export default Prizes;
