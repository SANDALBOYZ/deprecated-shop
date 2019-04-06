// @flow
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { rhythm } from 'utils/typography'
// Components
import { StateContext } from 'components/StateProvider'
import { Link } from 'gatsby'
import SearchBar from './SearchBar'
// CSS
import { fadeInLeftRight } from 'styles/animations.css.js'
import { HEADER_HEIGHT } from './Header'

const MenuContainer = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  position: fixed;
  top: ${HEADER_HEIGHT};
  z-index: 900;
  background-color: white;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT});
  padding: ${rhythm(1)};
`

const MenuNav = styled.ul`
  margin: 0;
  padding: 0;
`

const MenuNavItem = styled.li`
  font-size: 1.3rem;
  margin: 0;
  margin-bottom: ${rhythm(0.5)};
  padding: 0;
  list-style-type: none;
  font-weight: bold;
  animation: ${fadeInLeftRight} 0.75s ease;
`

const Menu = () => {
  const [state] = useContext(StateContext)
  const { menuIsOpen } = state

  return (
    <MenuContainer isOpen={menuIsOpen}>
      <SearchBar />
      <MenuNav>
        <MenuNavItem>
          <Link to='/products'>Shop</Link>
        </MenuNavItem>
        <MenuNavItem>
          <Link to='/media'>Media</Link>
        </MenuNavItem>
        <MenuNavItem>
          <Link to='/about'>About</Link>
        </MenuNavItem>
        <MenuNavItem>
          <Link to='/help'>Help</Link>
        </MenuNavItem>
      </MenuNav>
    </MenuContainer>
  )
}

export default Menu
