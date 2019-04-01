type BagProduct = {
  quantity: number
}

type State = {
  [productId: string]: BagProduct
}

export const BAG_ADD = '@bag/ADD'
export const BAG_SUBTRACT = '@bag/subtract'
export const BAG_REMOVE = '@bag/REMOVE'

export const bagReducer = (state: State, action): State => {
  switch (action.type) {
    case BAG_ADD:
      return {
        ...state,
        [action.payload.productId]: {
          ...state[action.payload.productId],
          quantity: state[action.payload.productId] + 1
        }
      }
    case BAG_SUBTRACT:
      if (state[action.payload.productId].quantity === 1) {
        const { [action.payload.productId]: _, ...without } = state
        return without
      } else {
        return {
          ...state,
          [action.payload.productId]: {
            ...state[action.payload.productId],
            quantity: state[action.payload.productId] - 1
          }
        }
      }
    case BAG_REMOVE:
      const { [action.payload.productId]: _, ...without } = state
      return without
    default:
      return state
  }
}
