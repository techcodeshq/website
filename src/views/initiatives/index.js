import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container } from '@styles';
import { ProjectsWrapper, ListWrapper, ImageWrapper, SectionTitle } from './style';

const Initiatives = ({ data }) => {
  return (
    <ProjectsWrapper>
      <Container>
        <SectionTitle>Initiatives</SectionTitle>
        <ListWrapper>
          {data.map((content, index) => (
            <ImageWrapper to={`/${content.slug}`}>
              <GatsbyImage image={content.thumbnail.gatsbyImageData} alt={content.thumbnail.alt} />
            </ImageWrapper>
          ))}
        </ListWrapper>
      </Container>
    </ProjectsWrapper>
  );
};

export default Initiatives;
