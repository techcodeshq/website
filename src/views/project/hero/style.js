import styled from 'styled-components';
import { media } from '@styles';

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  padding-top: 20vmin;
`;
export const SectionTitle = styled.h1`
  font-size: 6vw;
  font-weight: 500;
  line-height: 95%;
  text-transform: uppercase;
  color: var(--text);
  margin: 0;

  ${media.desktop`font-size: 8.7vw;`}
  ${media.thone`font-size: 10vw;`};
`;
export const ArticleDate = styled.p`
  font-size: 1.2vw;
  margin: 0;

  ${media.thone`font-size: 4vw;`};
`;
export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 4vw;

  img {
    border-radius: 4vw;
  }
`;
