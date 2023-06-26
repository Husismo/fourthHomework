<template>
    <div class="user-page">
        <navigation></navigation>
        <userProfile></userProfile>
    </div>
</template>

<script>
import userProfile from '@/components/user-profile.vue'
import navigation from '@/components/navigation'
export default {
    name: "user-page",
    components: {
        userProfile,
        navigation
    }
}
</script>
