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
import { Container, OverflowWrapper } from '@styles';

const Info = ({ data, images }) => {
  return (
    <InfoSection>
      <Container>
        <HeroWrapper>
          <RightImage
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, ease: [0.7, 0, 0.07, 1], duration: 0.8 }}>
            <GatsbyImage image={images.blast.childImageSharp.gatsbyImageData} alt="Floating toy" />
          </RightImage>
          <LeftImage
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, ease: [0.7, 0, 0.07, 1], duration: 0.8 }}>
            <GatsbyImage image={images.boxed.childImageSharp.gatsbyImageData} alt="Floating toy" />
          </LeftImage>
          <Title>
            <OverflowWrapper>
              <TitleLine
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6, ease: [0.7, 0, 0.07, 1], duration: 1 }}>
                Tech
              </TitleLine>
            </OverflowWrapper>
            <OverflowWrapper>
              <TitleLine
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, ease: [0.7, 0, 0.07, 1], duration: 1 }}>
                Codes
              </TitleLine>
            </OverflowWrapper>
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
