<template>
    <div class="select">
        <p
            class="title"
            @click="areOptionsVisible = !areOptionsVisible"
            >{{ selected }}</p>
        <div class="options"
        v-if="areOptionsVisible"
        >
            <p
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: `inputSelect`,
    props:{
        options:{
            type: Array,
            default: [],
        },
        selected:{
            type: String,
        }
    },
    data(){
        return{
            areOptionsVisible: false
        }
    },
    methods:{
        selectOption(option){
            this.$emit('select', option),
            this.areOptionsVisible = false
        }
    },
}
</script>

<style lang="scss">
    .select{
        position: relative;
        width: 566px;
        cursor: pointer;
    }
    .title{
        border-radius: 4px;
        border: solid 1px $border-default;
        background-color: $bg-secondary;
        padding: 10px 12px;
    }
    .select p {
        margin: 0;
        padding: 8px 16px;  
    }
    .options{
        background-color: $bg-secondary;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 40px;
        right: 0;
        width: 100%;
        z-index: 1;
        
    }
    .options p:hover{
        background-color: $bg-secondary-active;
    }
</style>