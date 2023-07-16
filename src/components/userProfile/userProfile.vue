<template>
    <div class="user__item">
        <div class="user-avatar">
            <img src="@/assets/img/big-user-avatar.png" alt="" class="user-img">
            <Buttons
            class="button-icon-secondary user-avatar-btn-wrapper" 
            :class="`small-button-secondary`"
            :middleIcon="true"
            :BtnIconName="`icon-dots`"
            @click.native="toggleDropDown"
            />
            <dropDown :items="dropDownAvatarItems" class="user-dropDown" v-show="isActive"> </dropDown>
        </div>
        <div class="user-info">
            <div class="user-title">
                <div class="user-title__wrapper">
                    <h2 class="user-fullname">{{user.name}}</h2>
                    <userStatus  :userText="user.status"/>
                </div>  
                <Buttons 
                @click.native="toggleDropDownUser" 
                class="button-icon-secondary" 
                :class="`small-button-secondary`"
                :middleIcon="true"
                :BtnIconName="`icon-dots`"
                />
                <dropDown :items="dropDownItems" class="user-title-dropDown" v-show="Active"> </dropDown>
            </div>
            <div class="user-about">
                <p class="user-about-subtitle">О себе:</p>
                <p class="user-about-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз. Единственное, что от меня осталось, это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись рукописи, наш текст продолжил свой путь. Вскоре ему повстречался коварный составитель рекламных текстов, напоивший его языком и речью и заманивший в свое агенство, которое использовало его снова и снова в своих проектах. И если его не переписали, то живет он там до сих пор. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка р.</p>
            </div>
        </div>
    </div>
</template>

<script>
import icon from "@/components/icon.vue";
import dropDown from '@/components/dropDown/dropDown.vue';
import userStatus from '../userStatus/userStatus.vue';
import Buttons from '../Buttons/Buttons.vue';
export default {
    name: "user-profile",
    components: {
        icon,
        dropDown,
        userStatus,
        Buttons
    },
    methods:{
    toggleDropDown(){
        this.isActive = !this.isActive
    },
    toggleDropDownUser(){
        this.Active = !this.Active
    },
  },
  props:{
    user: {
        name:{
            type: String,
        },
        status: {
            type: String,
        },
        picture: {
            type: String,
        },
        description:{
            type: String,
        },
    }
  },
    data(){
        return{
            isActive: false,
            Active: false,
            dropDownItems: [
                {text: "Редактировать"},
                {text: "Изменить пароль"},
                {text: "Просмотр задач пользователя"},
                {text: "Удалить"},
            ],
            dropDownAvatarItems: [
                {text: "Редактировать"},
                {text: "Удалить"},
            ],            
        }
    }
}
</script>

<style lang="scss" scoped>
.user__item {
    padding: 24px;
    display: flex;
    align-items: center;
}
.user-avatar {
    margin-right: 24px;
    cursor: pointer;
    position: relative;
}
.user-avatar:hover .user-avatar-btn-wrapper{
    display: block;
}
.user-avatar-btn-wrapper{
    display: none;
    position: absolute;
    right: 10px;
    bottom: 10px;
}
.user-avatar-btn{
    width: 24px;
    height: 24px;
}
.user-info {
    display: flex;
    flex-direction: column;
}
.user-title__wrapper{
    display: flex;
    margin-bottom: 24px;
}
.user-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.user-fullname {
    font-size: 24px;
    margin-right: 24px;
}
.user-status {
    color: $bg-secondary;
    padding: 0 8px;
    background-color: $bg-primary-default;
    border-radius: 4px;
}
.user-btn {
    height: 24px;
    width: 24px;
}
.user-about-subtitle {
    color: $font-disabled;
    margin-bottom: 8px;
}
.user-about-text {
    font-size: 14px;
}
.user-dropDown{
    position: absolute;
    bottom: -92px;
    right: 10px;
    background-color: #fff;
    padding: 16px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
.user-title-dropDown{
    position: absolute;
    top: 45px;
    right: 2px;
    background-color: #fff;
    padding: 16px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
.user-title__drop-down-text + .user-title__drop-down-text {
    margin-top: 16px;
}
.user-title__drop-down-text:last-child{
        color: $error-color;
}
.user__drop-down-text + .user__drop-down-text{
    margin-top: 16px;
    color: $error-color;
}
</style>