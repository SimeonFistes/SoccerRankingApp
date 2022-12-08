<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navigation"
})
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand"><i class="fa fa-futbol-o"></i></div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{ name: 'about' }" class="navbar-item">About</router-link>
        <router-link :to="{ name: 'ranking' }" class="navbar-item">Ranking</router-link>
        <router-link :to="{ name: 'game-days' }" class="navbar-item">Game Days</router-link>
        <router-link :to="{ name: 'results' }" class="navbar-item">Results</router-link>
        <router-link :to="{ name: 'teams' }" class="navbar-item">Teams</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>