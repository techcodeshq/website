import styled from 'styled-components';
import { media } from '@styles';

export const TeamMember = styled.div`
  padding: 6vw 12vw;

  ${media.thone`padding: 6vw 0;`};
`;
export const TeamPFP = styled.div`
  width: 25vw;

  img {
    border-radius: 4vw;
  }
`;
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: flex-end;
`;
export const TextWrap = styled.div`
  margin-left: 2vw;
`;
export const NamePerson = styled.p`
  font-size: 6vw;
  line-height: 80%;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  color: var(--green);

  ${media.tablet`font-size: 9vw;`};
`;
export const NormalText = styled.p`
  font-size: 1.8vw;
  line-height: 120%;
  margin-bottom: 0;
  color: var(--text);

  ${media.thone`font-size: 16px;`};
`;
export const Position = styled.p`
  color: var(--text);
  font-size: 1vw;
  line-height: 90%;

  ${media.tablet`font-size: 16px;`};
`;

// Sponsors
export const SponsorText = styled.p`
  font-size: 6vw;
  line-height: 110%;
  font-weight: 500;
  margin: 0;
  color: var(--text);
  max-width: 70vw;

  ${media.tablet`font-size: 9vw;`};
`;
export const SponsorWrapper = styled.div`
  padding: 10vw 5vw 2vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    padding-top: 5vw;
  }
`;
