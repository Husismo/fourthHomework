<template>
    <p class="userStatus">
        {{ userText }}
    </p>
</template>

<script>
export default {
    name: `userStatus`,
    data(){
        return{
        }
    },
    props:{
        userText:{
            type: String,
        }
    },
}
</script>

<style lang="scss" scoped>
    .userStatus{
        padding: 0 8px;
        color: #fff;
        background-color: $bg-primary-default;
        border-radius: 4px;
    }
</style>