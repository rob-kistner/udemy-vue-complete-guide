/**
 * This is how you instantiate a Vue app now,
 * passing the configuration in as an object
 */
const app = Vue.createApp(
  {
    /**
     * data ALWAYS needs to be a method now
     */
    data() {
      return {
        message: 'This works in Vue 2!',
      }
    },
    methods: {
      changeMessage() {
        this.message = 'Will it work in Vue 3?';
      },
    },
  }
)

/**
 * this used to be Vue.component
 */
app.component(
  'the-button',
  {
    // technically not required, but the emits
    // list makes it obvious what it's emitting
    emits: ['update'],
    template: '<button @click="updateMessage">Click me</button>',
    methods: {
      updateMessage() {
        this.$emit('update');
      },
    },
  }
)

/**
 * This used to be the 'el: #app' call, now you
 * mount it directly to the createApp function
 */
app.mount('#app')
