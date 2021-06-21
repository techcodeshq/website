import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container, Link } from '@styles';
import { ProjectsWrapper, ListWrapper, ImageWrapper, SectionTitle, HoverWrapper } from './style';

const Initiatives = ({ data }) => {
  return (
    <ProjectsWrapper>
      <Container>
        <SectionTitle>Initiatives</SectionTitle>
        <ListWrapper>
          {data.map((content, index) => (
            <ImageWrapper to={`/${content.slug}`} key={index}>
              <HoverWrapper>
                <Link color="#F3F2F2" to={`/${content.slug}`}>
                  View Event
                </Link>
              </HoverWrapper>
              <GatsbyImage image={content.thumbnail.gatsbyImageData} alt={content.thumbnail.alt} />
            </ImageWrapper>
          ))}
        </ListWrapper>
      </Container>
    </ProjectsWrapper>
  );
};

export default Initiatives;
