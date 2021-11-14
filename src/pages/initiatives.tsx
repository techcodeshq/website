import { InitiativesView } from "@views";
import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const InitiativesPage: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Helmet title="Initiatives" />
      <InitiativesView data={data.allDatoCmsArticle.nodes} />
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsArticle(sort: { fields: position, order: ASC }) {
      nodes {
        slug
        title
        thumbnail {
          url
          alt
        }
      }
    }
  }
`;

export default InitiativesPage;
