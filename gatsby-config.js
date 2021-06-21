require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Council of Digital Engineers`,
    description: `Council of Digital Engineers is a student-led nonprofit organization dedicated to fostering computer science education to students of all backgrounds.`,
    siteUrl: `https://techcodes.org`,
    image: '/og.png',
    twitterUsername: '@kyryloren',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`DM sans\:400,400i,500,500i,700,700i`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F8F8F8`,
        theme_color: `#161616`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
};
