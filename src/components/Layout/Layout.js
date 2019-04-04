// @flow
import React, { useContext, useEffect } from 'react'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
// Components
import { StateContext } from 'components/StateProvider'
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

export default Layout
