// @flow
type RootState = {
  bagIsOpen: boolean,
  menuIsOpen: boolean
}

export const TOGGLE_BAG = 'TOGGLE_BAG'
export const TOGGLE_MENU = 'TOGGLE_MENU'

export const rootReducer = (state: RootState, action): RootState => {
  switch (action.type) {
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
    default:
      return state
  }
}

export default rootReducer
