// @flow
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: process.env.SHOPIFY_GRAPHQL_URI,
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
  }
})

export default client
