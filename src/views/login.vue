<template>
    <div class="login">
        <div class="login__wrapper">
            <p class="login__title">Вход</p>
            <form id="loginForm" @submit="postLogin">
                <p>Логин <span>*</span></p>
                <input class="login__input" type="text"
                @keypress.enter.prevent
                v-model="loginData.login"
                >
                <p>Пароль <span>*</span></p>
                <input type="password"
                @keypress.enter.prevent
                v-model="loginData.password"
                >
            </form>
            <div class="button__wrapper">
                <Buttons
                :class="`primary-button`"
                :btnText="`Войти`"
                form="loginForm"
                type="submit"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Buttons from '@/components/Buttons/Buttons.vue';
import inputText from '@/components/inputText/inputText.vue';
export default {
    components:{
        Buttons,
        inputText
    },
    methods:{
        postLogin(event){
            event.preventDefault();
            console.log(this.loginData);
        }
    },
    data(){
        return{
            loginData:{
                login: "",
                password: ""
            }
        }
    }
}
</script>

<style lang="scss">
.login{
    margin-top: 10%;
    flex-grow: 1;
    display: flex;
    align-content: center;
    justify-content: center;
}
.login__wrapper{
    max-width: 300px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex-grow: 1;
    max-height: 410px;
    border-radius: 4px;
    border-top: 1px solid rgba(0, 0, 0, 0.10);
}
.login__title{
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 16px;
}
#loginForm{
    border-top: 1px solid $border-default;
    border-bottom: 1px solid $border-default;
    padding: 24px 24px 48px 24px;
    p{
        margin-bottom: 8px;
        span{
            color: $error-color;
        }
    }
    input{
        padding: 10px 12px;
        font-weight: 400;
        font-size: 14px;
        font-family: "Open Sans";
        border: 1px solid $border-default;
        border-radius: 4px;
        transition: .3s;
        outline: none;
        width: 226px;
    }
    input:focus{
        border-color: $border-active;
    }
    input:hover{
    border-color: $border-hover;
}
.login__input{
    margin-bottom: 36px;
}
}
.button__wrapper{
    display: flex;
    align-items: end;
    justify-content: end;
    padding: 24px 24px 24px 0;
}
.unlogin-btn, .login-btn{
    margin-left: 20px;
}
</style>