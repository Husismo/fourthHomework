<template>
    <div class="task-page">
        <notCreated v-if="tasks.length == 0"></notCreated>
        <div class="task__item" v-for="task of tasks">
            <div class="task__item-wrapper">
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
            </div>
            <button class="task__item-btn button-icon-secondary task-button" @click="isActive = !isActive">
                <svg class="task-button">
                    <icon></icon>
                </svg>
            </button>
            <div class="task__drop-down-menu" v-show="isActive">
                <p class="task__drop-down-text">Редактировать</p>
                <p class="task__drop-down-text">Удалить</p>
            </div>
        </div>
    </div>
</template>

<script>
import notCreated from './not-created.vue';
import icon from "@/components/icon.vue";
export default {
  name: 'taskItem',
  components: {
    notCreated,
    icon
  },
  data(){
    return {
        isActive: false,
        tasks: [
        {
                author: `Денис`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                name: `Крутое имя задачи`,
                id: `123`,
                status: `DRAFT`,
            },
            {
                author: `Денис`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                name: `Крутое имя задачи`,
                id: `123`,
                status: `DRAFT`,
            },
            {
                author: `Денис`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                name: `Крутое имя задачи`,
                id: `123`,
                status: `DRAFT`,
            },
            {
                author: `Денис`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                name: `Крутое имя задачи`,
                id: `123`,
                status: `DRAFT`,
            },
            {
                author: `Денис`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                name: `Крутое имя задачи`,
                id: `123`,
                status: `DRAFT`,
            },
        ]
    }
  }
}
</script>

<style lang="scss">
    @import "@/styles/components/task-item.scss";
</style>