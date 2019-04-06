// @flow
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from 'api/client'
import { StateProvider } from 'components/StateProvider'

/**
 *  `withProvider` should only be used with the TOP LEVEL COMPONENT.
 *  These are typically files from `pages` and `templates`.
 */
export const withProvider = (component: React.AbstractComponent<{}>): React.AbstractComponent<{}> => {
  const Component = component

  return (props: any) => (
    <StateProvider>
      <ApolloProvider client={client}>
        <Component {...props} />
      </ApolloProvider>
    </StateProvider>
  )
}

export default withProvider
