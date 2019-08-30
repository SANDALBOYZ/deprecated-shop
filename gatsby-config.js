require('dotenv').config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
  debug: true
})

console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('SHOPIFY_GRAPHQL_URI:', process.env.SHOPIFY_GRAPHQL_URI)
console.log('SHOPIFY_ACCESS_TOKEN:', process.env.SHOPIFY_ACCESS_TOKEN)
console.log('GATSBY_SHOPIFY_GRAPHQL_URI:', process.env.GATSBY_SHOPIFY_GRAPHQL_URI)
console.log('GATSBY_SHOPIFY_ACCESS_TOKEN:', process.env.GATSBY_SHOPIFY_ACCESS_TOKEN)

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
