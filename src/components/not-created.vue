<template>
    <div class="project__wrapper">
        <div class="project__container">
            <p class="project__title">Не создан ни один проект</p>
            <button class="project__button primary-button">Добавить</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'notCreated',
  data(){
    return {
    }
  }
}
</script>

<style>
@import "@/styles/components/not-created.scss";
</style>