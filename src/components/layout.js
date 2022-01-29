import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { Head, ThemeProvider, Nav, Footer } from '@components';
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
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
          allDatoCmsAbout {
            edges {
              node {
                pressRelease {
                  url
                }
              }
            }
          }
        }
      `}
      render={site => {
        const doc = site.allDatoCmsAbout.edges.slice(0, 1).pop();
        console.log(location);

        return (
          <>
            <Head metadata={site.site.siteMetadata} />

            <ThemeProvider>
              <GlobalStyle />
              <div id="___container">
                <Nav location={location} pr={doc.node.pressRelease.url} />
                <AnimatePresence exitBeforeEnter>
                  <motion.main
                    key={location.pathname}
                    variants={variants}
                    initial="initial"
                    animate="enter"
                    exit="exit">
                    {children}
                    {location.pathname !== '/' && <Footer pr={doc.node.pressRelease.url} />}
                  </motion.main>
                </AnimatePresence>
              </div>
            </ThemeProvider>
          </>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
