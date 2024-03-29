// @flow
import React, { useContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import {
  StateContext,
  bagReducer,
  BAG_SET,
  BAG_REMOVE,
  CLOSE_BAG
} from 'components/StateProvider'
import { rhythm } from 'utils/typography'
import { serializeBagToLineItems } from 'utils/serializers'
// API
import { GET_CHECKOUT_NODE, CHECKOUT_LINE_ITEMS_REPLACE } from 'api/queries'
// Components
import { Query, Mutation } from 'react-apollo'
// CSS
import { HEADER_HEIGHT } from './Header'

export const BagContainer = styled.div`
  display: ${({ isOpen }) => isOpen ? 'grid' : 'none'};
  grid-template-rows: auto 120px;
  height: 100vh;
  width: 100vw;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 900;
  padding-top: ${HEADER_HEIGHT};
`

export const BagUpdatingModal = styled.div`
  position: absolute;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  width: 100%;
  height: 100%;
  z-index: 900;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  background: black;
  color: white;
`

export const BagContent = styled.div`
  padding: ${rhythm(1)};
  overflow-y: scroll;
`

export const BagHeader = styled.h2`
  margin-top: 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: bold;
`

export const CancelButton = styled.button`
  display: flex;
  padding: 1px ${rhythm(0.8)};
  background-color: gray;
  color: white;
  border: 1px solid gray;
  height: 50px;
  font-size: 12px;
  text-transform: uppercase;
  width: 100vw;
`

export const CheckoutButton = styled.button`
  display: flex;
  padding: 1px ${rhythm(0.8)};
  justify-content: space-between;
  background-color: black;
  color: white;
  border: 1px solid black;
  height: 60px;
  font-size: 12px;
  text-transform: uppercase;
  width: 100vw;
`

const Bag = () => {
  const [state, dispatch] = useContext(StateContext)
  console.log('BAG state', state)
  const { bagIsOpen, bag } = state
  const { items } = bag

  const [checkoutId, setCheckoutId] = useState()

  useEffect(() => {
    if (checkoutId !== window.localStorage.sandalboyzCheckoutId) {
      setCheckoutId(window.localStorage.sandalboyzCheckoutId)
    }
  })

  const totalPrice: string = `${bag.totalPrice} ${bag.currencyCode}`

  return (
    <Query
      query={GET_CHECKOUT_NODE}
      variables={{ id: checkoutId }}
      onCompleted={(data) => {
        if (bag.updatedAt !== data.node.updatedAt) {
          dispatch({ type: BAG_SET, payload: { checkout: data.node } })
        }
      }}
    >
      {
        ({ loading: queryLoading, error: queryError, data: queryData }) => (
          <Mutation mutation={CHECKOUT_LINE_ITEMS_REPLACE}>
            {
              (
                checkoutLineItemsReplace,
                {
                  loading: mutationLoading,
                  error: mutationError,
                  data: mutationData
                }
              ) => (
                <BagContainer isOpen={bagIsOpen}>
                  <BagUpdatingModal isOpen={queryLoading || mutationLoading}>
                    Updating Bag...
                  </BagUpdatingModal>
                  <BagContent>
                    <BagHeader>Bag</BagHeader>
                    {
                      Object.keys(items).map((itemId) => (
                        <div key={itemId}>
                          <p>{items[itemId].title}</p>
                          <p>Size {items[itemId].variantTitle}</p>
                          <p>{items[itemId].quantity}</p>
                          <p
                            onClick={() => {
                              const lineItems = serializeBagToLineItems(bagReducer(bag, {
                                type: BAG_REMOVE,
                                payload: { id: itemId }
                              }))

                              checkoutLineItemsReplace({
                                variables: {
                                  checkoutId,
                                  lineItems
                                }
                              })
                            }}
                          >
                            Remove
                          </p>
                        </div>
                      ))
                    }
                  </BagContent>
                  <ButtonContainer>
                    <CancelButton
                      onClick={() => dispatch({ type: CLOSE_BAG })}
                    >
                      <ButtonText>
                        Cancel
                      </ButtonText>
                    </CancelButton>
                    <CheckoutButton onClick={() => {
                      if (bag.webUrl) window.location.href = bag.webUrl
                    }}>
                      <ButtonText>
                        Checkout
                      </ButtonText>
                      <span>{totalPrice}</span>
                    </CheckoutButton>
                  </ButtonContainer>
                </BagContainer>
              )
            }
          </Mutation>
        )
      }
    </Query>
  )
}

export default Bag
