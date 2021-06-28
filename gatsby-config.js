const autoprefixer = require(`autoprefixer`);
const nesting = require(`postcss-nesting`);

module.exports = {
  siteMetadata: {
    title: `Outbreak Fest 2022`,
    description: `Hardcore music festival.`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [autoprefixer, nesting],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
