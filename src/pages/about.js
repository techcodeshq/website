import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Hero, Team, Info } from '@components/about';

const AboutPage = ({ data }) => {
  return (
    <>
      <Helmet title="About" />
      <div data-scroll-section>
        <Hero data={data} />
      </div>
      <div data-scroll-section>
        <Info data={data} />
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
    blast: file(relativePath: { eq: "props/blast.png" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
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
    kateri: file(relativePath: { eq: "team/kateri.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    santiago: file(relativePath: { eq: "team/santiago.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    katelyn: file(relativePath: { eq: "team/katelyn.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dashiell: file(relativePath: { eq: "team/dashiell.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ismaeel: file(relativePath: { eq: "team/ismaeel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    melanie: file(relativePath: { eq: "team/melanie.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nirjhor: file(relativePath: { eq: "team/nirjhor.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
