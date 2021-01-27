import styled from 'styled-components';
import media from './media';

const Section = styled.section`
  padding-top: 6.75rem;
  padding-bottom: 6.75rem;

  ${media.thone`
    padding-top: 4.25rem;
    padding-bottom: 4.25rem;
  `};
`;

export default Section;
