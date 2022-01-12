import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container } from '@styles';
import { HeroSection, SectionTitle, ArticleDate, ImageWrapper } from './style';

const Hero = ({ data }) => {
  console.log(data.date);
  const normalDate = new Date(data.date);
  const parsedDate = new Date(normalDate.getTime() + Math.abs(normalDate.getTimezoneOffset()*60000)).toDateString();

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
