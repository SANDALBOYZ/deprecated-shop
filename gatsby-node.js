const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })
}

exports.onCreateNode = ({ node }) => {
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const products = await graphql(`
    {
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
  `)

  products.data.allShopifyProduct.edges.forEach(({ node: product }) => {
    createPage({
      path: `/products/${product.handle}`,
      component: path.resolve(__dirname, 'src/templates/Product.js'),
      context: product
    })
  })
}
