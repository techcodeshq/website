import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media, Container, Section } from '@styles';

const StyledSection = styled(Section)`
  padding-top: 10rem;

  ${media.thone`padding-top: 4.25rem;`};
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 46px;

  ${media.tablet`
    grid-template-columns: 1fr;
    grid-gap: 24px;
  `};
`;
const Card = styled.div`
  border-radius: 8px;
  display: grid;
  gap: 6px 18px;
  grid-template-columns: 64px 1fr;
  align-items: center;
`;
const CenterText = styled.h1`
  font-size: 104px;
  margin-bottom: 5rem;

  ${media.desktop`font-size: 65px;`};
`;
const StyledImage = styled(Img)`
  border-radius: 9999px;
  display: inline-block;
  width: 64px;
  height: 64px;
  user-select: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);

  :hover {
    transform: rotate(10deg) scale(1.1);
  }
`;
const Name = styled.h3`
  margin-top: 0;
  margin-bottom: 0.4rem;
  color: var(--text);
  font-weight: bold;
  font-size: 36px;
  line-height: 1;

  ${media.thone`font-size: 27px;`};
`;
const Position = styled.span`
  font-size: 18px;
  color: var(--dark-gray);
  font-weight: bold;
`;
const Description = styled.p`
  grid-column: 2 / auto;
  align-self: start;

  margin: 0;
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 16px;

  ${media.phablet`
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  `};
`;

const Team = ({ data }) => {
  return (
    <StyledSection>
      <Container max>
        <CenterText>Meet the team.</CenterText>
        <GridWrapper>
          <Card>
            <StyledImage
              fluid={data.chanul.childImageSharp.fluid}
              alt="Chanul Dandeniya"
              objectFit="cover"
            />
            <div>
              <Name>Chanul Dandeniya</Name>
              <Position>President</Position>
            </div>
            <Description>
              Hello World! My name is Chanul Dandeniya, and I will be serving as your President here
              at CODE. I’m currently a sophomore, and one of my biggest goals is to change the world
              through the use of computer science! I am looking forward to meeting each and every
              one of you and help you on your journey in engineering and computer science!
            </Description>
          </Card>
          <Card>
            <StyledImage
              fluid={data.kyrylo.childImageSharp.fluid}
              alt="Kyrylo Orlov"
              objectFit="cover"
            />
            <div>
              <Name>Kyrylo Orlov</Name>
              <Position>Vice President</Position>
            </div>
            <Description>
              Hi everyone! My name is Kyrylo Orlov and I am the vice president of CODE. I am a
              sophomore and I've been studying software engineering for 8 years, currently focusing
              on web development and UI/UX design. I believe that technology is here to make the
              world a better place and I can’t wait to spark your interest and share my experience
              of computer science to you all.
            </Description>
          </Card>
          <Card>
            <StyledImage
              fluid={data.jibran.childImageSharp.fluid}
              alt="Jibran Khan"
              objectFit="cover"
            />
            <div>
              <Name>Jibran Khan</Name>
              <Position>Outreach director</Position>
            </div>
            <Description>
              Hello! My name is Jibran Khan, and I am currently a Junior at Brooklyn Technical High
              School. I am going to be your Outreach Director this year! I am very excited to work
              with everyone and getting to meet new people, as well as teach people about
              technology! I hope to facilitate the formation of this new and passionate community!
            </Description>
          </Card>
          <Card>
            <StyledImage
              fluid={data.priyam.childImageSharp.fluid}
              alt="Priyam Shah"
              objectFit="cover"
            />
            <div>
              <Name>Priyam Shah</Name>
              <Position>Parliamentarian</Position>
            </div>
            <Description>
              Hello! My name is Priyam Shah and I am the parliamentarian for the Council of Digital
              Engineers club. I am also a sophomore at Brooklyn Technical High School. A few of my
              hobbies, in freshman year, were to hang out with my friends and play a lot of
              basketball. I want to have a productive year, with all of you, at our club and am
              looking forward to an awesome year.
            </Description>
          </Card>
          <Card>
            <StyledImage
              fluid={data.wenfeng.childImageSharp.fluid}
              alt="Wen Feng Li"
              objectFit="cover"
            />
            <div>
              <Name>Wen Feng Li</Name>
              <Position>Secretary</Position>
            </div>
            <Description>
              Hey all! I'm Wen Feng Li, the secretary for the Council of Digital Engineers. I'm
              currently a junior in the software engineering major. My interests/stress relievers
              include playing video games, watching anime, and working out. I look forward to work
              with each and every one of you and make this club one of, if not, the best club in
              Tech.
            </Description>
          </Card>
          <Card>
            <StyledImage
              fluid={data.malik.childImageSharp.fluid}
              alt="Malik Umar"
              objectFit="cover"
            />
            <div>
              <Name>Malik Umar</Name>
              <Position>Membership Director</Position>
            </div>
            <Description>
              Hi! My name is Malik Umar and I am a junior in the Industrial Design major. I am a
              dedicated individual that has a passion for engineering and I am eager to help others
              learn about engineering with my experience. I am motivated to increase my knowledge
              and experience in the different fields of engineering using creative and fun methods.
            </Description>
          </Card>
          <Card>
            <StyledImage
              fluid={data.edward.childImageSharp.fluid}
              alt="Edward He"
              objectFit="cover"
            />
            <div>
              <Name>Edward He</Name>
              <Position>Events Director</Position>
            </div>
            <Description>
              Hello Digital Engineers, my name is Edward, and I am your events director. I am
              currently a senior in the Aerospace Engineering major. A thing about engineering and
              computer science that I appreciate is how you get to see the product of your work
              quickly. The Council of Digital Engineers appeals to me because it brings together
              different areas contained in STEM.
            </Description>
          </Card>
          <Card>
            <StyledImage
              fluid={data.rigby.childImageSharp.fluid}
              alt="Ragib Noor"
              objectFit="cover"
            />
            <div>
              <Name>Ragib Noor</Name>
              <Position>Treasurer</Position>
            </div>
            <Description>
              Hi, my name is Ragib Noor. I’m a Junior in the Industrial Design major and I will be
              your Treasurer for this year. My main passion is in engineering and I plan to go into
              the engineering field in college. By being an executive member of CODE, I am dedicated
              to not only teach our members more about Computer Science and Engineering but also
              learn more myself. I look forward to working with all of you.
            </Description>
          </Card>
          <Card>
            <StyledImage
              fluid={data.fatim.childImageSharp.fluid}
              alt="Fatim Majumder"
              objectFit="cover"
            />
            <div>
              <Name>Fatim Majumder</Name>
              <Position>Operations Director</Position>
            </div>
            <Description>
              Hello, my name is Fatim Majumder and I’m the Operations Director! I am a junior in the
              LIU Advanced Health Professions major, and I’m very passionate about computer science;
              I love watching a concept materialize as data. I look forward to promoting education
              on CS and keep learning more myself through this great community!
            </Description>
          </Card>
        </GridWrapper>
      </Container>
    </StyledSection>
  );
};

export default Team;
