<template>
  <div id="app">
      <navigation 
      v-show="auth == true"
      />
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/navigation/navigation.vue';
export default{
      components:{
        navigation
      },
      data(){
        return {
          auth: JSON.parse(localStorage.getItem('auth')),
        }
      }
}
</script>

<style lang="scss">
@import "@/styles/components/reset.scss";


</style>
