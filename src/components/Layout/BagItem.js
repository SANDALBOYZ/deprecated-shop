// @flow
import React from 'react'

type Props = {
  title: string,
  description: string,
  price: string
}

const BagItem = ({ title, description, price, imgSrc }: Props) => (
  <div>
    <img src={imgSrc} />
    <span>{title}</span>
  </div>
)

export default BagItem
