require('dotenv').config({
  path: '.env'
})

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
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true
      }
    }
  ]
}
