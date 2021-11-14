require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `TechCodes`,
    description: `TechCodes is a student-led nonprofit organization dedicated to fostering computer science education to students of all backgrounds.`,
    siteUrl: `https://techcodes.org`,
    image: "/og.png",
    twitterUsername: "@bthscode",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `@chakra-ui/gatsby-plugin`,
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
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `techcodes`,
        short_name: `techcodes`,
        start_url: `/`,
        background_color: `#1D166F`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon/favicon.ico`,
      },
    },
  ],
};
