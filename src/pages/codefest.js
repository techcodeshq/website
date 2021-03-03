import React from 'react';
import { Helmet } from 'react-helmet';
import { Hero, Community } from '@components/codefest';

const codefest = ({ data }) => {
  return (
    <>
      <Helmet title="Events" />
      <div data-scroll-section>
        <Hero data={data} />
      </div>
      <div data-scroll-section>
        <Community data={data} />
      </div>
    </>
  );
};

export default codefest;

export const query = graphql`
  {
    blast: file(relativePath: { eq: "codefest/Shapes.png" }) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
