import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Hero, Team, Info } from '@components/about';

const AboutPage = ({ data }) => {
  return (
    <>
      <Helmet title="About" />
      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section>
        <Info />
      </div>
      <div data-scroll-section>
        <Team data={data} />
      </div>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  {
    chanul: file(relativePath: { eq: "team/chanul.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kyrylo: file(relativePath: { eq: "team/kyrylo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wenfeng: file(relativePath: { eq: "team/wenfeng.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jibran: file(relativePath: { eq: "team/jibran.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    priyam: file(relativePath: { eq: "team/priyam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    malik: file(relativePath: { eq: "team/malik.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    edward: file(relativePath: { eq: "team/edward.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rigby: file(relativePath: { eq: "team/rigby.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fatim: file(relativePath: { eq: "team/fatim.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
