// @flow
import React from 'react'
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'

export const bagPop = keyframes`
  0% {
    transform: scale(1);
  }

  80% {
    transform: scale(1.2);
  }

  90% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
`

export const addedToCartStyle = css`
  animation: ${bagPop} 0.3s ease-in-out;
`

export const BagButtonContainer = styled('button')`
  font-size: 0.4rem;
  color: white;
  width: 20px;
  height: 20px;
  line-height: 20px;
  background-color: black;
  border-radius: 50%;
  border: 0;
  outline: 0;
  padding: 0;
  text-align: center;

  &:after {
    content: attr(data-count);
  }
`

// const calculateQuantity = (edges: Array<Object>): number => (
//   edges.reduce((total, edge) => {
//     total += edge.node.quantity
//     return total
//   }, 0)
// )

const BagButton = ({ isOpen, onClick }) => (
  <BagButtonContainer
    onClick={onClick}
    // className={context.addedToCart ? addedToCartStyle : undefined}
    // onAnimationEnd={context.untoggleAddedToCart}
    data-count={69}
  />
)

export default BagButton
