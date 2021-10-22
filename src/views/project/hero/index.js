import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container } from '@styles';
import { HeroSection, SectionTitle, ArticleDate, ImageWrapper } from './style';

const Hero = ({ data }) => {
  const parsedDate = new Date(data.date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <HeroSection>
      <Container>
        <SectionTitle>{data.title}</SectionTitle>
        <ArticleDate>{parsedDate}</ArticleDate>
        <ImageWrapper>
          <GatsbyImage image={data.thumbnail.gatsbyImageData} alt={data.thumbnail.alt} />
        </ImageWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
