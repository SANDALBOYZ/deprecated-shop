import gql from 'graphql-tag'

export const CHECKOUT_FRAGMENT = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTax
    subtotalPrice
    totalPrice
    lineItems (first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image {
              src
            }
            price
          }
          quantity
        }
      }
    }
  }
`

export const CREATE_CHECKOUT = gql`
  ${CHECKOUT_FRAGMENT}

  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkoutUserErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
`

export const GET_CHECKOUT = gql`
  ${CHECKOUT_FRAGMENT}

  query getCheckout($id: ID!) {
    node(id: $id) {
      __typename
      ...CheckoutFragment
    }
  }
`
