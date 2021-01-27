import React from 'react';

import { Hero, About, Events, Sponsor, CTA } from '@components/home';

const HomePage = () => {
  return (
    <>
      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section>
        <About />
      </div>
      <div data-scroll-section>
        <Events />
      </div>
      <div data-scroll-section>
        <Sponsor />
      </div>
      <div data-scroll-section>
        <CTA />
      </div>
    </>
  );
};

export default HomePage;
