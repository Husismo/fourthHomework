<template>
    <div class="root">
        <input 
            class="inputText"
            @keypress.enter.prevent
            :value="value"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeHolderText"
            type="text"
            >
        <svg
        v-show="iconClear == true"
        @click="clearText" 
        class="icon-clear"
        style="width: 16px; height:16px;">
            <icon 
            :icon-name="`icon-clear`"
            />
        </svg>
        <svg 
        v-show="iconSearch == true"
        class="icon-search"
        @click="$emit('click', $event.target.value)"
        style="width: 24px; height:24px;">
            <icon 
            :icon-name="`icon-search`"
            />
        </svg>
    </div>
</template>

<script>
import icon from '../icon.vue';
export default {
    components:{
        icon
    },
    name: `inputText`,
    props: {
        placeHolderText:{
            type: String,
            default: `Введите текст...`
        },
        iconClear:{
            type: Boolean,
            default: false
        },
        iconSearch:{
            type: Boolean,
            default: false
        },
        value: ''
    },
    methods:{
        clearText(){
            this.value = ''
        },
    },
    data(){
        return{
        }
    }
}
</script>

<style lang="scss">
.root{
    width: 100%;
    position: relative;
}
.inputText{
    padding: 12px 10px;
    font-size: 14px;
    border: 1px solid $border-default;
    border-radius: 4px;
    transition: .3s;
    outline: none;
    font-family: "Open Sans";
    width: 544px;
    
}
.inputText::placeholder{
    color: $font-placeHolder;
    font-family: "Open Sans";
}

.inputText:hover{
    border-color: $border-hover;
}
.inputText:focus{
    border-color: $border-active;
}
.icon-clear, .icon-search{
    position: absolute;
    right: 725px;
    top: 38px;
    cursor: pointer;
    color: $border-default;
}
.icon-search{
    right: 690px;
    top: 34px;
}

</style>