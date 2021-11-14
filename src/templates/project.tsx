import { InitiativeView } from "@views";
import React from "react";
import { Helmet } from "react-helmet";

interface ProjectProps {
  pageContext: any;
}

const Project: React.FC<ProjectProps> = ({ pageContext }) => {
  return (
    <>
      <Helmet title={pageContext.project.seo.title} />
      <InitiativeView project={pageContext.project} />
    </>
  );
};

export default Project;
