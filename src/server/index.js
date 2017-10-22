import Boom from 'boom'
import Joi from 'joi'
import hapi from 'hapi'

import ssr from './ssr'
import apis from './apis'

const server = new hapi.Server()

server.connection({
  port: process.env.PORT || 3000,
})

const routes = [{
  method: 'GET',
  path: '/dist/{p*}',
  config: {
    validate: {
      query: {
        id: Joi.number().integer().required(),
      },
    },
  },
  handler: {
    directory: {
      path: `${__dirname}/dist`,
    },
  },
}, {
  method: 'GET',
  path: '/{params*}',
  handler(request, reply) {
    ssr(request)
      .then(result => reply(result))
  },
}]

server.register([{
  register: require('inert'),
}, {
  register: require('yar'),
  options: {
    storeBlank: false,
    cookieOptions: {
      password: 'the-password-must-be-at-least-32-characters-long',
      isSecure: false,
    },
  },
}, {
  register: require('nes'),
}, {
  register: require('hapi-es7-async-handler'),
}], (err) => {
  server.route(apis)
  server.route(routes)
  server.start()
})
