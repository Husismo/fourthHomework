<template>
    <div class="taskpage">
        <taskItem 
        :task="item"
        v-for="item in tasks"/>
        <notCreated v-if="tasks.length == 0" :notCreatedText="`Не создан ни одна задача`"/>
    </div>
</template>

<script>
import navigation from "@/components/navigation/navigation.vue";
import taskItem from '@/components/taskItem/taskItem.vue';
import notCreated from "@/components/notCreated/notCreated.vue";

export default {
    name: "tasks-page",
    components: { 
        taskItem,
        navigation,
        notCreated 
    },
    data(){
        return{
            tasks: [
            {
                name: `Первая крутая задача`,
                author: `Денис`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                id: `1`,
                status: `DRAFT`,
            },
            {
                author: `Котов`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                name: `Вторая крутая задача`,
                id: `2`,
                status: `DRAFT`,
            },
            {
                author: `Кто-то Ктоев`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                name: `Третья крутая задача`,
                id: `3`,
                status: `DRAFT`,
            },
            {
                author: `Ктото такой`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                name: `Четвертая крутая задача`,
                id: `4`,
                status: `DRAFT`,
            },
            {
                author: `Денис`,
                authorEdited: null,
                dateCreated: `23.05.2023`,
                dateEdited: null,
                name: `Пятая крутая задача`,
                id: `5`,
                status: `DRAFT`,
            },
        ]
        }
    }
}
</script>

<style>

</style>