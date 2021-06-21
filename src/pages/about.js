import React from 'react';
import { graphql } from 'gatsby';
import { SmoothScroll } from '@components';
import { Info, Team } from '@views/about';

const AboutPage = ({ data, location }) => {
  const doc = data.allDatoCmsAbout.edges.slice(0, 1).pop();
  if (!doc) return null;

  return (
    <>
      <SmoothScroll callbacks={location} />
      <Info data={doc.node} images={data} />
      <Team data={doc.node} />
    </>
  );
};

export default AboutPage;

export const query = graphql`
  {
    blast: file(relativePath: { eq: "props/blast.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    boxed: file(relativePath: { eq: "props/boxed.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    allDatoCmsAbout {
      edges {
        node {
          description
          team {
            image {
              gatsbyImageData(layout: FULL_WIDTH)
              alt
            }
            description
            name
            memberPosition
          }
        }
      }
    }
  }
`;
