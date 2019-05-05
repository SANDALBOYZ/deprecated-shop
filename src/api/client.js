// @flow
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  uri: process.env.SHOPIFY_GRAPHQL_URI,
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
  },
  fetch
})

export default client
