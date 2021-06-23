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

  ${media.thone`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 6vw;
  `};
`;
export const HoverWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.4);
  color: #f3f2f2;
  opacity: 0;
  transition: all 0.2s cubic-bezier(0.43, 0.13, 0.23, 0.96) !important;

  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const ImageWrapper = styled(Link)`
  position: relative;
  border-radius: 1vw;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.43, 0.13, 0.23, 0.96) !important;
  z-index: 2;

  img {
    transition: all 0.5s cubic-bezier(0.43, 0.13, 0.23, 0.96) !important;
  }

  :hover {
    border-radius: 4vw;
    ${HoverWrapper} {
      opacity: 1;
    }

    img {
      transform: scale(1.1) !important;
    }
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
