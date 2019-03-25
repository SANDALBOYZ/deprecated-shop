// @flow

/**
 * This is pretty much the entry point for the application.
 */

import React, { createContext } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
// API
import client from 'api/client'
// Components
import { StateProvider } from 'components/StateProvider'
import CheckoutSetup from './CheckoutSetup'
import Header, { HEADER_HEIGHT } from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Bag from './Bag'
// Styles
import { globalStyles } from 'styles'

export const StateContext = createContext()

export const Content = styled.div`
  margin-top: ${HEADER_HEIGHT};
`

type State = {
  menuIsOpen: boolean,
  bagIsOpen: boolean
}

class Layout extends React.Component<{}, State> {
  state = {
    menuIsOpen: false,
    bagIsOpen: false
  }

  toggleMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
      bagIsOpen: false
    })
  }

  toggleBag = () => {
    this.setState({
      bagIsOpen: !this.state.bagIsOpen,
      menuIsOpen: false
    })
  }

  render () {
    const { children } = this.props

    return (
      <StateProvider>
        <ApolloProvider client={client}>
          <Global
            styles={globalStyles}
          />
          <CheckoutSetup />
          <Header
            menuIsOpen={this.state.menuIsOpen}
            toggleMenu={this.toggleMenu}
            bagIsOpen={this.state.bagIsOpen}
            toggleBag={this.toggleBag}
          />
          <Menu isOpen={this.state.menuIsOpen} />
          <Bag />
          <Content>
            {children}
          </Content>
          <Footer />
        </ApolloProvider>
      </StateProvider>
    )
  }
}

export default Layout
