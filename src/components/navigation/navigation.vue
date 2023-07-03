<template>
    <nav class="nav__wrapper">
    <ul class="nav__list">
        <li class="nav__button-wrapper">
            <router-link to="/projects">
                <primaryButton  
                class="nav__button" 
                :class="`primary-button`" 
                :btnText="`Проекты`"/>    
            </router-link>
        </li>
        <li class="nav__button-wrapper">
            <router-link to="/tasks">
                <primaryButton 
                class="nav__button" 
                :class="`primary-button`" 
                :btnText="`Задачи`"/>
            </router-link>
            
        </li>
        <li class="nav__button-wrapper">
            <router-link to="/users">
                <primaryButton 
                class="nav__button" 
                :class="`primary-button`" 
                :btnText="`Пользователи`"/>
            </router-link>    
        </li>
    </ul>
    <div :class="{ navActive: isOpen}" class="nav__user-buttons user__buton" @click="isOpen= !isOpen">
        <img src="@/assets/img/user-avatar.png" alt="" class="nav__user-avatar user__buton">
        <div class="nav__arrow user__buton">
            <svg class="user__buton">
                <dropDownBtn></dropDownBtn>
            </svg>
        </div>
    </div>
    <dropDown v-show="isOpen" class="nav__user-dropdown" :items="dropDownList" ></dropDown>
    </nav>
</template>

<script>
import primaryButton from "@/components/primaryButton/primaryButton.vue";
import dropDownBtn from "@/components/DropDownBtn/dropDownBtn.vue";
import dropDown from '@/components/dropDown/dropDown.vue';

export default {
    components: {
        primaryButton,
        dropDownBtn,
        dropDown
    },
    name: 'navigation',
    data(){
        return {
            isOpen: false,
            dropDownList: [
            { text: "Профиль"},
            { text: "Выход"},
            ],
        }
    }
}
</script>

<style scoped lang="scss">
    @import "@/components/navigation/nav.scss";

    .router-link-exact-active button{
      background-color: $bg-secondary;
      color: $border-active;
    }
</style>
