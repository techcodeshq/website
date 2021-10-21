import styled from 'styled-components';
import { media } from '@styles';

export const ArticleWrap = styled.article`
  position: relative;
  width: 100%;
`;
export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: auto 70%;
  grid-gap: 4vw;

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
export const ArticleLink = styled.a`
  color: var(--green);
  text-decoration: none;

  :hover {
    color: var(--text);
  }
`;
export const SubHeading = styled(ArticleText)`
  font-weight: 500;
  line-height: 120%;
  font-size: 2.45vw;
  margin-bottom: 4vw;

  ${media.tablet`font-size: 18px;`};
`;
export const LinkWrapper = styled.div`
  padding-top: 2vw;
  font-size: 1.45vw;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    margin-top: 1vw;
  }

  ${media.tablet`
    font-size: 16px;
    margin-top: 5vw;
  `};
`;
