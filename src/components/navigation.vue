<template>
    <nav class="nav__wrapper">
    <ul class="nav__list">
        <li class="nav__button-wrapper">
            <primaryButton v-text="`Проекты`"></primaryButton>
        </li>
        <li class="nav__button-wrapper">
            <primaryButton v-text="`Задачи`"></primaryButton>
        </li>
        <li class="nav__button-wrapper">
            <primaryButton v-text="`Пользователи`"></primaryButton>
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
    <div v-show="isOpen" class="nav__user-dropdown">
        <p class="nav__user-text">Профиль</p>
        <p class="nav__user-text">Выход</p>
    </div>
    </nav>
</template>

<script>
import primaryButton from "@/components/primary-button.vue";
import dropDownBtn from "@/components/drop-down-btn.vue";
export default {
    components: {
        primaryButton,
        dropDownBtn
    },
    computed: {
        // isOpen(){
        //     return false
        // }
    },
    methods: {
    //     show: function() {
    //     this.isOpen
    // }
    },
    name: 'navigation',
    data(){
        return {
            isOpen: false
        }
    }
}
</script>

<style scoped lang="scss">
    @import "@/styles/components/nav.scss";
</style>
