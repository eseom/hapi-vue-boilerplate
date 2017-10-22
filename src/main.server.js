import Vue from 'vue'
import Boom from 'boom'
import App from './App.vue'

import router from './router'
import store from './store'

export default context =>
  new Promise((resolve, reject) => {
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        reject(Boom.notFound())
        return
      }

      context.state = store.state

      resolve(new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App),
      }))
    }, reject)
  })
