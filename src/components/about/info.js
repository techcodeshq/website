import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card } from '@styles';

import BoxRocket from '@images/props/box_rocket.png';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;

  ${media.bigDesktop`gap: 4rem;`};
  ${media.desktop`flex-direction: column;`};
`;
const TextWrapper = styled.div`
  color: var(--text);

  ${media.thone`text-align: center;`};
`;
const Title = styled.h2`
  font-size: 65px;
  letter-spacing: -4px;
  font-weight: 700;
  margin: 0;
`;
const Description = styled.p`
  font-size: 28px;
  line-height: 146%;

  ${media.tablet`font-size: 24px;`};
  ${media.thone`font-size: 19px;`};
`;
const StyledImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;

  ${media.bigDesktop`width: 500px;`};
  ${media.desktop`display: none;`};
`;

const Info = () => {
  return (
    <Section>
      <Container>
        <CardsWrapper>
          <StyledImage src={BoxRocket} alt="About us" />
          <Card width="50%" bg="var(--blue)">
            <TextWrapper>
              <Title>About CODE</Title>
              <Description>
                CODE is a student-run 501(c)(3) nonprofit, for students, by students. Founded by
                Chanul Dandeniya and Kyrylo Orlov in June 2020, in hopes to rejuvenate and revive
                student interest in programming in the largest and most prestigous STEM secondary
                institution, Brooklyn Technical High School, through countless iniatives and
                programs CODE has now grown and impacted students all across the NYC Metropolitan
                area
              </Description>
            </TextWrapper>
          </Card>
          <Card width="50%" bg="var(--yellow)">
            <TextWrapper>
              <Title>Our mission</Title>
              <Description>
                Although diversity efforts are a large talking point in society today, diversity in
                STEM continues to decrease. We’re addressing these issues at their roots by bringing
                together like-minded students across the entire tri-state, especially those
                marginalized and disadvantaged, through hackathons, competitions, weekly meetings,
                and other advantageous events designed by our team.
              </Description>
            </TextWrapper>
          </Card>
        </CardsWrapper>
      </Container>
    </Section>
  );
};

export default Info;
