<template>
    <div class="login">
        <button @click="login" class="login-btn" >Залогиниться</button>
        <button @click="unlogin" class="unlogin-btn"> Разлогиниться</button>
        
    </div>
</template>

<script>
import primaryButton from '@/components/primaryButton/primaryButton.vue';
export default {
    components:{
        primaryButton
    },
    methods:{
        login(){
            localStorage.setItem('login', true)
        },
        unlogin(){
            localStorage.setItem('login', false)
        }
    },
    data(){
        return{
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
.unlogin-btn, .login-btn{
    margin-left: 20px;
}
</style>