import React, { useState } from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';
import { motion } from 'framer-motion';
import { FormattedIcon } from '@components/icons';

const StyledSection = styled(Section)`
  overflow-x: hidden;
  min-height: 12rem;
  padding: 0 !important;
  margin: 0 !important;
`;
const Description = styled(motion.p)`
  font-size: 36px;
  line-height: 146%;
  margin: 0;
  color: ${props => (props.black ? 'black' : 'white')};

  ${media.tablet`font-size: 24px;`};
  ${media.thone`font-size: 19px;`};
`;
const FlexWrapper = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
`;
const BaseCol = styled.a`
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: center;
  padding: 126px 0 96px;
  flex-direction: column;

  svg {
    width: 120px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    color: #fff;

    :hover {
      transform: scale(1.1);
    }
  }
`;
const DiscordCol = styled(BaseCol)`
  background-color: #7289da;
`;
const TwitterCol = styled(BaseCol)`
  background-color: #1da1f2;
`;

const Prizes = ({ data }) => {
  const [hovering, setHovering] = useState(null);

  return (
    <StyledSection>
      <Container max style={{ padding: 0 }}>
        <FlexWrapper>
          <DiscordCol
            onMouseEnter={() => setHovering(0)}
            onMouseLeave={() => setHovering(null)}
            href="https://discord.gg/KuYsVuY"
            target="_blank"
            rel="noopener noreferrer">
            <motion.div initial={{ y: 25 }} animate={hovering === 0 ? { y: -20 } : { y: 25 }}>
              <FormattedIcon name="discord" />
            </motion.div>
            <Description
              initial={{ opacity: 0 }}
              animate={hovering === 0 ? { opacity: 1 } : { opacity: 0 }}>
              Join our Discord for updates
            </Description>
          </DiscordCol>
          <TwitterCol
            onMouseEnter={() => setHovering(1)}
            onMouseLeave={() => setHovering(null)}
            href="https://twitter.com/bthscode"
            target="_blank"
            rel="noopener noreferrer">
            <motion.div initial={{ y: 25 }} animate={hovering === 1 ? { y: -20 } : { y: 25 }}>
              <FormattedIcon name="twitter" />
            </motion.div>
            <Description
              initial={{ opacity: 0 }}
              animate={hovering === 1 ? { opacity: 1 } : { opacity: 0 }}>
              Follow our socials for updates
            </Description>
          </TwitterCol>
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

export default Prizes;
