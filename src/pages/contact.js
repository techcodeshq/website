import React from 'react';
import { Helmet } from 'react-helmet';
import { SmoothScroll, Footer } from '@components';
import styled from 'styled-components';
import { media, Container, Link } from '@styles';

const SectionWrapper = styled.section`
  min-height: 80vh;
  width: 100%;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  min-height: inherit;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 6vw;
  font-weight: 500;
  line-height: 95%;
  text-transform: uppercase;
  color: var(--text);
  margin: 0;

  ${media.desktop`font-size: 8.7vw;`}
`;
const LinkWrap = styled.div`
  font-size: 1.8vw;
  font-weight: 500;
  line-height: 95%;
  text-transform: uppercase;
  color: var(--text);
  margin: 0;
  margin-top: 10vw;

  ${media.desktop`font-size: vw;`}
`;

const ContactPage = ({ location }) => {
  return (
    <>
      <Helmet title="Contact us" />
      <SmoothScroll callbacks={location} />

      <SectionWrapper>
        <ContentWrapper>
          <Container>
            <Title>Want to talk to us?</Title>
            <Title>Shoot us an email.</Title>
            <LinkWrap>
              <Link href="mailto:team@techcodes.org">team@techcodes.org</Link>
            </LinkWrap>
          </Container>
        </ContentWrapper>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default ContactPage;
