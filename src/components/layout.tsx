import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { Head, Nav } from "@components";
import { GlobalStyle } from "@styles";

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

interface LayoutProps {
  location: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
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
        }
      `}
      render={site => (
        <>
          <Head
            title={site.site.siteMetadata.title}
            description={site.site.siteMetadata.description}
            image={site.site.siteMetadata.image}
          />

          <GlobalStyle />
          <AnimatePresence exitBeforeEnter>
            <motion.main
              key={location.pathname}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit">
              {children}
            </motion.main>
          </AnimatePresence>
        </>
      )}
    />
  );
};

export default Layout;
