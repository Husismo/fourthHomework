<template>
    <div class="users">
        <userItem
            :user="user"
            v-for="user in allUsers"
            :key="user.name"
        />
    </div>
</template>

<script>
import userItem from '@/components/userItem/userItem.vue'
export default {
    name: 'userPage',
    components:{
        userItem,
    },
    methods:{
        getAllUsers(){
            this.$api.getAllUsers.getAllUsers({
                limit: 9999,
            }).then(({data}) => {
                this.allUsers = data.users
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
        }
    },
    mounted(){
        this.getAllUsers()
    },
    data(){
        return{
            allUsers: []
        }
    },
    beforeRouteEnter(to, from, next) {
        let auth = localStorage.getItem("auth");
        if (auth === "false") {
            next("/login");
        } else {
            next();
        }
    }
}
</script>

<style lang="scss">

</style>