import styled from 'styled-components';
import media from './media';

const Card = styled.div`
  ${props => props.bg && `background-color: ${props.bg};`};
  ${props => props.color && `color: ${props.color};`};
  width: ${props => (props.width ? props.width : '100%')};
  padding: 100px;
  border-radius: 35px;
  overflow: hidden;

  ${media.massive`overflow: visible;`};
  ${media.desktop`
    padding: 75px;
    width: 100%;
  `};
  ${media.tablet`padding: 42px 36px;`};
`;

export default Card;
