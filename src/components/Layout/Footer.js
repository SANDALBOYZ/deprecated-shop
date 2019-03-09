// @flow
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { rhythm } from 'utils/typography'
import sandalboyzLogo from 'assets/sandalboyz-logo.png'

const footerStyles = css`
  margin-top: ${rhythm(1)};
`

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-column-gap: ${rhythm(0.5)};
  padding: ${rhythm(0.8)} ${rhythm(0.7)};
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const NavListItem = styled.li`
  font-size: 0.8rem;
  line-height: 1rem;
  margin: 0;
  padding: 0;
`

const NavListLink = styled.a`
  &:hover {
    font-weight: bold;
  }
`

const FooterLogoContainer = styled.div`
padding: ${rhythm(0.8)} ${rhythm(0.7)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterLogo = styled.img`
  height: ${rhythm(4)};
  width: ${rhythm(4)};
  margin-bottom: ${rhythm(0.5)};
`

const Footer = () => (
  <footer css={footerStyles}>
    <Nav>
      <NavList>
        <NavListItem>
          <NavListLink>INSTAGRAM</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink>FACEBOOK</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink>TWITTER</NavListLink>
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem>
          <NavListLink href='/about'>ABOUT</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink>STOCKISTS</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink href='/help'>HELP</NavListLink>
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem>
          <NavListLink>TERMS</NavListLink>
        </NavListItem>
        <NavListItem>
          <NavListLink>PRIVACY</NavListLink>
        </NavListItem>
      </NavList>
    </Nav>
    <FooterLogoContainer>
      <FooterLogo src={sandalboyzLogo} />
      <span css={css`
        font-size: 0.7rem;
      `}>© 2018 SANDALBOYZ</span>
    </FooterLogoContainer>
  </footer>
)

export default Footer
