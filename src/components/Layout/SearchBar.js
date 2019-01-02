// @flow
import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from 'utils/typography'

export const SearchBarContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-bottom: ${rhythm(1)};
  padding: 2px 5px;
  width: 100%;
`

export const SearchBarInput = styled('input')`
  height: 20px;
  border: 0;
  outline: 0;
  background: none;
  padding: 0;
  font-family: serif;
  font-style: italic;
  font-size: 1.4rem;
  width: 100%;
`

export const SearchArrow = styled('button')`
  border: 0;
  background-color: transparent;
  padding: 0;
  &:after {
    content: ">>"
  }
`

const SearchBar = () => (
  <SearchBarContainer>
    <SearchBarInput placeholder='Search' />
    <SearchArrow />
  </SearchBarContainer>
)

export default SearchBar
