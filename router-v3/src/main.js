import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import WelcomeScreen from './pages/WelcomeScreen'
import UsersList from './pages/UsersList'

const router = createRouter({
    // new history mode, imported above
  history: createWebHistory(),
    // works largely as before
  routes: [
    {
      path: '/',
      component: WelcomeScreen,
    },
    {
      path: '/users',
      component: UsersList,
    },
  ]
})

const app = createApp(App)

app.use(router)

/**
 * this isReady and the promise it returns
 * prevents the initial animation when the page
 * is loaded
 */
router
  .isReady()
  .then(() => {
    app.mount('#app')
  })
  
