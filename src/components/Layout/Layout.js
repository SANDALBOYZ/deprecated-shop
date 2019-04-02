// @flow

/**
 * This is pretty much the entry point for the application.
 */

import React, { useContext, useEffect } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
// API
import client from 'api/client'
// Components
import { StateContext, StateProvider } from 'components/StateProvider'
import CheckoutSetup from './CheckoutSetup'
import Header, { HEADER_HEIGHT } from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Bag from './Bag'
// Styles
import { globalStyles } from 'styles'

export const Content = styled.div`
  margin-top: ${HEADER_HEIGHT};
`

export const Layout = ({ children }) => {
  const [state] = useContext(StateContext)

  useEffect(() => {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(state)
      devTools.init(state)
    }
  })

  return (
    <>
      <Global
        styles={globalStyles}
      />
      <CheckoutSetup />
      <Header />
      <Menu />
      <Bag />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}

const withProvider = (component) => {
  const Component = component

  return (props) => (
    <StateProvider>
      <ApolloProvider client={client}>
        <Component {...props} />
      </ApolloProvider>
    </StateProvider>
  )
}

export default withProvider(Layout)
