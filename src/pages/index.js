import React from 'react'
import styled from '@emotion/styled'
import { Layout } from '../components/Layout'

const PinkDiv = styled.div`
  color: pink;
`

const Index = () => (
  <Layout>
    <PinkDiv>Hello, World!</PinkDiv>
  </Layout>
)

export default Index
