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

const Image = styled.img`
  width: 100%;
`

const ProductTile = ({ handle, title, price, currency, imageSrc }: ProductTileProps) => (
  <div>
    <Image src={imageSrc} />
    <div>
      {title} - {price} {currency}
    </div>
  </div>
)

export default ProductTile
