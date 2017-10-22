import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

if (window.__INITIAL_STATE__) { // eslint-disable-line
  store.replaceState(window.__INITIAL_STATE__) // eslint-disable-line
}

const app = new Vue({
  router,
  store,
  render: h => h(App),
})

router.onReady(() => {
  app.$mount('#app')
})
