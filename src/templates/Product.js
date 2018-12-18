// @flow

import React from 'react'
// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from 'utils/typography'

// Components
import Select from 'react-select'
import Slider from 'react-slick'
import Layout from 'components/Layout'

// Styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const StyledSlider = styled(Slider)`
  margin-bottom: ${rhythm(1.5)};
`

const ProductImage = styled.img`
  margin: 0;
`

const AddToBagContainer = styled.div`
  padding: 0 ${rhythm(0.5)};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(0.5)};
`

export const AddToBagButton = styled('button')`
  background-color: black;
  color: white;
  border: 1px solid black;
  height: 30px;
  font-size: 12px;
  text-transform: uppercase;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    border-color: gray;
    background-color: gray;
  }
`

const DescriptionContainer = styled.section`
  padding: 0 ${rhythm(0.5)};
`

const selectStyles = {
  container: (provided) => ({
    ...provided
  }),
  control: (provided, { isFocused }) => ({
    ...provided,
    fontSize: '12px',
    minHeight: '30px',
    height: '30px',
    border: '1px solid',
    borderColor: 'black',
    boxShadow: 0,
    borderRadius: 0,
    outline: 0,
    '&:hover': {
      borderColor: 'black'
    }
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 0,
    margin: 0
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '12px',
    textTransform: 'uppercase'
  }),
  option: (provided, { isDisabled, isFocused }) => ({
    ...provided,
    color: 'black',
    fontSize: '12px',
    padding: `${rhythm(0.2)}`,
    ...isDisabled && { textDecoration: 'line-through' },
    ...isFocused && { backgroundColor: 'gray' },
    '&:active': {
      backgroundColor: 'lightgray'
    }
  })
}

const SizeChart = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  &:after {
    content: 'Size Chart';
  }
`

class Product extends React.Component {
  render () {
    const { pathContext: product } = this.props

    return (
      <Layout>
        <StyledSlider
          dots
        >
          {
            product.images.map(image => (
              <ProductImage key={image.originalSrc} src={image.originalSrc} />
            ))
          }
        </StyledSlider>
        <AddToBagContainer>
          <Select
            options={product.variants.map(variant => ({
              value: variant.id,
              label: variant.title,
              isDisabled: !variant.availableForSale
            }))}
            isSearchable={false}
            styles={selectStyles}
            placeholder='Select'
          />
          <AddToBagButton>Add To Bag</AddToBagButton>
        </AddToBagContainer>
        <DescriptionContainer>
          <h2>{product.title}</h2>
          <h6>{product.variants[0].price} USD</h6>
          <p>{product.description}</p>
          <SizeChart />
        </DescriptionContainer>
      </Layout>
    )
  }
}

export default Product
