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

const CodeFest = () => {
  return (
    <>
      <Helmet title="CodeFest" />
      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section>
        <Community />
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
