// @flow
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { rhythm } from 'utils/typography'
import { StateContext, TOGGLE_BAG, TOGGLE_MENU } from 'components/StateProvider'
// Components
import { Link } from 'gatsby'
import BagButton from './BagButton'
import MenuButton from './MenuButton'
// Assets
import sandalboyzTextLogo from 'assets/sandalboyz-text-logo.png'

export const HEADER_HEIGHT = rhythm(2.5)

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
  height: ${HEADER_HEIGHT};
  width: 100vw;
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

const Header = () => {
  const [state, dispatch] = useContext(StateContext)
  console.log('HEADER state', state)
  const { bagIsOpen, menuIsOpen } = state

  return (
    <header css={headerStyles}>
      <StyledLink to='/'>
        <Logo src={sandalboyzTextLogo} />
      </StyledLink>
      <Nav>
        <NavItem>
          <BagButton
            isOpen={bagIsOpen}
            onClick={() => dispatch({ type: TOGGLE_BAG })}
          />
        </NavItem>
        <NavItem>
          <MenuButton
            isOpen={menuIsOpen}
            onClick={() => dispatch({ type: TOGGLE_MENU })}
          />
        </NavItem>
      </Nav>
    </header>
  )
}

export default Header
