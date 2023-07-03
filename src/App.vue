<template>
  <div id="app">
      <navigation />
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/navigation/navigation.vue';
export default{
      components:{
        navigation
      }
}
</script>

<style lang="scss">
@import "@/styles/components/reset.scss";


</style>
