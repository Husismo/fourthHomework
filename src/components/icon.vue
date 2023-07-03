<template>
    <use class="icon" v-bind:xlink:href="`#`+ iconName" />
</template>

<script>
export default {
    props:{
        iconName: {
            type: String,
        }
    },
    name: `icon`,
    data(){
        return{
        }
    }
}
</script>

<style lang="scss">
@import "@/styles/components/icon.scss";
</style>
