import superagent from 'superagent'

export default {
  state: {
    items: [],
    loaded: false,
  },
  mutations: {
    FETCH_ITEM(state, data) {
      state.items = data
      state.loaded = true
    },
  },
  actions: {
    async FETCH_ITEM({ commit }) {
      const result = await superagent.get('http://localhost:3000/api/items')
        .then(resp => resp.body)
      commit('FETCH_ITEM', result)
    },
  },
}
