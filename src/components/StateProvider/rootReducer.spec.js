/* eslint-env jest */
import rootReducer, { TOGGLE_BAG, TOGGLE_MENU } from './rootReducer'

describe('rootReducer', () => {
  const initialState = {
    bagIsOpen: false,
    menuIsOpen: false
  }

  it('initializes with state', () => {
    expect(rootReducer(undefined)).toEqual(initialState)
  })

  it('toggles `bagIsOpen`', () => {
    const action = { type: TOGGLE_BAG }

    expect(rootReducer(initialState, action)).toEqual({
      bagIsOpen: true,
      menuIsOpen: false
    })
  })

  it('toggles `bagIsOpen`', () => {
    const action = { type: TOGGLE_MENU }

    expect(rootReducer(initialState, action)).toEqual({
      bagIsOpen: false,
      menuIsOpen: true
    })
  })
})
