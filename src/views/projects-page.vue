<template>
    <div class="projects-page">
        <navigation></navigation>
        <projectItem></projectItem>
    </div>
</template>

<script>
import navigation from "@/components/navigation";
import projectItem from '@/components/project-item';
export default {
    name: "projects-page",
    components:{
        navigation,
        projectItem,
    }
}
</script>

<style>

</style>