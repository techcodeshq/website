import styled from 'styled-components';
import { media } from '@styles';

export const ArticleWrap = styled.article`
  position: relative;
  width: 100%;
`;
export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: auto 80%;
  grid-gap: 2vw;

  ${media.thone`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  `};
`;
export const ArticleText = styled.p`
  font-size: 1.45vw;
  line-height: 160%;
  margin-bottom: 0;
  color: var(--text);

  ${media.tablet`font-size: 16px;`};
`;
export const SubHeading = styled(ArticleText)`
  font-weight: 500;
  text-indent: 8vw;
  line-height: 130%;

  font-size: 2.45vw;
  ${media.tablet`font-size: 18px;`};
`;
export const LinkWrapper = styled.div`
  padding-top: 3.6vw;
  font-size: 1.45vw;
  text-transform: uppercase;

  ${media.tablet`
    font-size: 16px;
    margin-top: 5vw;
  `};
`;
