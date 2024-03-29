import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const scroll = {
  container: '#___container',
  options: {
    smooth: true,
    smoothMobile: false,
    getDirection: true,
  },
};

const Scroll = ({ callbacks, delay = false }) => {
  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        let locomotiveScroll;

        locomotiveScroll = new LocomotiveScroll({
          el: document.querySelector(scroll.container),
          ...scroll.options,
        });
        locomotiveScroll.update();

        // Exposing to the global scope for ease of use.
        window.scroll = locomotiveScroll;

        locomotiveScroll.on('scroll', func => {
          // Update `data-direction` with scroll direction.
          document.documentElement.setAttribute('data-direction', func.direction);
        });

        return () => {
          if (locomotiveScroll) locomotiveScroll.destroy();
        };
      }, 300);
    } else {
      let locomotiveScroll;

      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector(scroll.container),
        ...scroll.options,
      });
      locomotiveScroll.update();

      // Exposing to the global scope for ease of use.
      window.scroll = locomotiveScroll;

      locomotiveScroll.on('scroll', func => {
        // Update `data-direction` with scroll direction.
        document.documentElement.setAttribute('data-direction', func.direction);
      });

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, [callbacks, delay]);

  return null;
};

export default Scroll;
