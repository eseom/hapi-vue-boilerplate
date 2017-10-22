const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const webpackBase = require('./webpack.base')

module.exports = Object.assign({}, webpackBase, {
  target: 'node',
  entry: './src/main.server.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: `http://localhost:${process.env.BUNDLE_PORT || 3001}/`,
    filename: 'build.js',
    libraryTarget: 'commonjs2',
  },
  performance: {
    hints: false,
  },
  externals: nodeExternals({
    whitelist: /\.css$/,
  }),
  devtool: '#source-map',
  plugins: [
    new VueSSRServerPlugin(),
    new webpack.DefinePlugin({
      CLIENT: false,
      SERVER: true,
      DEVELOPMENT: process.env.NODE_ENV !== 'production',
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`,
      },
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false,
    //   },
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
})
