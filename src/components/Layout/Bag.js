// @flow
import React from 'react'
import { Query } from 'react-apollo'
import { GET_CHECKOUT_NODE } from 'api/queries'
import styled from '@emotion/styled'
import { HEADER_HEIGHT } from './Header'
import { rhythm } from 'utils/typography'

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

type PassedProps = {
  isOpen: boolean
}

type QueryProps = {
  node: any
}

type Props = PassedProps & QueryProps

const Bag = ({ isOpen, node }: Props) => {
  console.log('`Bag`', node)
  const totalPrice: string = node ? `${node.totalPrice} ${node.currencyCode}` : ''

  return (
    <BagContainer isOpen={isOpen}>
      <BagContent>
        <BagHeader>Bag</BagHeader>
        Spicy jalapeno bacon ipsum dolor amet aliqua spare ribs cupim sirloin, et nostrud ham hock est salami shankle cow fugiat irure. Excepteur dolore in, in fugiat mollit deserunt ham hock ball tip sunt eiusmod spare ribs proident filet mignon pariatur. Fugiat flank ball tip lorem ribeye. Tail flank dolore salami tri-tip turducken eu non et. Cupidatat excepteur flank minim. Bacon pariatur cow spare ribs pork belly ham ball tip. Officia bresaola aliqua short ribs, capicola beef consequat.

        Tri-tip drumstick biltong deserunt proident sint. Sint velit labore, pariatur laborum dolor alcatra ea. Labore excepteur ham hock capicola. Meatball ball tip elit, frankfurter capicola shank picanha alcatra ribeye beef. Pariatur pork loin aliquip burgdoggen hamburger ut sunt.

        Aute culpa dolore, ad doner tail quis sirloin kevin dolor minim. Excepteur tenderloin corned beef meatball, laborum eu cow anim jowl short ribs venison labore non id exercitation. Rump doner magna pork chop, adipisicing fatback pork loin. Ullamco reprehenderit ad cupim shoulder spare ribs do pastrami eu.

        Nulla sunt bresaola ut filet mignon ground round consequat nostrud eiusmod ut. Aliqua pancetta capicola, fatback commodo picanha frankfurter elit boudin pig. Fatback tenderloin shoulder bresaola pig jerky lorem. Dolore reprehenderit beef swine. Shoulder laborum ut frankfurter anim aute tongue jowl chicken esse. Ut biltong cow ea, ball tip cillum porchetta consequat pork loin lorem minim est. Quis minim tenderloin, aute doner ut consectetur flank ground round.

        Turducken irure porchetta aliquip duis. Do t-bone hamburger burgdoggen jowl aliquip, meatball biltong pariatur flank irure capicola meatloaf in. In bresaola meatloaf, bacon doner voluptate pork chop corned beef porchetta sirloin filet mignon ut ea tempor. Non mollit exercitation, qui ullamco spare ribs sint laborum tenderloin irure burgdoggen veniam porchetta rump swine. Spare ribs cupim proident swine, shankle ut mollit minim pancetta laboris picanha sed id fatback meatloaf. Ex aliquip tempor quis, boudin prosciutto porchetta salami fatback venison kielbasa bacon. Meatball boudin ground round, nulla bresaola in frankfurter short ribs pancetta salami ut pork loin bacon adipisicing brisket.
      </BagContent>
      <ButtonContainer>
        <CancelButton>
          <ButtonText>
            Cancel
          </ButtonText>
        </CancelButton>
        <CheckoutButton>
          <ButtonText>Checkout</ButtonText>
          <span>{totalPrice}</span>
        </CheckoutButton>
      </ButtonContainer>
    </BagContainer>
  )
}

// export default Bag

export default (props) => (
  <Query
    query={GET_CHECKOUT_NODE}
    variables={{ id: window.localStorage.getItem('sandalboyzCheckoutId') }}
  >
    {
      ({ data: { node } }) => (
        <Bag {...props} node={node} />
      )
    }
  </Query>
)
