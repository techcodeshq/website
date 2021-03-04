import React from 'react';
import { Helmet } from 'react-helmet';
import { Hero, Community, Speakers, Prizes, Contacts, Sponsors } from '@components/codefest';

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
      <div data-scroll-section>
        <Speakers data={data} />
      </div>
      <div data-scroll-section>
        <Prizes data={data} />
      </div>
      <div data-scroll-section>
        <Contacts data={data} />
      </div>
      <div data-scroll-section>
        <Sponsors data={data} />
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
