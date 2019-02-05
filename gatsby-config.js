module.exports = {
  siteMetadata: {
    title: 'Knowit Stromstad 2019',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdowns`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    ],
  pathPrefix: '/'
};
