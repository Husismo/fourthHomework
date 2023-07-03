<template>
    <textarea 
        class="textArea" 
        :placeholder="areaPlaceHolder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        > </textarea>
</template>

<script>
export default {
    name: `customTextArea`,
    props:{
        areaPlaceHolder:{
            type: String,
            default:`Введите значение...`
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
.textArea{
    padding: 12px 10px;
    font-size: 14px;
    border: 1px solid $border-default;
    border-radius: 4px;
    transition: .3s;
    outline: none;
    font-family: "Open Sans";
    resize: none;
    width: 544px;
    height: 120px;
}
.textArea::placeholder{
    color: $font-placeHolder;
    font-family: "Open Sans";
}
.textArea:hover{
    border-color: $border-hover;
}
.textArea:focus{
    border-color: $border-active;
}
</style>