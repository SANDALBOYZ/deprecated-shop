// @flow
import React from 'react'
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { get } from 'lodash'

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
  font-size: 0.5rem;
  color: white;
  width: 18px;
  height: 18px;
  line-height: 18px;
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

// calculateQuantity(get(context.checkout, 'lineItems.edges') || [])

const calculateQuantity = (edges: Array<Object>): number => (
  edges.reduce((total, edge) => {
    total += edge.node.quantity
    return total
  }, 0)
)

const BagButton = (context) => (
  <BagButtonContainer
    onClick={context.toggleBag}
    className={context.addedToCart ? addedToCartStyle : undefined}
    onAnimationEnd={context.untoggleAddedToCart}
    data-count={1}
  />
)

export default BagButton
