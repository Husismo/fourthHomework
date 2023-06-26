<template>
  <div id="app">
      <tasksPage></tasksPage>
      <!-- <projectsPage></projectsPage> -->
      <!-- <userPage></userPage> -->
  </div>
</template>

<script>
import tasksPage from './views/tasks-page.vue'
import projectsPage from './views/projects-page.vue';
import userPage from './views/user-page.vue';

export default {
  name: 'App',
  components: {
    tasksPage,
    projectsPage,
    userPage
  }
}
</script>

<style lang="scss">
@import "@/styles/components/reset.scss"
</style>
