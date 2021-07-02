const autoprefixer = require(`autoprefixer`);
const nesting = require(`postcss-nesting`);

module.exports = {
  siteMetadata: {
    title: `Outbreak Fest 2022`,
    description: `A hardcore music festival.`,
    author: `@chrish-d`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/posters`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1D4EA7`,
        theme_color: `#1D4EA7`,
        display: `minimal-ui`,
        icon: `src/images/outbreak-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [autoprefixer, nesting],
      },
    },
  ],
};
