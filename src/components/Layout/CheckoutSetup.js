// This is a NON-PRESENTATIONAL component. It uses Apollo to set up necessary API stuff.
import React from 'react'
import { Mutation, Query } from 'react-apollo'
import { CREATE_CHECKOUT, GET_CHECKOUT_NODE } from 'api/queries'

const { localStorage } = window

/**
 * This will create a checkout remotely and save the ID of it in `localStorage`.
 * We then make a GraphQL query for that saved ID so that Apollo can cache it.
 *
 * 1. `createCheckout` must be created with a mutation.
 * 2. All of the checkout information can be gathered from the `GET_CHECKOUT_NODE` endpoint.
 *    Subsequent modifications to the cart will be made on the `checkoutId` in `localStorage`.
 */
const CheckoutSetup = () => (
  <>
    <Mutation
      mutation={CREATE_CHECKOUT}
      onCompleted={({ checkoutCreate: { checkout: { id } } }) =>
        localStorage.setItem('sandalboyzCheckoutId', id)
      }
      update={(cache, { data: { checkoutCreate } }) => {
        console.log('`update` function from `Mutation`', checkoutCreate)
      }}
    >
      {
        // If there is no `sandalboyzCheckoutId` stored, then we make a call to create one.
        // The result is stored using `onCompleted` (above).
        (createCheckout) => {
          if (!localStorage.getItem('sandalboyzCheckoutId')) {
            createCheckout({ variables: { input: {} } })
          }

          return null
        }
      }
    </Mutation>
    { localStorage.getItem('sandalboyzCheckoutId') &&
      <Query
        query={GET_CHECKOUT_NODE}
        variables={{ id: localStorage.getItem('sandalboyzCheckoutId') }}
      >
        {() => null}
      </Query>
    }
  </>
)

export default CheckoutSetup
