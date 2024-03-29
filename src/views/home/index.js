import React from 'react';
import Div100vh from 'react-div-100vh';
import { HTMLRenderer } from '@components';
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
  // StyledText,
  ContentWrapper,
  // DescriptionWrapper,
} from './style';
import { Link, OverflowWrapper } from '@styles';
import { isMobile } from 'react-device-detect';

const CheckMobileSection = ({ children }) => {
  if (isMobile) {
    return <Div100vh>{children}</Div100vh>;
  } else {
    return children;
  }
};

const HomeSection = ({ data, doc }) => {
  const { width, height } = useWindowSize();

  return (
    <CheckMobileSection>
      <SectionWrapper isMobile={isMobile}>
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
          {/* <DescriptionWrapper
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: [0.7, 0, 0.07, 1], duration: 1 }}>
            <HTMLRenderer html={doc.description} components={{ p: StyledText }} />
          </DescriptionWrapper> */}
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
    </CheckMobileSection>
  );
};

export default HomeSection;
