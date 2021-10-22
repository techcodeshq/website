import React from 'react';
import styled from 'styled-components';
import { Container, media } from '@styles';
import { FormattedIcon } from '@components/icons';
import CODELogo from '@images/logo.svg';

const FooterSection = styled.footer`
  padding: 6.25rem 0;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${media.thone`
    flex-direction: column-reverse;
    align-items: flex-start;
  `};
`;
const RowInRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media.tablet`
    flex-direction: column;
    margin-top: 2rem;
    align-items: flex-start;
  `};
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  :not(:first-child) {
    margin-left: 10rem;
    ${media.desktop`margin-top: 2rem;`};
    ${media.tablet`margin-left: 0;`};
  }
`;
const ColTitle = styled.p`
  font-weight: 700;
  letter-spacing: -1.4px;
  font-size: 25px;
  margin: 0;
`;
const ColLink = styled.a`
  font-weight: 500;
  font-size: 25px;
  letter-spacing: -1.4px;
  color: var(--gray);
  :hover {
    text-decoration: underline;
  }
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
    margin-right: 1rem;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    color: var(--text);
    :hover {
      transform: scale(1.1);
    }
  }
`;
const RowBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  justify-content: space-between;
  align-items: center;
  a {
    color: var(--text);
    :hover {
      text-decoration: underline;
    }
  }
  ${media.tablet`flex-direction: column;`};
`;
const Copy = styled.small`
  color: var(--gray);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -1px;
`;
const Credits = styled.p`
  color: var(--gray);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -1px;
`;
const Logo = styled.img`
  width: 10rem;
`;

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <FooterSection>
      <Container>
        <Row>
          <Logo src={CODELogo} alt="Council of Digital Engineers" />
          <RowInRow>
            <Col>
              <ColTitle>Contact us</ColTitle>
              <ColLink
                href="mailto:team@techcodes.org?subject=Hello!"
                target="_blank"
                rel="noopener noreferrer">
                team@techcodes.org
              </ColLink>
            </Col>
            <Col>
              <ColTitle>Socials</ColTitle>
              <Socials>
                <a href="https://instagram.com/bthscode" target="_blank" rel="noopener noreferrer">
                  <FormattedIcon name="instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/council-of-digital-engineers"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FormattedIcon name="linkedin" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC74GHmtwQoj3bFxw2pBYM0A"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FormattedIcon name="youtube" />
                </a>
                <a href="https://github.com/CodeBTHS" target="_blank" rel="noopener noreferrer">
                  <FormattedIcon name="github" />
                </a>
                <a href="https://twitter.com/bthscode" target="_blank" rel="noopener noreferrer">
                  <FormattedIcon name="twitter" />
                </a>
              </Socials>
            </Col>
          </RowInRow>
        </Row>
        <RowBottom>
          <a href="/press-release.pdf">Download latest press release</a>
          <Copy>
            &copy; {currentYear} Council of Digital Engineers. 501(c)(3) nonprofit (EIN: 81-2908499)
          </Copy>
          <Credits>
            Made by{' '}
            <a href="https://kyryloorlov.com" target="_blank" rel="noopener noreferrer">
              Kyrylo
            </a>
          </Credits>
        </RowBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
