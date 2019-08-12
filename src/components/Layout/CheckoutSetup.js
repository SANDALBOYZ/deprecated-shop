// This is a NON-PRESENTATIONAL component. It uses Apollo to set up necessary API stuff.
import React, { useContext, useEffect } from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_CHECKOUT } from 'api/queries'
import { StateContext, BAG_SET } from 'components/StateProvider'

/**
 * This will create a checkout remotely and save the ID of it in `localStorage`.
 *
 * 1. `createCheckout` must be created with a mutation.
 * 2. All of the checkout information can be gathered from the `GET_CHECKOUT_NODE` endpoint.
 *    Subsequent modifications to the cart will be made on the `checkoutId` in `localStorage`.
 */

const CreateCheckout = ({ createCheckout }) => {
  useEffect(() => {
    if (!window.localStorage.sandalboyzCheckoutId) {
      createCheckout({ variables: { input: {} } })
    }
  })

  return null
}

const CheckoutSetup = () => {
  const [, dispatch] = useContext(StateContext)

  return (
    <Mutation
      mutation={CREATE_CHECKOUT}
      onCompleted={({ checkoutCreate: { checkout } }) => {
        window.localStorage.setItem('sandalboyzCheckoutId', checkout.id)
        dispatch({ type: BAG_SET, payload: { checkout } })
      }}
    >
      {(createCheckout) => <CreateCheckout createCheckout={createCheckout} />}
    </Mutation>
  )
}

export default CheckoutSetup
