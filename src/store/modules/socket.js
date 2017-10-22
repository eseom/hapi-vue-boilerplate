const SOCKET_CONNECTED = '@vue-nes/CONNECTED'
const SOCKET_DISCONNECTED = '@vue-nes/DISCONNECTED'
const SOCKET_MESSAGE = '@vue-nes/MESSAGE'

export default {
  state: {
    connected: false,
    message: {},
  },
  mutations: {
    [SOCKET_CONNECTED](state) {
      state.connected = true
    },
    [SOCKET_DISCONNECTED](state) {
      state.connected = true
    },
    [SOCKET_MESSAGE](state, payload) {
      state.message = payload.message
    },
  },
}
