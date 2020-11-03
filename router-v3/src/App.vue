<template>
  <div>
    <the-header></the-header>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
  </div>
</template>

<script>
/**
 * the v-slot= and <component :is="slotProps.Component" calls
 * allow for transitions 
 * on routes in v3. That <component> is 
 * the standard way to insert the component for the transitions to
 * work since <transition> now has to be wrapped by <router-view>
 */
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 40rem;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 12px;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
