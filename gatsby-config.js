module.exports = {
  siteMetadata: {
    title: 'SANDALBOYZ',
    siteUrl: 'https://www.sandalboyz.com',
    description: 'SANDALBOYZ'
  },
  plugins: [
    'gatsby-plugin-flow',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'sandalboyz-2',
        accessToken: 'a6a2961ca8f4beaf87aedf3d74c38114',
        verbose: true
      }
    }
  ]
}
