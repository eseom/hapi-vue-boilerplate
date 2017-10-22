const Path = require('path')
const utils = require('./utils')

// babel
const babelConfig = (() => {
  let babelrcObject = {}
  try {
    babelrcObject = require('../package.json').babel
    if (babelrcObject.env) {
      return babelrcObject.env.development
    }
    return {}
  } catch (err) {
    console.error('==>     ERROR: Error parsing your package.json.')
    console.error(err)
    return {}
  }
})()

const cssLoaders = utils.cssLoaders({
  sourceMap: true,
  extract: false,
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: cssLoaders,
        },
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: false,
            },
          },
        ],
        include: [
          Path.resolve(__dirname, '..', 'node_modules'),
          Path.resolve(__dirname, '..', 'src'),
        ],
      }, {
        test: /assets\/css\/.*scss/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        include: [
          Path.resolve(__dirname, '..', 'node_modules'),
          Path.resolve(__dirname, '..', 'src'),
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
        ],
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg|jpeg|gif)?$/, use: 'file-loader?limit=10000&mimetype=image/svg+xml' },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
}
