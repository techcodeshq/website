import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Hero } from '@components/sponsors';

const SponsorsPage = ({ data }) => {
  return (
    <>
      <Helmet title="Sponsors" />
      <div data-scroll-section>
        <Hero data={data} />
      </div>
    </>
  );
};

export default SponsorsPage;

export const query = graphql`
  {
    heart: file(relativePath: { eq: "props/heart.png" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
