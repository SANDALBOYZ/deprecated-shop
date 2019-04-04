// @flow
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from 'api/client'
import { StateProvider } from 'components/StateProvider'

export const withProvider = (component) => {
  const Component = component

  return (props) => (
    <StateProvider>
      <ApolloProvider client={client}>
        <Component {...props} />
      </ApolloProvider>
    </StateProvider>
  )
}

export default withProvider
