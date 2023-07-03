<template>
    <input 
            @keypress.enter.prevent
            :value="value"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeHolderText"
            class="inputText"
            type="text">
</template>

<script>
export default {
    name: `inputText`,
    props: {
        placeHolderText:{
            type: String,
            default: `Введите текст...`
        },
        value: ''
    },
    data(){
        return{
        }
    }
}
</script>

<style lang="scss">
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
</style>