// @flow
import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components/Layout'
import ProductTile from 'components/ProductTile'

const Products = ({ data: { allShopifyProduct: { edges } } }) => {
  console.log(edges)

  return (
    <Layout>
      <div>
        {
          edges.map(({ node }) => (
            <ProductTile
              key={node.handle}
              handle={node.handle}
              title={node.title}
              price={node.priceRange.minVariantPrice.amount}
              currency={node.priceRange.minVariantPrice.currencyCode}
              imageSrc={node.images[0].originalSrc}
            />
          ))
        }
      </div>
    </Layout>
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
