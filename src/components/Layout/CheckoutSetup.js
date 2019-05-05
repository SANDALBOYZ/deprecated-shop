// This is a NON-PRESENTATIONAL component. It uses Apollo to set up necessary API stuff.
import React, { useContext, useEffect } from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_CHECKOUT } from 'api/queries'
import { StateContext, BAG_SET } from 'components/StateProvider'

/**
 * This will create a checkout remotely and save the ID of it in `localStorage`.
 * We then make a GraphQL query for that saved ID so that Apollo can cache it.
 *
 * 1. `createCheckout` must be created with a mutation.
 * 2. All of the checkout information can be gathered from the `GET_CHECKOUT_NODE` endpoint.
 *    Subsequent modifications to the cart will be made on the `checkoutId` in `localStorage`.
 */

const CreateCheckout = ({ createCheckout }) => {
  console.log('================================')
  console.log('================================')
  console.log('Inside `CheckoutSetup.js`')
  console.log(process.env.NODE_ENV)
  console.log(process.env.SHOPIFY_GRAPHQL_URI)
  console.log(process.env.SHOPIFY_ACCESS_TOKEN)
  console.log(process.env.GATSBY_SHOPIFY_GRAPHQL_URI)
  console.log(process.env.GATSBY_SHOPIFY_ACCESS_TOKEN)

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
      // `update` is for updating Apollo cache (not implemented yet).
      // update={(cache, { data: { checkoutCreate } }) => {
      //   console.log('`update` function from `Mutation`', checkoutCreate)
      // }}
    >
      {
        // If there is no `sandalboyzCheckoutId` stored, then we make a call to create one.
        // The result is stored using `onCompleted` (above).
        (createCheckout) => <CreateCheckout createCheckout={createCheckout} />
      }
    </Mutation>
  )
}

// NOTE: This code will not be necessary until Apollo cache is implemented.
// {
//   localStorage.getItem('sandalboyzCheckoutId') &&
//   <Query
//     query={GET_CHECKOUT_NODE}
//     variables={{ id: localStorage.getItem('sandalboyzCheckoutId') }}
//   >
//     {(data) => {
//       console.log('I am inside of `<Query />`. `GET_CHECKOUT_NODE` was fired.', data)
//
//       return null
//     }}
//   </Query>
// }

export default CheckoutSetup
