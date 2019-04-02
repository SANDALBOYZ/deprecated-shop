/* eslint-env jest */
import bagReducer, { BAG_ADD, BAG_SUBTRACT, BAG_REMOVE, deserializeLineItemsToBag } from './bagReducer'

describe('bagReducer', () => {
  it('initializes with state', () => {
    const initialState = {
      items: []
    }

    expect(bagReducer(undefined)).toEqual(initialState)
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

describe('deserializeLineItemsToBag', () => {
  it('deserializes graphql data into `BagState`', () => {
    const data = {
      'checkoutLineItemsReplace': {
        'checkout': {
          'id': 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC8yNmU4ZGIzYzE5NDU3MGYwNjQxMDJhNDlhZDQ0MGY3Yj9rZXk9YzI4ZTg0MGJkMTgyYTIyYzZkMTkyMjAwYmYxN2UzNjI=',
          'lineItems': {
            'edges': [
              {
                'node': {
                  'id': 'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzQ2MDBmOGM2ZmM1Yzc3Y2Q3ZTllMmEzYzMwZjg4ZGYxP2NoZWNrb3V0PTI2ZThkYjNjMTk0NTcwZjA2NDEwMmE0OWFkNDQwZjdi',
                  'title': 'Core Collection 01 |  Black / Metallic Gold',
                  'quantity': 1,
                  'variant': {
                    'id': 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNTYzNzc5MTA0Nzkz',
                    'product': {
                      'title': 'Core Collection 01 |  Black / Metallic Gold',
                      'description': "Our Core Collection consists of a refined interest in high quality basics. We've revisited our classic slide with a refreshingly minimal design. Appropriate for indoor and outdoor wear. Recommended to be used near bodies of water or when cruising at altitudes above 35000 feet. This Black / Metallic Gold special edition comes in a limited quantity, made for NBA All Star Weekend 2018. PU leather pebble-grain upper, high density contrast rope print."
                    }
                  }
                }
              },
              {
                'node': {
                  'id': 'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtL2ExZjIwODQxZDU4Njk3ODJiNTExY2VkZmNiMzMyZTk1P2NoZWNrb3V0PTI2ZThkYjNjMTk0NTcwZjA2NDEwMmE0OWFkNDQwZjdi',
                  'title': 'Core Collection 01 |  Black / Metallic Gold',
                  'quantity': 2,
                  'variant': {
                    'id': 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNTYzNzc4OTQwOTUz',
                    'product': {
                      'title': 'Core Collection 01 |  Black / Metallic Gold',
                      'description': "Our Core Collection consists of a refined interest in high quality basics. We've revisited our classic slide with a refreshingly minimal design. Appropriate for indoor and outdoor wear. Recommended to be used near bodies of water or when cruising at altitudes above 35000 feet. This Black / Metallic Gold special edition comes in a limited quantity, made for NBA All Star Weekend 2018. PU leather pebble-grain upper, high density contrast rope print."
                    }
                  }
                }
              },
              {
                'node': {
                  'id': 'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtL2M5NjJmYWI3NzQ4YzI0N2I4MTM1MTg1MWFjOWQ5NDI3P2NoZWNrb3V0PTI2ZThkYjNjMTk0NTcwZjA2NDEwMmE0OWFkNDQwZjdi',
                  'title': 'Core Collection 01 |  Black / Metallic Gold',
                  'quantity': 1,
                  'variant': {
                    'id': 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNTYzNzc4ODQyNjQ5',
                    'product': {
                      'title': 'Core Collection 01 |  Black / Metallic Gold',
                      'description': "Our Core Collection consists of a refined interest in high quality basics. We've revisited our classic slide with a refreshingly minimal design. Appropriate for indoor and outdoor wear. Recommended to be used near bodies of water or when cruising at altitudes above 35000 feet. This Black / Metallic Gold special edition comes in a limited quantity, made for NBA All Star Weekend 2018. PU leather pebble-grain upper, high density contrast rope print."
                    }
                  }
                }
              }
            ]
          }
        },
        'userErrors': []
      }
    }

    const lineItems = data.checkoutLineItemsReplace.checkout.lineItems.edges

    const result = {
      Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNTYzNzc5MTA0Nzkz: {
        quantity: 1
      },
      Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNTYzNzc4OTQwOTUz: {
        quantity: 2
      },
      Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNTYzNzc4ODQyNjQ5: {
        quantity: 1
      }
    }

    expect(deserializeLineItemsToBag(lineItems)).toEqual(result)
  })
})
