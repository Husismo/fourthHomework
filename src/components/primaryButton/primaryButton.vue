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
        class="button-icon" 
        v-if="icon == true"
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
        icon:{
            type: Boolean,
            default: false
        },
        beforeTextIcon:{
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
    @import "@/components/primaryButton/primaryButton.scss";
</style>