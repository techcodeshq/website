import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card, DefaultText } from '@styles';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div :last-child {
    ${media.desktop`margin-top: 2rem;`};
  }

  ${media.desktop`
    flex-direction: column;
  `};
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

const Info = ({ data }) => {
  return (
    <Section>
      <Container>
        <CardsWrapper>
          <Card width="48%" bg="var(--blue)">
            <TextWrapper>
              <Title>About CODE</Title>
              <DefaultText>
                CODE is a student-run 501(c)(3) nonprofit, for students, by students. Founded by
                Chanul Dandeniya and Kyrylo Orlov in June 2020, in hopes to rejuvenate and revive
                student interest in programming in the largest and most prestigious STEM secondary
                institution, Brooklyn Technical High School, through countless initiatives and
                programs CODE has now grown and impacted students all across the NYC Metropolitan
                area
              </DefaultText>
            </TextWrapper>
          </Card>
          <Card width="48%" bg="var(--yellow)">
            <TextWrapper>
              <Title>Our mission</Title>
              <DefaultText>
                Although diversity efforts are a large talking point in society today, diversity in
                STEM continues to decrease. We’re addressing these issues at their roots by bringing
                together like-minded students across the entire tri-state, especially those
                marginalized and disadvantaged, through hackathons, competitions, weekly meetings,
                and other advantageous events designed by our team.
              </DefaultText>
            </TextWrapper>
          </Card>
        </CardsWrapper>
      </Container>
    </Section>
  );
};

export default Info;
