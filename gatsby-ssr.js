import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from 'api/client'

console.log('================================')
console.log('================================')
console.log('Inside `gatsby-ssr.js`')
console.log(process.env)
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('SHOPIFY_GRAPHQL_URI:', process.env.SHOPIFY_GRAPHQL_URI)
console.log('SHOPIFY_ACCESS_TOKEN:', process.env.SHOPIFY_ACCESS_TOKEN)
console.log('GATSBY_SHOPIFY_GRAPHQL_URI:', process.env.GATSBY_SHOPIFY_GRAPHQL_URI)
console.log('GATSBY_SHOPIFY_ACCESS_TOKEN:', process.env.GATSBY_SHOPIFY_ACCESS_TOKEN)

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
