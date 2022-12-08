<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "TeamView",
  data() {
    return {
      teams: [
        {
          name: "FC Lagos",
          location: "Lagos"
        },
        {
          name: "1. FC Nürnberg",
          location: "Nuremberg"
        },
        {
          name: "St. Pauli",
          location: "Hamburg"
        }
      ]
    }
  },
})
</script>

<template>
  <table className="table is-striped is-narrow">
    <thead>
    <tr>
      <th>Name</th>
      <th>Location</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="team in teams">
      <td>{{ team.name }}</td>
      <td>{{ team.location }}</td>
    </tr>
    </tbody>

  </table>

</template>


<style scoped>
</style>