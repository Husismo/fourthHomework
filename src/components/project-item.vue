<template>
    <div class="projects">
        <notCreated v-if="projects.length == 0"></notCreated>
        <div class="project__item" v-for="project in projects">
            <div class="project__item-wrapper">
                <p class="project__item-title">{{ project.projectName }}</p>
                <div class="project__item-content">
                    <div class="project__item-about">
                        <p class="project__item-id">{{ project.projectId }}</p>
                        <p class="project__item-created">{{project.projectAuthor}}, {{project.dataCreated}}</p>
                    </div>
                    <div class="project__item-content-edited">
                        <p>{{project.projectAuthorEditer}}</p>
                    </div>
                </div>
            </div>
            <button class="project__item-btn button-icon-secondary project-button" @click="isActive = !isActive">
                <svg class="project-button">
                    <icon></icon>
                </svg>
            </button>
            <div class="project__drop-down-menu" v-show="isActive" >
                <p class="project__drop-down-text">Редактировать</p>
                <p class="project__drop-down-text">Удалить</p>
            </div>
        </div>
        
    </div>
</template>

<script>
import notCreated from './not-created.vue';
import icon from "@/components/icon.vue";
export default {
  name: 'projectItem',
  components: {
            notCreated,
            icon
        },
  
  data(){
    return {
        isActive: false,
        projects: [
            {
                projectName: "Задача №1",
                projectId: "12",
                projectAuthor: "Иванов И.И.",
                projectAuthorEditer: null,
                dataCreated: `12.05.2023`,
            },
            {
                projectName: "Задача №2",
                projectId: "122355",
                projectAuthor: "Ктото А.И.",
                projectAuthorEditer: null,
                dataCreated: `12.01.2022`,
            },
            {
                projectName: "Задача №3",
                projectId: "154651",
                projectAuthor: "Иванова Ф.И.",
                projectAuthorEditer: null,
                dataCreated: `12.06.2022`,
            },
            {
                projectName: "Задача №4",
                projectId: "651623",
                projectAuthor: "Петрова И.И.",
                projectAuthorEditer: null,
                dataCreated: `23.06.2023`,
            },
            {
                projectName: "Задача №5",
                projectId: "5635654",
                projectAuthor: "Байкалов П.И.",
                projectAuthorEditer: null,
                dataCreated: `18.06.2023`,
            }
        ]
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/components/project-item.scss";
</style>