/* eslint-env jest */
import reducer from './reducer'

describe('reducer', () => {
  it('initializes with state', () => {
    const initialState = {
      bagIsOpen: false,
      menuIsOpen: false,
      bag: {
        items: []
      }
    }

    expect(reducer()).toEqual(initialState)
  })
})
