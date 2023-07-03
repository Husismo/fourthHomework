<template>
    <div class="login">
        <p>Статус: {{ login }}</p> 
        <primaryButton
        class="login-btn"
        :class="`primary-button`" 
        :btn-text="`Залогиниться`"
        />
        <primaryButton
        class="unlogin-btn"
        :class="`primary-button`"
        :btn-text="`Разлогиниться`"
        />
    </div>
</template>

<script>
import primaryButton from '@/components/primaryButton/primaryButton.vue';
export default {
    components:{
        primaryButton
    },
    data(){
        return{
            login: true
        }
    }
}
</script>

<style lang="scss">
.login{
    margin-top: 20%;
    margin-left: 40%;
    display: flex;
    align-items: center;
}
</style>