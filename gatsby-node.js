const path = require("path");

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allDatoCmsArticle(sort: { fields: position, order: ASC }) {
        nodes {
          slug
          seo {
            title
          }
          thumbnail {
            url
            alt
          }
          title
          date
          content {
            ... on DatoCmsArticleLink {
              __typename
              link
              name
            }
            ... on DatoCmsArticleSubheading {
              __typename
              text
            }
          }
          paragraphs
        }
      }
    }
  `);

  pages.data.allDatoCmsArticle.nodes.forEach(node => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(__dirname, "src/templates/project.tsx"),
      context: { project: node },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@fonts": path.resolve(__dirname, "src/fonts"),
        "@views": path.resolve(__dirname, "src/views"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
      },
    },
  });
};
