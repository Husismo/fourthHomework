<template>
    <div class="user-item">
        <img src="@/assets/img/user-avatar.png" class="user-avatar">
        <div class="user-name">{{ user.name }}</div>
    </div>
</template>

<script>
export default {
    name: 'userItem',
    props: {
    user: {
        name:{
            type: String,
        },
        login: {
            type: String,
        },
        picture: {
            type: String,
        },
        description:{
            type: String
        },
        status:{
            type: String
        },
        _id:{
            type: String
        },  
    }
  }
}
</script>

<style lang="scss">
.user-item{
    margin: 24px;
    min-width: 1024px;
    border-bottom: 1px solid $border-active;
    padding: 18px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
}
.user-avatar{
    border-radius: 50%;
    margin-right: 24px;
}
</style>