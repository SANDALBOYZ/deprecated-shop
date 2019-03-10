// @flow
import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components/Layout'

const Products = (props) => {
  console.log(props)

  return (
    <Layout><div /></Layout>
  )
}

export default Products

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          handle
          title
          description
          descriptionHtml
          variants {
            id
            title
            availableForSale
            price
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images {
            originalSrc
          }
        }
      }
    }
  }
`
