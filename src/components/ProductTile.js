// @flow
import React from 'react'
import styled from '@emotion/styled'

type ProductTileProps = {
  handle: string,
  title: string,
  price: string,
  currency: string,
  imageSrc: string
}

const Container = styled.div`
`

const Image = styled.img`
  width: 100%;
`

const Description = styled.a``

const ProductTile = ({ handle, title, price, currency, imageSrc }: ProductTileProps) => (
  <Container>
    <a href={`/products/${handle}`}>
      <Image src={imageSrc} />
    </a>
    <Description href={`/products/${handle}`}>
      {title} - {price} {currency}
    </Description>
  </Container>
)

export default ProductTile
