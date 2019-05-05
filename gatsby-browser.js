import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from 'api/client'

console.log('\n\nInside `gatsby-ssr.js`')
console.log(process.env.SHOPIFY_GRAPHQL_URI)
console.log(process.env.SHOPIFY_ACCESS_TOKEN)

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
