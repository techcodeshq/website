import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';

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

  a {
    text-decoration: underline;
    color: var(--text);
  }

  ${media.massive`font-size: 70px;`};
  ${media.thone`font-size: 48px;`};
`;

const ContactPage = () => {
  return (
    <StyledSection>
      <Container max>
        <BigText>
          <span role="img" aria-label="wave">
            👋{' '}
          </span>
          Have an idea, question, or just want to talk? You can{' '}
          <a
            href="mailto:team@techcodes.org?subject=Hello!"
            target="_blank"
            rel="noopener noreferrer">
            contact us
          </a>{' '}
          at any time!
        </BigText>
      </Container>
    </StyledSection>
  );
};

export default ContactPage;
