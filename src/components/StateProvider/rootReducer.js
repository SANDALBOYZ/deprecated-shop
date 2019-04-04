// @flow
import get from 'lodash/get'

type RootState = {
  bagIsOpen: boolean,
  menuIsOpen: boolean
}

export const TOGGLE_BAG = 'TOGGLE_BAG'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const CLOSE_BAG = 'CLOSE_BAG'
export const CLOSE_MENU = 'CLOSE_MENU'

const initialState: RootState = {
  bagIsOpen: false,
  menuIsOpen: false
}

export const rootReducer = (state: RootState = initialState, action): RootState => {
  switch (get(action, 'type')) {
    case TOGGLE_BAG:
      return {
        ...state,
        menuIsOpen: false,
        bagIsOpen: !state.bagIsOpen
      }
    case TOGGLE_MENU:
      return {
        ...state,
        bagIsOpen: false,
        menuIsOpen: !state.menuIsOpen
      }
    case CLOSE_BAG:
      return {
        ...state,
        bagIsOpen: false
      }
    case CLOSE_MENU:
      return {
        ...state,
        menuIsOpen: false
      }
    default:
      return state
  }
}

export default rootReducer
