// @flow

import React from 'react'
import { Global } from '@emotion/core'
// Components
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
// Styles
import { globalStyles } from 'styles'

type State = {
  menuIsOpen: boolean
}

class Layout extends React.Component<{}, State> {
  state = {
    menuIsOpen: false
  }

  toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen })
  }

  render () {
    const { children } = this.props

    return (
      <>
        <Global
          styles={globalStyles}
        />
        <Header menuIsOpen={this.state.menuIsOpen} toggleMenu={this.toggleMenu} />
        <Menu isOpen={this.state.menuIsOpen} />
        {children}
        <Footer />
      </>
    )
  }
}

export default Layout
