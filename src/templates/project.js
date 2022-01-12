import React from 'react';
import { Helmet } from 'react-helmet';
import { Hero, Article } from '@views/project';
import { SmoothScroll, Footer } from '@components';

const Project = ({ pageContext, location }) => {
  const { project } = pageContext;

  return (
    <>
      <Helmet title={project.seo.title}>
        <meta name="description" content={project.seo.description} />
        <meta property="og:description" content={project.seo.description} />
        <meta name="twitter:description" content={project.seo.description} />
      </Helmet>
      <SmoothScroll callbacks={location} />

      <Hero data={project} />
      <Article data={project} />
      <Footer />
    </>
  );
};

export default Project;
