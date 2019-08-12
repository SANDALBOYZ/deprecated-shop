// @flow
import React, { useContext } from 'react'
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { StateContext, TOGGLE_BAG } from 'components/StateProvider'

import type BagItems from 'components/StateProvider'

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

export const calculateBagQuantity = (bagItems: BagItems): number => (
  Object.keys(bagItems).reduce(
    (total, bagItemKey) => total + bagItems[bagItemKey].quantity, 0
  )
)

const BagButton = () => {
  const [state, dispatch] = useContext(StateContext)

  return (
    <BagButtonContainer
      onClick={() => dispatch({ type: TOGGLE_BAG })}
      // className={context.addedToCart ? addedToCartStyle : undefined}
      // onAnimationEnd={context.untoggleAddedToCart}
      data-count={calculateBagQuantity(state.bag.items)}
    />
  )
}

export default BagButton
