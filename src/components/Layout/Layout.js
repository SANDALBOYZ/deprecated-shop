// @flow

import React from 'react'
import { css, Global } from '@emotion/core'

// Components
import { Link } from 'gatsby'
import Header from './Header'

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
          styles={css`
            img {
              margin-bottom: 0 !important;
            }
          `}
        />
        <Header menuIsOpen={this.state.menuIsOpen} toggleMenu={this.toggleMenu} />
        <div>
          {children}
        </div>
      </>
    )
  }
}

export default Layout
