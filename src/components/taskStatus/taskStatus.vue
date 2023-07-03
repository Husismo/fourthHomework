<template>
    <div class="status">
        <p class="taskStatus">
            {{ taskText }}
        </p>
    </div>
</template>

<script>
export default {
    name: `taskStatus`,
    data(){
        return{
        }
    },
    props:{
        taskText:{
            type: String,
        }
    },
}
</script>

<style lang="scss" scoped>
    .taskStatus{
        padding: 0 8px;
        color: #fff;
        background-color: $bronze-color;
        border-radius: 4px;
    }
</style>