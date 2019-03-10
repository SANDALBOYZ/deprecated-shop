// @flow
import React from 'react'
import styled from '@emotion/styled'

type ProductTileProps = {
  handle: string,
  title: string,
  price: string,
  currency: string,
  image: string
}

const ProductTile = ({ handle, title, price, currency, imageSrc }: ProductTileProps) => (
  <div href={`/products/${handle}`}>
    <div>
      <img src={imageSrc} />
    </div>
    <div>
      {title} - {price} {currency}
    </div>
  </div>
)

export default ProductTile
