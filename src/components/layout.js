import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Head, SmoothScroll, Cursor, Footer, Nav } from '@components';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalStyle } from '@styles';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Layout = ({ children, location }) => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [location.pathname]);

  return (
    <>
      <Head />
      <GlobalStyle />
      <SmoothScroll callbacks={location} />
      <Cursor />

      {loading ? null : (
        <AnimatePresence>
          <Nav />
          <motion.main
            id="container"
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            style={{ overflowX: 'hidden' }}>
            {children}
            <div data-scroll-section>
              <Footer />
            </div>
          </motion.main>
        </AnimatePresence>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
