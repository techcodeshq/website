import styled from 'styled-components';
import media from './media';

export const DefaultText = styled.p`
  font-size: 28px;
  line-height: 146%;

  ${media.tablet`font-size: 24px;`};
  ${media.thone`font-size: 16px;`};
`;
