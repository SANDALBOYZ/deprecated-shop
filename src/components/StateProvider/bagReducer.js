// @flow
type BagProduct = {
  quantity: number
}

export type BagState = {
  [productId: string]: BagProduct
}

export const BAG_ADD = '@bag/ADD'
export const BAG_SUBTRACT = '@bag/subtract'
export const BAG_REMOVE = '@bag/REMOVE'

export const bagReducer = (state: BagState, action): BagState => {
  const { type, payload } = action
  console.log('`bagReducer` with `payload`', payload)
  const id: string = payload.selectedOption.value

  switch (type) {
    case BAG_ADD:
      if (state[id]) {
        return {
          ...state,
          [id]: {
            ...state[id],
            quantity: state[id] + 1
          }
        }
      } else {
        return {
          ...state,
          [id]: {
            quantity: 1,
            metadata: { ...payload.product, selectedOption: payload.selectedOption }
          }
        }
      }
    case BAG_SUBTRACT:
      if (state[id].quantity === 1) {
        const { [id]: _, ...without } = state
        return without
      } else {
        return {
          ...state,
          [id]: {
            ...state[id],
            quantity: state[id] - 1
          }
        }
      }
    case BAG_REMOVE:
      const { [id]: _, ...without } = state
      return without
    default:
      return state
  }
}

export default bagReducer
