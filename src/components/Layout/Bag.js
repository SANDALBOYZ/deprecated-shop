// @flow
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { StateContext } from 'components/StateProvider'
import { rhythm } from 'utils/typography'
// API
import { GET_CHECKOUT_NODE } from 'api/queries'
// Components
import { Query } from 'react-apollo'
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

type Props = {
  node: any
}

const Bag = ({ node }: Props) => {
  const [state] = useContext(StateContext)
  const { bagIsOpen, bag } = state

  console.log('`Bag`', node)
  const totalPrice: string = node ? `${node.totalPrice} ${node.currencyCode}` : ''

  return (
    <BagContainer isOpen={bagIsOpen}>
      <BagContent>
        <BagHeader>Bag</BagHeader>
        {
          Object.keys(bag).map((key) => (
            <div key={key}>
              <p>{bag[key].metadata.title}</p>
              <p>Size {bag[key].metadata.selectedOption.label}</p>
              <p>{bag[key].quantity}</p>
            </div>
          ))
        }
      </BagContent>
      <ButtonContainer>
        <CancelButton>
          <ButtonText>
            Cancel
          </ButtonText>
        </CancelButton>
        <CheckoutButton onClick={() => {
          if (node.webUrl) window.location.href = node.webUrl
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

export default () => (
  <Query
    query={GET_CHECKOUT_NODE}
    variables={{ id: window.localStorage.getItem('sandalboyzCheckoutId') }}
  >
    {
      ({ data: { node } }) => (
        <Bag node={node} />
      )
    }
  </Query>
)
