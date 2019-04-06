// @flow
import type BagState from 'components/StateProvider'

const GATSBY_SHOPIFY_PRODUCT_VARIANT_PREFIX: string = 'Shopify__ProductVariant__'

type LineItem = {
  quantity: number,
  variantId: string
}

export const serializeBagToLineItems = ({ items }: BagState): [LineItem] => (
  Object.keys(items).map((itemId: string) => ({
    quantity: items[itemId].quantity,
    variantId: itemId.replace(GATSBY_SHOPIFY_PRODUCT_VARIANT_PREFIX, '')
  }))
)
