const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/flow']
}

module.exports = require('babel-jest').createTransformer(babelOptions)
