import Vue from 'vue'
import VueRouter from 'vue-router'
import request from 'superagent'
import Qs from 'qs'

import Home from './containers/Home.vue'
import About from './containers/About.vue'
import Item from './containers/Item.vue'
import Login from './containers/Login.vue'

import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  parseQuery: Qs.parse,
  routes: [{
    name: 'home',
    path: '/',
    component: Home,
  }, {
    name: 'about',
    path: '/about',
    component: About,
  }, {
    name: 'item',
    path: '/item',
    component: Item,
  }, {
    name: 'login',
    path: '/login',
    component: Login,
  }],
})

router.beforeEach(async (to, from, next) => {
  // let loggedIn = false
  // try {
  //   const user = await request.get('/api/user/load-auth')
  //     .then(resp => resp.body)
  //   loggedIn = true
  //   store.commit('LOGIN', user)
  // } catch (e) { // eslint-disable-line empty-block
  //   store.commit('LOGOUT')
  // }

  // if (to.name === 'login') {
  //   if (loggedIn) {
  //     router.replace({ name: 'front-home' })
  //   }
  // }
  next()
})

export default router
