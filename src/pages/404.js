import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { SmoothScroll, Footer } from '@components';
import { Container, Link, media } from '@styles';

const SectionWrapper = styled.section`
  min-height: 80vh;
  width: 100%;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2vw;
  padding-top: 20vmin;

  ${media.thone`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  `};
`;
const Title = styled.h1`
  font-size: 22vw;
  line-height: 80%;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  color: var(--text);

  ${media.tablet`font-size: 28vw;`};
`;
const DescriptionWrapper = styled.div`
  font-size: 6vw;
  font-weight: 500;
  text-transform: uppercase;
`;
const Description = styled.p`
  font-size: 6vw;
  line-height: 98%;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  color: var(--text);
`;
const LinkWrapper = styled.div`
  padding-top: 6vw;
`;

const NotFoundPage = ({ location }) => {
  return (
    <>
      <Helmet title="Page Not Found" />
      <SmoothScroll callbacks={location} />

      <SectionWrapper>
        <Container>
          <ContentWrapper>
            <Title>404</Title>
            <DescriptionWrapper>
              <Description>Uh-oh. We couldn’t find that page!</Description>
              <LinkWrapper>
                <Link to="/">Home</Link>
              </LinkWrapper>
            </DescriptionWrapper>
          </ContentWrapper>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default NotFoundPage;
