import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Section, Container, Button } from '@styles';

const StyledMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

const NotFoundPage = () => {
  return (
    <>
      <Helmet title="Page Not Found" />

      <div data-scroll-section>
        <Section>
          <Container max>
            <StyledMainContainer>
              <StyledTitle>404</StyledTitle>
              <StyledSubtitle>Page Not Found</StyledSubtitle>
              <Button to="/">Go Home</Button>
            </StyledMainContainer>
          </Container>
        </Section>
      </div>
    </>
  );
};

export default NotFoundPage;
