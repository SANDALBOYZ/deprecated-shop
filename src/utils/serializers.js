// @flow
import type BagState from 'components/StateProvider'

type LineItem = {
  quantity: number,
  variantId: string
}

export const serializeBagToLineItems = ({ items }: BagState): [LineItem] => (
  Object.keys(items).map((itemId: string) => ({
    quantity: items[itemId].quantity,
    variantId: itemId.replace('Shopify__ProductVariant__', '')
  }))
)
