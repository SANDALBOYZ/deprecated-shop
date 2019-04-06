// @flow
import get from 'lodash/get'
// import set from 'lodash/set'

type BagItem = {
  quantity: number,
  title: string,
  variantTitle: string
}
export type BagState = {
  checkoutId: string,
  updatedAt: string,
  items: {
    [itemId: string]: BagItem
  },
  subtotalPrice: string,
  totalTax: string,
  totalPrice: string,
  currencyCode: string,
  checkoutWebUrl: string
}

export const BAG_ADD = '@bag/ADD'
export const BAG_SUBTRACT = '@bag/SUBTRACT'
export const BAG_REMOVE = '@bag/REMOVE'
export const BAG_SET = '@bag/SET'

const initialState: BagState = {
  items: {}
}

/**
 *  Takes `checkoutLineItems` from GraphQL call and turns it into
 *  something our Bag component can understand.
 */
export const deserializeLineItemsToBagItems = (lineItems): [BagItem] => {
  return lineItems.reduce((bagState: BagState, { node }) => {
    return {
      ...bagState,
      [`Shopify__ProductVariant__${node.variant.id}`]: {
        quantity: node.quantity,
        title: node.title,
        variantTitle: node.variant.title
      }
    }
  }, {})
}

export const bagReducer = (state: BagState = initialState, action): BagState => {
  switch (get(action, 'type')) {
    case BAG_ADD: {
      const id = get(action, 'payload.selectedOption.value')

      if (state.items[id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [id]: {
              ...state.items[id],
              quantity: state.items[id].quantity + 1
            }
          }
        }
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [id]: {
              quantity: 1
            }
          }
        }
      }
    }
    case BAG_SUBTRACT: {
      const id = action.payload.id
      const { items } = state

      if (items[id].quantity === 1) {
        const { [id]: _, ...without } = items
        return {
          ...state,
          items: without
        }
      } else {
        return {
          ...state,
          items: {
            ...items,
            [id]: {
              ...items[id],
              quantity: items[id].quantity - 1
            }
          }
        }
      }
    }
    case BAG_REMOVE: {
      const id = action.payload.id

      const { [id]: _, ...without } = state.items
      return {
        ...state,
        items: without
      }
    }
    case BAG_SET: {
      const { payload: { checkout } } = action

      return {
        ...state,
        checkoutId: checkout.id,
        updatedAt: checkout.updatedAt,
        subtotalPrice: checkout.subtotalPrice,
        totalTax: checkout.totalTax,
        totalPrice: checkout.totalPrice,
        currencyCode: checkout.currencyCode,
        checkoutWebUrl: checkout.webUrl,
        items: deserializeLineItemsToBagItems(checkout.lineItems.edges)
      }
    }
    default:
      return state
  }
}

export default bagReducer
