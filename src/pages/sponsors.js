import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Hero, List } from '@components/sponsors';

const SponsorsPage = ({ data }) => {
  return (
    <>
      <Helmet title="Sponsors" />
      <div data-scroll-section>
        <Hero data={data} />
        <List />
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
