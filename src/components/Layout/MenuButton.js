// @flow
import React from 'react'
import styled from '@emotion/styled'

export const Buns = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  border: 0;
  outline: 0;
  padding: 0;
  height: 16px;
  width: 16px;
  cursor: pointer;
`

/* eslint-disable */
export const Patties = styled('div')`
  position: relative;
  display: flex;
  top: 50%;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'none'};
  transition: ${props => props.isOpen
    ? 'transform 0.075s 0.12s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
    : 'transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  };
  &, &:before, &:after {
    content: '';
    height: 3px;
    width: 100%;
    background-color: black;
    border-radius: 5px;
  }
  &:before {
    position: absolute;
    top: ${props => props.isOpen ? 0 : '-6px'};
    opacity: ${props => props.isOpen ? 0 : 1};
    transition: ${props => props.isOpen
      ? 'top 0.075s ease, opacity 0.075s 0.12s ease'
      : 'top 0.075s 0.12s ease, opacity 0.075s ease'
    };
  }
  &:after {
    position: absolute;
    top: ${props => props.isOpen ? 0 : '6px'};
    transform: ${props => props.isOpen ? 'rotate(-90deg)' : 'none'};
    transition: ${props => props.isOpen
      ? 'top 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      : 'top 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
    };
  }
`
/* eslint-enable */

type HamburgerProps = {
  isOpen: boolean,
  onClick: Function
}

const Hamburger = ({ isOpen, onClick }: HamburgerProps) => (
  <Buns onClick={onClick}>
    <Patties isOpen={isOpen} />
  </Buns>
)

export default Hamburger
