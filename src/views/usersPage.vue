<template>
    <div class="users">
        <userItem></userItem>
        <userItem></userItem>
        <userItem></userItem>
    </div>
</template>

<script>
import userItem from '@/components/userItem/userItem.vue'
export default {
    components:{
        userItem,
    },

    beforeRouteEnter(to, from, next) {
        let isAuth = localStorage.getItem("login");
        if (isAuth === "false") {
            next("/login");
        } else {
            next();
        }
    }
}
</script>

<style lang="scss">

</style>