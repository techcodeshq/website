import React from 'react';
import { graphql } from 'gatsby';
import { Hero, About, Events, Sponsor, CTA } from '@components/home';

const HomePage = ({ data }) => {
  return (
    <>
      <div data-scroll-section>
        <Hero data={data} />
      </div>
      <div data-scroll-section>
        <About data={data} />
      </div>
      <div data-scroll-section>
        <Events data={data} />
      </div>
      <div data-scroll-section>
        <Sponsor />
      </div>
      <div data-scroll-section>
        <CTA />
      </div>
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    rocket: file(relativePath: { eq: "props/rocket.png" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bucket: file(relativePath: { eq: "props/bucket.png" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 450) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    folder: file(relativePath: { eq: "props/folder.png" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    potion: file(relativePath: { eq: "props/potion.png" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    searching: file(relativePath: { eq: "props/searching.png" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    drawing: file(relativePath: { eq: "props/drawing.png" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
