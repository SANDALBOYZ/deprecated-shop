/* eslint-env jest */
import { calculateBagQuantity } from './BagButton'

describe('calculateBagQuantity', () => {
  it('returns bag quantity', () => {
    const bagItems = {
      Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzM3NjIxNjEwNTIx: {
        quantity: 2,
        title: 'Core Collection 01 | Black',
        variantTitle: '9'
      },
      Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzM3NjIxNjQzMjg5: {
        quantity: 1,
        title: 'Core Collection 01 | Black',
        variantTitle: '10'
      }
    }

    expect(calculateBagQuantity(bagItems)).toEqual(3)
  })

  it('returns 0 for an empty bag', () => {
    const bagItems = {}

    expect(calculateBagQuantity(bagItems)).toEqual(0)
  })
})
