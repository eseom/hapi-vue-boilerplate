import Boom from 'boom'

import getItems from './items/getter'

export default [{
  method: 'GET',
  path: '/api/user/load-auth',
  config: {
    tags: ['api'],
  },
  handler(request, reply) {
    reply(request.yar.get('user') || Boom.unauthorized)
  },
}, {
  method: 'GET',
  path: '/api/items',
  config: {
    tags: ['api'],
  },
  async handler(request, reply) {
    reply(await getItems())
  },
}, {
  method: 'GET',
  path: '/api/login',
  config: {
    tags: ['api'],
  },
  async handler(request, reply) {
    console.log(request.payload)
    reply({})
  },
}]
