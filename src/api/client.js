// @flow
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

console.log('================================')
console.log('================================')
console.log('Inside `api/client.js`')
console.log(process.env)
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('SHOPIFY_GRAPHQL_URI:', process.env.SHOPIFY_GRAPHQL_URI)
console.log('SHOPIFY_ACCESS_TOKEN:', process.env.SHOPIFY_ACCESS_TOKEN)
console.log('GATSBY_SHOPIFY_GRAPHQL_URI:', process.env.GATSBY_SHOPIFY_GRAPHQL_URI)
console.log('GATSBY_SHOPIFY_ACCESS_TOKEN:', process.env.GATSBY_SHOPIFY_ACCESS_TOKEN)

const client = new ApolloClient({
  uri: process.env.GATSBY_SHOPIFY_GRAPHQL_URI,
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.GATSBY_SHOPIFY_ACCESS_TOKEN
  },
  fetch
})

export default client
