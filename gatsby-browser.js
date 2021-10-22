import React from 'react';
import { Layout } from './src/components';
import './src/styles/scroll.css';

export const wrapPageElement = ({ element, props }) => {
  console.clear();
  console.log(
    `%cStop!%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a special feature or "hack" someone's account, it is a scam and will give them access to your personal information.
    `,
    'color:#fa594d;-webkit-text-stroke:2px black;font-size:5rem;font-weight:bolder;text-align:center;',
    'color:red;font-size:1rem;font-weight:bolder;',
  );

  return <Layout {...props}>{element}</Layout>;
};

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  // transition duration from `layout.js` * 1000 to get time in ms
  // * 2 for exit + enter animation
  const TRANSITION_DELAY = 0.5 * 1000 * 2;
  // if it's a "normal" route
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY);
  }
  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0];
    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY);
  }
  return false;
};
