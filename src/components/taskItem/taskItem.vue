<template>
        <div class="task__item">
            <router-link class="task__item-wrapper" :to="{name: 'task', params: {id: task.id, name: task.name, author: task.author}}" >
                    <div class="task__item-head">
                        <p class="task__item-title">{{ task.name }}</p>
                        <img src="@/assets/img/user-avatar.png" alt="" class="task__item-avatar">
                    </div>
                    <div class="task__item-content">
                        <div class="task__item-about">
                            <p class="task__item-id">{{ task.id }}</p>
                            <p class="task__item-created">{{task.author}} создал 1 час назад</p>
                            <p class="task__item-status item-status-draft">Черновик</p>
                        </div>
                        <div class="task__item-content-edited">
                            <p>Баранов В.В. изменил(а) 1 минуту назад</p>
                        </div>
                    </div>
            </router-link>
            <Buttons
            class="task-button task__item-btn" 
            @click.native="toggleDropDown"
            :class="`small-button-secondary`"
            :middleIcon="true"
            :BtnIconName="`icon-dots`"
            > </Buttons>
            <dropDown :items="dropDownList" v-show="isActive" class="task__drop-down-menu"> </dropDown>
        </div>
</template>

<script>
import icon from "@/components/icon.vue";
import dropDown from '@/components/dropDown/dropDown.vue';
import Buttons from "../Buttons/Buttons.vue";
export default {
  name: 'taskItem',
  components: {
    icon,
    dropDown,
    Buttons
  },
  methods: {
    toggleDropDown(){
        this.isActive = !this.isActive
    }
  },
  data(){
    return {
        isActive: false,
        dropDownList:[
            {text: `Редактировать`},
            {text: `Удалить`}
        ]
    }
  },
  props: {
    task: {
        name:{
            type: String,
        },
        id: {
            type: String,
        },
        author: {
            type: String,
        }
    }
  }
}
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: $border-active;
    }

    .task__item {
    margin: 24px;
    min-width: 1024px;
    border-bottom: 1px solid #1C1C1C;
    padding: 0px 16px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
}
.task__item:hover .task__item-btn{
    display: block;
}
.task__item-wrapper{
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 16px;
    flex-grow: 2;
}
.task__item-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.task__item-title {
    margin-right: 16px;
}
.task__item-avatar {
    border-radius: 50%;
}
.task__item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.task__item-about {
    display: flex;
}
.task__item-id {
    margin-right: 16px;
}
.task__item-created {
    margin-right: 16px;
    color: $font-disabled;
}
.task__item-status {
    color: #fff;
    padding: 0 8px;
    border-radius: 4px;
}
.item-status-draft{
    background-color: $bronze-color;
}
.item-status-completed {
    background-color: $bg-primary-default;
}
.item-status-deleted {
    background-color: $error-color;
}
.item-status-disabled{
    background-color: $font-disabled;
}
.task__item-content-edited {
    color: $font-disabled;
}
.task__item-btn{
    display: none;
    svg{
        height: 24px;
        width: 24px;
    }
}

.task__drop-down-menu{
    background-color: #fff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    right: 15px;
    top: 53px;
    z-index: 1;
}
.task__drop-down-text + .task__drop-down-text{
    margin-top: 16px;
    color: $error-color;
}
.task-button-active{
    background-color: $bg-secondary-active;
    border-color:$border-active;
    display: block;
}
</style>