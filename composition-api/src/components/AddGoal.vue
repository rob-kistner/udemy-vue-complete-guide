<template>
  <section class="container">
    <form @submit.prevent="addGoal">
      <div>
        <label for="goaltext">Goal</label>
        <input type="text" id="goaltext" v-model="enteredText" />
      </div>
      <p v-if="invalidInput">Please enter a valid goal text (non-empty).</p>
      <button>Add Goal</button>
    </form>
  </section>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  
  emits: ["add-goal"],
  
  /**
   * `context` holds extra pieces of info / functionality.
   * Here, we can use it to emit
   * 
   * `_` signals that we're not using the positional argument
   * (props should go here), we still need a placeholder for it though
   */
  setup(_, context) {
    
    // data
    const enteredText = ref('')
    const invalidInput = ref(false)
    
    // methods
    function addGoal() {
      invalidInput.value = false
      if (enteredText.value === '') {
        invalidInput.value = true
        return
      }
      context.emit('add-goal', enteredText.value)
      enteredText.value = ''
    }

    /**
     * watchers:
     * 
     * provide the whole ref (invalidInput, not just invalidInput.value)
     * and a function to watch it with
     * 
     * `oldValue` exists as a second parameter to the watcher function, 
     * but you don't have to use it
     */
    watch(invalidInput, function(val) {
      if (val) {
        console.log('Analytics: Invalid Input');
      }
    })

    return {
      enteredText,
      invalidInput,
      addGoal
    }
  }
}
</script>

<style scoped>
form {
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  font: inherit;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>