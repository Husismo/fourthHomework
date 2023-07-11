<template>
    <button v-bind:class="`[primary-button, secondary-button, small-button-primary, small-button-secondary]`">
        
        <svg 
        class="before-text-button-icon" 
        v-if="beforeTextIcon == true"
        :height="height"
        :width="width">
            <icon :iconName="BtnIconName" />
        </svg>
        
        {{ btnText }}
        
        <svg 
        class="after-text-button-icon" 
        v-if="afterTextIcon == true"
        :height="height"
        :width="width">
            <icon :iconName="BtnIconName" />
        </svg>

        <svg 
        class="middle-button-icon" 
        v-if="middleIcon == true"
        :height="height"
        :width="width">
            <icon :iconName="BtnIconName" />
        </svg>

    </button>
</template>

<script>
import icon from '../icon.vue';
export default{
    name: `primaryButton`,
    components:{
        icon
    },
    props:{
        btnText:{
            type: String
        },
        afterTextIcon:{
            type: Boolean,
            default: false
        },
        beforeTextIcon:{
            type: Boolean,
            default: false
        },
        middleIcon:{
            type: Boolean,
            default: false
        },
        BtnIconName:{
            type: String
        },
        height:{
            type: [Number, String],
            default: 24
        },
        width:{
            type: [Number, String],
            default: 24
        }
    },
    data() {
        return{
        }
    }
}
</script>

<style lang="scss" scoped>

    @mixin rectangular-button{
    padding: 12px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: .3s;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
@mixin sqare-button{
    cursor: pointer;
    border-radius: 4px;
    transition: .3s;
    border: 1px solid transparent;
    width: 42px;
    height: 42px;
    display:flex;
    align-items: center;
    justify-content: center;
}

.primary-button{
    @include rectangular-button;
    background-color: $bg-primary-default;
    color: #fff;
}
.primary-button:hover{
    background-color: $bg-primary-hover;
}
.primary-button:active{
    background-color: $bg-primary-active;
}

.secondary-button{
    @include rectangular-button;
    border-color: $border-default;
    background-color: $bg-secondary;
    color: $border-active;
}
.secondary-button:hover{
    background-color: $bg-secondary-hover;
    border-color: $border-hover;
}
.secondary-button:active{
    background-color: $bg-secondary-active;
    border-color: $border-active;
}

.small-button-primary{
    @include sqare-button;
    background-color: $bg-primary-default;
    color: #fff;
}
.small-button-primary:hover{
    background-color: $bg-primary-hover;
}
.small-button-primary:active{
    background-color: $bg-primary-active;
}

.small-button-secondary{
    @include sqare-button;
    border-color: $border-default;
    background-color: $bg-secondary;
    color: $border-active;
}

.small-button-secondary:hover{
    background-color: $bg-secondary-hover;
    border-color: $border-hover;
}
.small-button-secondary:active{
    background-color: $bg-secondary-active;
    border-color: $border-active;
}
.before-text-button-icon{
    margin-left: -8px;
    margin-right: 8px;
}
.after-text-button-icon{
    margin-left: 8px;
}
</style>