import React from 'react';
import { graphql } from 'gatsby';
import { SmoothScroll } from '@components';
import HomeSection from '@views/home';

const HomePage = ({ data, location }) => {
  return (
    <>
      <SmoothScroll callbacks={location} />

      <HomeSection data={data} />
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    potion: file(relativePath: { eq: "props/potion.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    folder: file(relativePath: { eq: "props/folder.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    bucket: file(relativePath: { eq: "props/bucket.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    rocket: file(relativePath: { eq: "props/rocket.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
