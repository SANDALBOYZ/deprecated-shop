/* eslint-env jest */
import { serializeBagToLineItems } from './serializers'

describe('serializeBagToLineItems', () => {
  it('converts a bag object to line items for Shopify API', () => {
    const bag = {
      items: {
        Shopify__ProductVariant__someVariantId: {
          quantity: 1
        }
      }
    }

    const result = [{ quantity: 1, variantId: 'someVariantId' }]

    expect(serializeBagToLineItems(bag)).toEqual(result)
  })
})
