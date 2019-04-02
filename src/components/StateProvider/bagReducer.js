// @flow
import get from 'lodash/get'

type BagProduct = {
  quantity: number
}
export type BagState = {
  [productId: string]: BagProduct
}

export const BAG_ADD = '@bag/ADD'
export const BAG_SUBTRACT = '@bag/subtract'
export const BAG_REMOVE = '@bag/REMOVE'

const initialState: BagState = {}

export const bagReducer = (state: BagState = initialState, action): BagState => {
  switch (get(action, 'type')) {
    case BAG_ADD: {
      const id = get(action, 'payload.selectedOption.value')

      if (state[id]) {
        return {
          ...state,
          [id]: {
            ...state[id],
            quantity: state[id].quantity + 1
          }
        }
      } else {
        const { product, selectedOption } = action.payload
        return {
          ...state,
          [id]: {
            quantity: 1,
            metadata: { ...product, selectedOption }
          }
        }
      }
    }
    case BAG_SUBTRACT: {
      const id = action.payload.id

      if (state[id].quantity === 1) {
        const { [id]: _, ...without } = state
        return without
      } else {
        return {
          ...state,
          [id]: {
            ...state[id],
            quantity: state[id].quantity - 1
          }
        }
      }
    }
    case BAG_REMOVE: {
      const id = action.payload.id

      const { [id]: _, ...without } = state
      return without
    }
    default:
      return state
  }
}

export default bagReducer
