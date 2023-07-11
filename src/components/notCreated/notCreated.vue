<template>
    <div class="project__wrapper">
        <div class="project__container">
            <p class="project__title">{{ notCreatedText }}</p>
            <router-link to="/createtask">
              <Buttons 
                :class="`primary-button`" 
                :btnText="`Добавить`">
              </Buttons>
            </router-link>
        </div>
    </div>
</template>

<script>
import Buttons from '@/components/Buttons/Buttons.vue';
export default {
  components:{
    Buttons,
  },
  props:{
    notCreatedText:{
      type: String
    }
  },
  name: 'notCreated',
  data(){
    return {
    }
  }
}
</script>

<style>
@import "@/components/notCreated/notCreated.scss";
</style>