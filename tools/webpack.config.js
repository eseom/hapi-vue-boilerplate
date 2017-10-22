const path = require('path')
const webpack = require('webpack')

const webpackBase = require('./webpack.base')

module.exports = Object.assign({}, webpackBase, {
  entry: {
    main: [
      `webpack-hot-middleware/client?path=http://localhost:${process.env.BUNDLE_PORT || 3001}/__webpack_hmr&name=main`,
      path.resolve(`${__dirname}/../src/main.js`),
    ],
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: `http://localhost:${process.env.BUNDLE_PORT || 3001}/`,
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      CLIENT: true,
      SERVER: false,
      DEVELOPMENT: process.env.NODE_ENV !== 'production',
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`,
      },
    }),
  ],
})

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ])
}
