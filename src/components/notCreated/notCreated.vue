<template>
    <div class="project__wrapper">
        <div class="project__container">
            <p class="project__title">{{ notCreatedText }}</p>
            <primaryButton 
              :class="`primary-button`" 
              :btnText="`Добавить`">
            </primaryButton>
        </div>
    </div>
</template>

<script>
import primaryButton from '@/components/primaryButton/primaryButton.vue';
export default {
  components:{
    primaryButton,
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