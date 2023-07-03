<template>
    <div class="user-page">
        <userProfile></userProfile>
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
    }
}
</script>
