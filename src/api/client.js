// @flow
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

console.log('================================')
console.log('================================')
console.log('Inside `api/client.js`')
console.log(process.env.SHOPIFY_GRAPHQL_URI)
console.log(process.env.SHOPIFY_ACCESS_TOKEN)
console.log(process.env.GATSBY_SHOPIFY_GRAPHQL_URI)
console.log(process.env.GATSBY_SHOPIFY_ACCESS_TOKEN)

const client = new ApolloClient({
  uri: process.env.SHOPIFY_GRAPHQL_URI,
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
  },
  fetch
})

export default client
