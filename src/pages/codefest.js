import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Hero,
  Community,
  Speakers,
  Prizes,
  Contacts,
  Sponsors,
  Schedule,
} from '@components/codefest';

const CodeFest = ({ data }) => {
  return (
    <>
      <Helmet title="Events" />
      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section>
        <Community data={data} />
      </div>
      <div data-scroll-section>
        <Schedule />
      </div>
      <div data-scroll-section>
        <Prizes />
      </div>
      <div data-scroll-section>
        <Speakers />
      </div>
      <div data-scroll-section>
        <Contacts />
      </div>
      <div data-scroll-section>
        <Sponsors />
      </div>
    </>
  );
};

export default CodeFest;

export const query = graphql`
  {
    shapes: file(relativePath: { eq: "codefest/Shapes.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
