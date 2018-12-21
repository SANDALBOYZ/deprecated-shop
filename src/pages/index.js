import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Layout } from '../components/Layout';


const Container = styled.div`
  display: flex; 
  max-width: 1000rem;
  width: 100%
  justify-content: center;
  padding: 50px;

`
const Box1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Box2 = styled.div`
  paddingY: 4rem;
  width: 300px;
  height: 450px;
  margin: 2rem;
`

const Card = styled.div`
  box-shadow: 0 4px 8px 0;
  transition: 0.3s;
  width: 100%;
  height: 100%;
  &:hover {
    color: hotpink;
    cursor: pointer;
  }
`

const Box3 = styled.div`
  display: flex;
  justify-content: space-between
`

const Box4 = styled.div`
  padding: 5px;
  margin: 5px
`

const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  font-family: arial;
  padding: 5px;
`

const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  font-family: arial;
  padding: 5px;
`

const ProductSizes = styled.div`
  font-size: 1rem;
  font-family: arial;
  display: flex;
  justify-content: center;
  padding: 5px;
`

const Image = styled.div`
  height: 300px;
  width: 300px;
`



const Index = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Container>
        <Box1>
          {data.allShopifyProduct.edges.map(edge => (
            <Box2>
              <Card>
                <Image>
                  <img 
                    alt="sandals" 
                    src={edge.node.images[0].originalSrc} 
                    />
                </Image>
              
                <Box3>
                  <ProductTitle>{edge.node.title}</ProductTitle>
                  <ProductPrice>${edge.node.variants[0].price}</ProductPrice>
                </Box3>
                <Box4>
                  <ProductSizes>{edge.node.variants.map(variant => {
                    const Unavailable = styled.div`
                      text-decoration: line-through;
                      padding: 5px;
                    `
                    const Available = styled.div`
                      padding: 5px;
                    `
                    return variant.availableForSale ? <Available> {variant.title} </Available> : <Unavailable>{variant.title}</Unavailable>

                  })}
                  </ProductSizes>
                </Box4>
                 
              </Card>
        
            </Box2>

            ))}
          </Box1>
        </Container>
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
