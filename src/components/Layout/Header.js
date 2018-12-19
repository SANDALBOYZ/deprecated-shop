// @flow

import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { rhythm } from 'utils/typography'
// Components
import { Link } from 'gatsby'
import BagButton from './BagButton'
import Hamburger from './Hamburger'
// Assets
import sandalboyzTextLogo from 'assets/sandalboyz-text-logo.png'

const StyledLink = styled(Link)`
  background-image: none;
  margin: 0;
  height: ${rhythm(0.8)};
`

const Logo = styled.img`
  margin: 0;
  height: ${rhythm(0.8)};
`

const headerStyles = css`
  z-index: 1000;
  position: fixed;
  top: 0;
  background-color: white;
  height: ${rhythm(2.5)};
  width: 100%;
  line-height: ${rhythm(0.8)};
  padding: ${rhythm(0.8)} ${rhythm(0.7)};
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`

const Header = ({ menuIsOpen, toggleMenu }) => (
  <header css={headerStyles}>
    <StyledLink to='/'>
      <Logo src={sandalboyzTextLogo} />
    </StyledLink>
    <Nav>
      <NavItem>
        <BagButton />
      </NavItem>
      <NavItem>
        <Hamburger isOpen={menuIsOpen} onClick={toggleMenu} />
      </NavItem>
    </Nav>
  </header>
)

export default Header
