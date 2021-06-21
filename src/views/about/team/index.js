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
} from './style';

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
    </>
  );
};

export default Team;
