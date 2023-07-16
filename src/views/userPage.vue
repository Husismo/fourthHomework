<template>
    <div class="user-page">
        <userProfile 
        :user="user"
        />
    </div>
</template>

<script>
import userProfile from '@/components/userProfile/userProfile.vue'
import navigation from '@/components/navigation/navigation'
export default {
    name: "user-page",
    components: {
        userProfile,
        navigation
    },
    data(){
        return{
            user: {}
        }
    },
    methods:{
        sendRequest(){
        this.$api.getCurrentUser.getCurrentUser({
            }).then(({data}) => {
                console.log(data)
                this.user = data
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
    }
    },
    mounted(){
        this.sendRequest()
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
