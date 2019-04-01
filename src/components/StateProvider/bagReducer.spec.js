/* eslint-env jest */
import bagReducer, { BAG_ADD, BAG_SUBTRACT, BAG_REMOVE } from './bagReducer'

describe('bagReducer', () => {
  it('initializes with state', () => {
    expect(bagReducer(undefined)).toEqual({})
  })

  it('adds a new item to bag', () => {
    const initialState = {}
    const action = {
      type: BAG_ADD,
      payload: {
        selectedOption: {
          value: 'selectedOptionValue',
          label: 'label',
          isDisabled: false
        },
        product: {
          id: 'someId',
          title: 'My Product Title'
        }
      }
    }

    const result = {
      selectedOptionValue: {
        quantity: 1,
        metadata: {
          id: 'someId',
          title: 'My Product Title',
          selectedOption: {
            value: 'selectedOptionValue',
            label: 'label',
            isDisabled: false
          }
        }
      }
    }

    expect(bagReducer(initialState, action)).toEqual(result)
  })

  it('increments existing item in bag', () => {
    const initialState = {
      selectedOptionValue: {
        quantity: 1,
        metadata: {
          id: 'someId',
          title: 'My Product Title',
          selectedOption: {
            value: 'selectedOptionValue',
            label: 'label',
            isDisabled: false
          }
        }
      }
    }

    const action = {
      type: BAG_ADD,
      payload: {
        selectedOption: {
          value: 'selectedOptionValue',
          label: 'label',
          isDisabled: false
        },
        product: {
          id: 'someId',
          title: 'My Product Title'
        }
      }
    }

    const result = {
      selectedOptionValue: {
        quantity: 2,
        metadata: {
          id: 'someId',
          title: 'My Product Title',
          selectedOption: {
            value: 'selectedOptionValue',
            label: 'label',
            isDisabled: false
          }
        }
      }
    }

    expect(bagReducer(initialState, action)).toEqual(result)
  })

  it('decrements existing item in bag', () => {
    const initialState = {
      selectedOptionValue: {
        quantity: 2,
        metadata: {
          id: 'someId',
          title: 'My Product Title',
          selectedOption: {
            value: 'selectedOptionValue',
            label: 'label',
            isDisabled: false
          }
        }
      }
    }

    const action = {
      type: BAG_SUBTRACT,
      payload: { id: 'selectedOptionValue' }
    }

    const result = {
      selectedOptionValue: {
        quantity: 1,
        metadata: {
          id: 'someId',
          title: 'My Product Title',
          selectedOption: {
            value: 'selectedOptionValue',
            label: 'label',
            isDisabled: false
          }
        }
      }
    }

    expect(bagReducer(initialState, action)).toEqual(result)
  })

  it('removes an item if decremented to 0', () => {
    const initialState = {
      selectedOptionValue: {
        quantity: 1,
        metadata: {
          id: 'someId',
          title: 'My Product Title',
          selectedOption: {
            value: 'selectedOptionValue',
            label: 'label',
            isDisabled: false
          }
        }
      }
    }

    const action = {
      type: BAG_SUBTRACT,
      payload: { id: 'selectedOptionValue' }
    }

    const result = {}

    expect(bagReducer(initialState, action)).toEqual(result)
  })

  it('removes an item', () => {
    const initialState = {
      selectedOptionValue: {
        quantity: 3,
        metadata: {
          id: 'someId',
          title: 'My Product Title',
          selectedOption: {
            value: 'selectedOptionValue',
            label: 'label',
            isDisabled: false
          }
        }
      }
    }

    const action = {
      type: BAG_REMOVE,
      payload: { id: 'selectedOptionValue' }
    }

    const result = {}

    expect(bagReducer(initialState, action)).toEqual(result)
  })
})
