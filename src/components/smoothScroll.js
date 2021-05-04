import { useEffect } from 'react';

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from 'locomotive-scroll';

const options = {
  smooth: true,
  smoothMobile: false,
  getDirection: true,
};

const SmoothScroll = callbacks => {
  useEffect(() => {
    let locomotiveScroll;

    setTimeout(() => {
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('#___gatsby'),
        ...options,
      });
      setTimeout(() => locomotiveScroll.update(), 300);

      // Exposing to the global scope for ease of use.
      window.scroll = locomotiveScroll;
      document.documentElement.setAttribute('data-at-top', true);

      locomotiveScroll.on('scroll', func => {
        // Update `data-direction` with scroll direction.
        document.documentElement.setAttribute('data-direction', func.direction);

        if (func.scroll.y > 10) {
          document.documentElement.setAttribute('data-at-top', false);
        } else {
          document.documentElement.setAttribute('data-at-top', true);
        }
      });
    }, 500);
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [callbacks]);

  return null;
};

export default SmoothScroll;
