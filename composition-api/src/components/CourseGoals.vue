<template>
  <div>
    <goals-list :goals="filteredGoals"></goals-list>
    <add-goal @add-goal="addGoal"></add-goal>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import GoalsList from './GoalsList.vue'
import AddGoal from './AddGoal.vue'

export default {
  components: {
    GoalsList,
    AddGoal,
  },
  /** ----------------------------------------
   * Setup is called around the same time created() hook
   * is called. All data, funcitons, watchers, computed 
   * properties are defined in setup().
   * 
   * Props:
   * setup will receive a props argument 
   ---------------------------------------- */
  setup() {
    /** ----------------------------------------
     * ref() creates a wrapper object around the properties,
     * so you don't actually change the variable itself (goals),
     * just the reference wrapped value.
     * 
     * Vue is aware of changes made to all refs, and when they
     * exist in a template, Vue will understand where to make 
     * that update automatically.
     * 
     * The 'goals' constant below can be referred to on it's own
     * throughout setup(), ie… this.goals is no longer necessary.
     * But you do need to update 'goals' with goals.value
     * ----------------------------------------
     */
    const goals = ref([])
    /** ----------------------------------------
     * computed properties
     ---------------------------------------- */
    const filteredGoals = computed(function() {
      return goals.value.filter(
        (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
      )
    })
    /**----------------------------------------
     * methods (as functions)
     ---------------------------------------- */
    function addGoal(text) {
      const newGoal = {
        id: new Date().toISOString(),
        text: text,
      }
      goals.value.push(newGoal)
    }
    /** ----------------------------------------
     * return everything that you want
     * to be exposed to the template
     ---------------------------------------- */
    return {
      // return could be aliased, ie… userGoals: goals
      filteredGoals: filteredGoals,
      addGoal: addGoal
    }

  }
}
</script>