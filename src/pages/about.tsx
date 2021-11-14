import React, { useEffect } from "react";
import { AboutView } from "@views";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

//TODO: Redo these typings later
interface Image {
  alt: string;
  url: string;
}

export interface Member {
  name: string;
  memberPosition: string;
  description: string;
  image: Image;
}

export interface AboutPageProps {
  data: {
    allDatoCmsAbout: {
      edges: [{ node: { description: string; team: Member[] } }];
    };
    blast: {
      childImageSharp: any;
    };
    boxed: {
      childImageSharp: any;
    };
  };
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  return (
    <>
      <Helmet title="About" />

      <AboutView team={data.allDatoCmsAbout.edges[0].node.team} />
    </>
  );
};

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
              url
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

export default AboutPage;
