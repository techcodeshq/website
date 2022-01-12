const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allDatoCmsArticle(sort: { fields: position, order: ASC }) {
        nodes {
          slug
          seo {
            title
            description
          }
          thumbnail {
            gatsbyImageData(layout: FULL_WIDTH)
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
          images {
            ... on DatoCmsFullImage {
              __typename
              image {
                gatsbyImageData(layout: FULL_WIDTH)
                alt
              }
            }
            ... on DatoCmsSplitImage {
              __typename
              unevenSplit
              leftImage {
                gatsbyImageData(layout: FULL_WIDTH)
                alt
              }
              rightImage {
                gatsbyImageData(layout: FULL_WIDTH)
                alt
              }
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
      component: path.resolve(__dirname, 'src/templates/project.js'),
      context: { project: node },
    });
  });
};

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
