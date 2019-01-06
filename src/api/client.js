// @flow
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://sandalboyz-2.myshopify.com/api/graphql',
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
  }
})

export default client
