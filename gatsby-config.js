require('dotenv').config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
})

console.log('================================')
console.log('================================')
console.log('Inside `gatsby-config.js`')
console.log(process.env)
console.log(process.env.NODE_ENV)
console.log(process.env.SHOPIFY_GRAPHQL_URI)
console.log(process.env.SHOPIFY_ACCESS_TOKEN)
console.log(process.env.GATSBY_SHOPIFY_GRAPHQL_URI)
console.log(process.env.GATSBY_SHOPIFY_ACCESS_TOKEN)

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
