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
            <primaryButton
            class="task-button task__item-btn" 
            @click.native="toggleDropDown"
            :class="`small-button-secondary`"
            :icon="true"
            :BtnIconName="`icon-dots`"
            > </primaryButton>
            <dropDown :items="dropDownList" v-show="isActive" class="task__drop-down-menu"> </dropDown>
        </div>
</template>

<script>
import icon from "@/components/icon.vue";
import dropDown from '@/components/dropDown/dropDown.vue';
import primaryButton from "../primaryButton/primaryButton.vue";
export default {
  name: 'taskItem',
  components: {
    icon,
    dropDown,
    primaryButton
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
    @import "@/components/taskItem/taskItem.scss";
    a{
        text-decoration: none;
        color: $border-active;
    }
</style>