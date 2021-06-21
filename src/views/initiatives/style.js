import styled from 'styled-components';
import { Link } from 'gatsby';
import { media } from '@styles';

export const ProjectsWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding-top: 30vmin;
`;
export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2vw;
`;
export const ImageWrapper = styled(Link)`
  img {
    border-radius: 4vw;
  }
`;
export const SectionTitle = styled.h1`
  font-size: 6vw;
  font-weight: 500;
  line-height: 95%;
  text-transform: uppercase;
  color: var(--text);

  ${media.desktop`font-size: 8.7vw;`}
  ${media.thone`font-size: 8.7vw;`};
`;
