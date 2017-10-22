const hapi = require('hapi')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

const compiler = webpack(webpackConfig)

const server = new hapi.Server()
const port = process.env.BUNDLE_PORT || 3001

const packagerOptions = {
  contentBase: `http://localhost:${port}`,
  quiet: false,
  noInfo: false,
  hot: true,
  stats: { colors: true },
  // stats: 'errors-only',
  inline: true,
  lazy: false,
  // https://github.com/webpack/webpack-dev-middleware/releases/tag/v1.10.2
  headers: {
    'Access-Control-Allow-Origin': `http://localhost:${process.env.PORT || 3000}`,
  },
  publicPath: webpackConfig.output.publicPath,
  // hash: false,
  // version: false,
  // timings: false,
  // assets: false,
  // chunks: false,
  // modules: false,
  // reasons: false,
  // children: false,
  // source: false,
  // errors: false,
  // errorDetails: false,
  // warnings: false,
}

const devMiddleware = webpackDevMiddleware(compiler, packagerOptions)
const hotMiddleware = webpackHotMiddleware(compiler)

server.connection({
  port,
})

server.register([{
  register: require('inert'),
}], (err) => {
  server.ext('onRequest', (request, reply) => {
    const { req, res } = request.raw
    devMiddleware(req, res, (err1) => {
      if (err1) return reply(err1)
      return reply.continue()
    })
  })
  server.ext('onRequest', (request, reply) => {
    const { req, res } = request.raw
    hotMiddleware(req, res, (err2) => {
      if (err2) return reply(err2)
      return reply.continue()
    })
  })
  server.start()
})
