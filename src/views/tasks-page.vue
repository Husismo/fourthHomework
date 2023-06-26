<template>
    <div class="taskpage">
        <navigation></navigation>
        <taskItem></taskItem>
    </div>
</template>

<script>
import navigation from "@/components/navigation.vue";
import taskItem from '@/components/task-item.vue';

export default {
    name: "tasks-page",
    components: { 
        taskItem,
        navigation 
    },
}
</script>

<style>

</style>