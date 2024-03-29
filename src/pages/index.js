import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout } from 'components/Layout'
import withProvider from 'withProvider'

const PinkDiv = styled.div`
  margin: 1rem;
  color: pink;
`

const Index = ({ data }) => {
  return (
    <Layout>
      <PinkDiv>Hello, World!</PinkDiv>
    </Layout>
  )
}

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
          images {
            originalSrc
          }
        }
      }
    }
  }
`

export default withProvider(Index)
