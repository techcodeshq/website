import React from 'react';
import { motion } from 'framer-motion';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useWindowSize } from '@hooks';
import {
  SectionWrapper,
  SectionTitle,
  TitleLine,
  LinksWrapper,
  FlaskImage,
  FolderImage,
  CupImage,
  RocketImage,
  StyledText,
  ContentWrapper,
} from './style';
import { Link, OverflowWrapper } from '@styles';

const HomeSection = ({ data }) => {
  const { width, height } = useWindowSize();

  return (
    <SectionWrapper>
      <ContentWrapper>
        <SectionTitle>
          <OverflowWrapper>
            <TitleLine
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, ease: [0.7, 0, 0.07, 1], duration: 1 }}>
              Teaching students
            </TitleLine>
          </OverflowWrapper>
          <OverflowWrapper>
            <TitleLine
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, ease: [0.7, 0, 0.07, 1], duration: 1 }}>
              around the globe
            </TitleLine>
          </OverflowWrapper>
          <OverflowWrapper>
            <TitleLine
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, ease: [0.7, 0, 0.07, 1], duration: 1 }}>
              how to code.
            </TitleLine>
          </OverflowWrapper>
        </SectionTitle>
        <StyledText
          initial={{ opacity: 0, y: '-10%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, ease: [0.7, 0, 0.07, 1], duration: 1 }}>
          Although diversity efforts are a large talking point in society today, diversity in STEM
          continues to decrease. We’re addressing these issues at their roots by bringing together
          like-minded students across the entire tri-state, especially those marginalized and
          disadvantaged, through hackathons, competitions, weekly meetings, and other advantageous
          events designed by our team.
        </StyledText>
        <LinksWrapper>
          <motion.div
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ease: [0.7, 0, 0.07, 1], duration: 1 }}>
            <Link to="/about">About us</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease: [0.7, 0, 0.07, 1], duration: 1 }}>
            <Link to="/initiatives">Initiatives</Link>
          </motion.div>
        </LinksWrapper>
      </ContentWrapper>
      {(width <= 1000 && width > 850 && height < 1040) ||
      (width <= 850 && width > 675 && height < 825) ||
      (width <= 675 && width > 550 && height < 970) ||
      (width <= 550 && height < 550) ? null : (
        <>
          <FlaskImage
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, ease: [0.7, 0, 0.07, 1], duration: 0.8 }}>
            <GatsbyImage image={data.potion.childImageSharp.gatsbyImageData} alt="Floating toy" />
          </FlaskImage>
          <FolderImage
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, ease: [0.7, 0, 0.07, 1], duration: 0.8 }}>
            <GatsbyImage image={data.folder.childImageSharp.gatsbyImageData} alt="Floating toy" />
          </FolderImage>
          <CupImage
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, ease: [0.7, 0, 0.07, 1], duration: 0.8 }}>
            <GatsbyImage image={data.bucket.childImageSharp.gatsbyImageData} alt="Floating toy" />
          </CupImage>
          <RocketImage
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, ease: [0.7, 0, 0.07, 1], duration: 0.8 }}>
            <GatsbyImage image={data.rocket.childImageSharp.gatsbyImageData} alt="Floating toy" />
          </RocketImage>
        </>
      )}
    </SectionWrapper>
  );
};

export default HomeSection;
