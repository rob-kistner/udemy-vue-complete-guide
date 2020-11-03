import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

/**
 * created like everything in Vue3,
 * the configuration object is still 
 * the same as v2.
 */
const store = createStore({
  state() {
    return {
      users: [],
    }
  },
  mutations: {
    addUser(state, payload) {
      const newUser = {
        id: new Date().toISOString(),
        name: payload.name,
      };
      state.users.push(newUser)
    },
  },
  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload)
    },
  },
  getters: {
    users(state) {
      return state.users
    },
  },
})

const app = createApp(App)

// call to use the vuex store
app.use(store)

app.mount('#app')
