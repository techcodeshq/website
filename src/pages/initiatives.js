import React from 'react';
import { Helmet } from 'react-helmet';
import { SmoothScroll, Footer } from '@components';
import Initiatives from '@views/initiatives';
import { graphql } from 'gatsby';

const InitiativesPage = ({ data, location }) => {
  const doc = data.allDatoCmsArticle.nodes;

  return (
    <>
      <Helmet title="Initiatives" />
      <SmoothScroll callbacks={location} />

      <Initiatives data={doc} />
    </>
  );
};

export default InitiativesPage;

export const query = graphql`
  {
    allDatoCmsArticle(sort: { fields: position, order: ASC }) {
      nodes {
        slug
        title
        thumbnail {
          gatsbyImageData(layout: FULL_WIDTH)
          alt
        }
      }
    }
  }
`;
