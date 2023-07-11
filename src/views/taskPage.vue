<template>
    <div class="task">
        <router-link style="display: inline-block;"
            class="goBack__btn"
            to="/tasks" >
                <Buttons 
                    :class="`secondary-button`" 
                    :btn-text="`Вернуться к списку задач`" 
                    :beforeTextIcon="true"
                    :btn-icon-name="`icon-arrow-left`"
                    />
        </router-link>

        <div class="task__wrapper">
            <div class="task__about__wrapper">
                <div class="task__id task__title">{{ id }}</div>
                <div class="task__name task__title">{{ name }}</div>
                <div class="task__about__info">
                    <taskStatus 
                    :taskText="`В работе`"
                    class="task__status"
                    />
                    <p class="task__date">Создана 17 сен 2022 в 13:55</p>
                    <div class="task__author"> 
                        <img src="../assets/img/user-avatar.png" alt="">
                        {{ author }}
                    </div>
                </div>
                <div class="task__desc">
                    <p>Описание задачи далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.</p>
                </div>
                <div class="task__activity task__title">
                    Активность
                </div>
                <div class="task__activity-info">
                    <div class="task__activity-item">
                        <img src="../assets/img/user-avatar.png" alt="">
                        <p class="task__activivty-author">{{ author }}</p>
                        <p class="task__activity-action">изменил(а) название</p>
                        <p class="task__activity-data">20 дек 2022 в 17:45</p>
                    </div>
                    <div class="task__activity-item">
                        <img src="../assets/img/user-avatar.png" alt="">
                        <p class="task__activivty-author">{{ author }}</p>
                        <p class="task__activity-action">изменил(а) описание</p>
                        <p class="task__activity-data">04 янв в 09:01</p>
                    </div>
                </div>
                <div class="comments">
                    <inputText
                    class="comments__input"
                    :placeHolderText="`Комментировать`"
                    />
                    <Buttons 
                    :class="`small-button-secondary`"
                    :middleIcon="true"
                    :btn-icon-name="`icon-send`"
                    />
                </div>

            </div>
            <div class="task__info">
                <p>чтото</p>
            </div>
        </div>

    </div>
</template>

<script>
import Buttons from '@/components/Buttons/Buttons.vue'
import taskStatus from '@/components/taskStatus/taskStatus.vue'
import inputText from '@/components/inputText/inputText.vue'
export default {
    props:{
        task: Object
    },
    computed:{
        id(){
            return this.$route.params.id
        },
        name(){
            return this.$route.params.name
        },
        author(){
            return this.$route.params.author
        },
    },
    components:{
        Buttons,
        taskStatus,
        inputText
    }
}
</script>

<style lang="scss">
.task{
    margin: 24px;
    
}
.task__wrapper{
    display: flex;
    padding: 24px;
    border: 1px solid $border-default;
    border-radius: 4px;
    margin-top: 24px;
    
}
.task__about__wrapper{
    flex-grow: 2;
    
}
.task__title{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
}
.task__about__info{
    display: flex;
    padding: 10px 0;
}
.task__status{
    margin-right: 16px;
}
.task__author{
    display: flex;
    align-items: center;
    img{
        border-radius: 50%;
        margin-right: 8px;
    }
}
.task__date{
    margin-right: 16px;
}
.task__desc{
    margin: 24px 0;
    font-size: 14px;
    position: relative;
}
.task__desc::before{
    content: '';
    width: 100%;
    left: 0;
    top: -20px;
    border-top: 1px solid $border-default;
    position: absolute;
}
.task__activity-item{
    padding: 8px 16px;
    display: flex;
    align-items: center;
    img{
        border-radius: 50%;
        margin-right: 8px;
    }
    .task__activivty-author{

    }
    .task__activity-action{
        margin-left: 16px;
        color: $font-disabled;
    }
    .task__activity-data{
        margin-left: 16px;
        color: $font-disabled;
    }
}
.task__activity-item + .task__activity-item{
    margin-top: 8px;
}
.comments{
    display: flex;
    align-items: center;
}
.comments__input{
    margin-right: 8px;
}

</style>