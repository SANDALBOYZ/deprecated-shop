// @flow
import React, { useContext, useState, useEffect } from 'react'
// import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from 'utils/typography'
import { StateContext, bagReducer, BAG_ADD } from 'components/StateProvider'
import withProvider from 'withProvider'
import { serializeBagToLineItems } from 'utils/serializers'
// API
import { CHECKOUT_LINE_ITEMS_REPLACE } from 'api/queries'
// Components
import { Mutation } from 'react-apollo'
import Select from 'react-select'
// import Slider from 'react-slick'
import Layout from 'components/Layout'

// const StyledSlider = styled(Slider)`
//   margin-bottom: ${rhythm(1)};
// `

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
  option: (provided, { isDisabled, isFocused, isSelected }) => ({
    ...provided,
    color: 'black',
    fontSize: '12px',
    padding: `${rhythm(0.2)}`,
    ...isDisabled && { textDecoration: 'line-through' },
    ...isFocused && { backgroundColor: 'lightgray' },
    ...isSelected && { backgroundColor: 'gray' },
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

// `react-slick` overrides
// const globalStyles = css`
//   .slick-list {
//     height: 100vw !important;
//     margin-bottom: 5px !important;
//   }
//
//   .slick-dots {
//     display: flex !important;
//     position: inherit !important;
//     bottom: auto !important;
//     flex-wrap: wrap;
//   }
//
//   .slick-dots li {
//     margin: 0 !important;
//     height: calc((100vw - 10px) / 3) !important;
//     width: calc((100vw - 10px) / 3) !important;
//   }
//
//   .slick-dots li:nth-child(even) {
//     margin: 0 5px !important;
//   }
// `

const Product = ({ pageContext: product }) => {
  const [state] = useContext(StateContext)
  console.log('PRODUCT state', state)
  const [selectedOption, setSelectedOption] = useState()
  const [checkoutId, setCheckoutId] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (checkoutId !== window.localStorage.sandalboyzCheckoutId) {
        setCheckoutId(window.localStorage.sandalboyzCheckoutId)
      }
    }
  })

  return (
    <Mutation mutation={CHECKOUT_LINE_ITEMS_REPLACE}>
      {(checkoutLineItemsReplace, { loading, error, data }) => {
        return (
          <Layout>
            <div>
              {
                product.images.map(image => (
                  <ProductImage key={image.originalSrc} src={image.originalSrc} alt='' />
                ))
              }
            </div>
            <AddToBagContainer>
              <Select
                value={selectedOption}
                options={product.variants.map(variant => ({
                  value: variant.id,
                  label: variant.title,
                  isDisabled: !variant.availableForSale
                }))}
                isSearchable={false}
                styles={selectStyles}
                placeholder='Select'
                onChange={option => setSelectedOption(option)}
              />
              <AddToBagButton
                disabled={!selectedOption || loading}
                onClick={() => {
                  const lineItems = serializeBagToLineItems(bagReducer(state.bag, {
                    type: BAG_ADD,
                    payload: { selectedOption }
                  }))

                  checkoutLineItemsReplace({
                    variables: {
                      checkoutId,
                      lineItems
                    }
                  })
                }}
              >
                Add To Bag
              </AddToBagButton>
            </AddToBagContainer>
            <DescriptionContainer>
              <h2>{product.title}</h2>
              <h6>{product.variants[0].price} USD</h6>
              <p>{product.description}</p>
              <SizeChart />
            </DescriptionContainer>
          </Layout>
        )
      }}
    </Mutation>
  )
}

export default withProvider(Product)
