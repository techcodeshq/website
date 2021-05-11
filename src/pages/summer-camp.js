import React from 'react';
import { Helmet } from 'react-helmet';
import { Hero, Description } from '@components/event';
import { CTA } from '@components/home';
import Summer from '@images/codefest/codefest.svg';

const SummerCamp = () => {
  return (
    <>
      <Helmet title="Summer Camp" />
      <div data-scroll-section>
        <Hero name="Summer Camp" date="July 5th-16th, 2021" src={Summer} />
      </div>
      <div data-scroll-section>
        <Description
          rsvp
          signup="https://www.w3schools.com/cssref/css3_pr_word-wrap.asp"
          description="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
        />
      </div>
      <div data-scroll-section>
        <CTA />
      </div>
    </>
  );
};

export default SummerCamp;
