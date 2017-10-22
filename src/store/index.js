import Nes from 'nes'
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'

import socket from './modules/socket'
import app from './modules/app'
import item from './modules/item'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    socket,
    app,
    item,
  },
  strict: true,
})

class Socket {
  constructor(vuexStore, obj) {
    this.vuexStore = vuexStore
    this.onUpdate = obj.onUpdate
  }

  connect(url) {
    if (this.client) this.client.disconnect()
    this.client = new Nes.Client(url)
    this.client.connect((/* err1 */) => {
      console.log('[SOCKET] connected')

      this.client.onUpdate = this.onUpdate

      console.log('[SOCKET] registered onUpdate handler')
    })

    this.client.onConnect = () => {
      this.vuexStore.commit('@vue-nes/CONNECTED')
      // Object.keys(this.connectHandlers).forEach((name) => {
      //   this.connectHandlers[name]()
      // })
    }
    this.client.onDisconnect = () => {
      this.vuexStore.commit('@vue-nes/DISCONNECTED')
      // Object.keys(this.disconnectHandlers).forEach((name) => {
      //   this.disconnectHandlers[name]()
      // })
    }
  }
}

const VueNes = {
  sync: (url, vuexStore) => {
    const nesSocket = new Socket(vuexStore, {
      onUpdate: (update) => {
        vuexStore.commit('@vue-nes/MESSAGE', {
          message: update,
        })
      },
    })
    nesSocket.connect(url)
  },
}

try {
  VueNes.sync(`ws${window.location.protocol === 'https:' ? 's' : ''}://${window.location.host}`, store)
} catch (e) {
  //
}

if (module.hot) {
  module.hot.accept([
    './getters', './actions',
    './modules/app',
    './modules/socket',
    './modules/item',
  ], () => {
    const newGetters = require('./getters').default
    const newActions = require('./actions').default

    const newSocket = require('./modules/socket').default
    const newApp = require('./modules/app').default
    const newItem = require('./modules/item').default

    store.hotUpdate({
      getters: newGetters,
      actions: newActions,
      modules: {
        app: newApp,
        socket: newSocket,
        item: newItem,
      },
      strict: true,
    })

    try {
      VueNes.sync(`ws${window.location.protocol === 'https:' ? 's' : ''}://${window.location.host}`, store)
    } catch (e) {
      //
    }
  })
}

export default store
