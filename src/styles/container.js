import styled from 'styled-components';
import media from './media';

const Container = styled.div`
  ${props =>
    props.max
      ? `
    padding-right: 8%;
    padding-left: 8%;
  `
      : `
    padding-right: 3%;
    padding-left: 3%;
  `}

  ${media.desktop`
    padding-right: 24px;
    padding-left: 24px;
  `};
`;

export default Container;
