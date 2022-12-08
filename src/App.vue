<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation/Navigation.vue';
export default defineComponent({
  components: {Navigation}
})
</script>

<template>
  <header class="ml-4">
    <h1 class="title is-1">Soccer ranking</h1>
    <Navigation></Navigation>
  </header>
  <main class="ml-4">
    <router-view></router-view>
  </main>
</template>

<style scoped>
</style>