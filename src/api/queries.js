import gql from 'graphql-tag'

export const CHECKOUT_FRAGMENT = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    subtotalPrice
    totalTax
    totalPrice
    currencyCode
    lineItems (first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image {
              transformedSrc(maxHeight: 400, maxWidth: 400)
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

export const GET_CHECKOUT_NODE = gql`
  ${CHECKOUT_FRAGMENT}

  query getCheckoutNode($id: ID!) {
    node(id: $id) {
      __typename
      ...CheckoutFragment
    }
  }
`

export const CHECKOUT_LINE_ITEMS_REPLACE = gql`
  ${CHECKOUT_FRAGMENT}

  mutation checkoutLineItemsReplace($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
    userErrors {
      code
      field
      message
    }
    checkout {
      ...CheckoutFragment
    }
  }
`
