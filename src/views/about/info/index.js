import React from 'react';
import { HTMLRenderer } from '@components';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  InfoSection,
  HeroWrapper,
  Title,
  TitleLine,
  RightImage,
  LeftImage,
  DescriptionText,
  DescriptionWrapper,
} from './style';
import { Container } from '@styles';

const Info = ({ data, images }) => {
  return (
    <InfoSection>
      <Container>
        <HeroWrapper>
          <RightImage>
            <GatsbyImage image={images.blast.childImageSharp.gatsbyImageData} alt="Floating toy" />
          </RightImage>
          <LeftImage>
            <GatsbyImage image={images.boxed.childImageSharp.gatsbyImageData} alt="Floating toy" />
          </LeftImage>
          <Title>
            <TitleLine>Tech</TitleLine>
            <TitleLine>Codes</TitleLine>
          </Title>
        </HeroWrapper>
        <DescriptionWrapper>
          <HTMLRenderer html={data.description} components={{ p: DescriptionText }} />
        </DescriptionWrapper>
      </Container>
    </InfoSection>
  );
};

export default Info;
