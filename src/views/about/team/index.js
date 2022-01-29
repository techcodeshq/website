import React from 'react';
import { HTMLRenderer } from '@components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container } from '@styles';
import {
  TeamMember,
  TeamPFP,
  ContentWrapper,
  NamePerson,
  NormalText,
  TextWrap,
  Position,
  SponsorText,
  SponsorWrapper,
} from './style';
import SponsorsImage from '@images/sponsors.png';

const Team = ({ data }) => {
  return (
    <>
      {data.team.map((person, index) => (
        <TeamMember key={index}>
          <Container>
            <ContentWrapper>
              <TeamPFP>
                <GatsbyImage image={person.image.gatsbyImageData} alt={person.alt} />
              </TeamPFP>
              <TextWrap>
                <Position>{person.memberPosition}</Position>
                <NamePerson>{person.name}</NamePerson>
                <HTMLRenderer html={person.description} components={{ p: NormalText }} />
              </TextWrap>
            </ContentWrapper>
          </Container>
        </TeamMember>
      ))}
      <SponsorWrapper>
        <SponsorText>We work with some pretty unique people</SponsorText>
        <img src={SponsorsImage} alt="Our beloved sponsors." />
      </SponsorWrapper>
    </>
  );
};

export default Team;
