export default {
  state: {
    user: undefined,
  },
  mutations: {
    LOGIN(state, user) {
      state.user = user
    },
    LOGOUT(state) {
      state.user = undefined
    },
  },
  actions: {
  },
}
