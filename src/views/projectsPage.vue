<template>
    <div class="projects-page">
        <projectItem
        :project="item"
        v-for="item in projects" />
        <notCreated v-if="projects.length == 0" :notCreatedText="`Не создан ни один проект`"/>
    </div>
</template>

<script>
import notCreated from "@/components/notCreated/notCreated";
import navigation from "@/components/navigation/navigation.vue";
import projectItem from '@/components/projectItem/projectItem';
export default {
    name: "projects-page",
    components:{
        navigation,
        projectItem,
        notCreated
    },
    data(){
        return{
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

<style>

</style>