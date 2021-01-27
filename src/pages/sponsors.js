import React from 'react';
import { Helmet } from 'react-helmet';
import { Hero } from '@components/sponsors';

const SponsorsPage = () => {
  return (
    <>
      <Helmet title="Sponsors" />
      <div data-scroll-section>
        <Hero />
      </div>
    </>
  );
};

export default SponsorsPage;
