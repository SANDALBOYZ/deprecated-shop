import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout } from '../components/Layout'

const PinkDiv = styled.div`
  color: pink;
`

const Index = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <div>Hi</div>
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

export default Index
