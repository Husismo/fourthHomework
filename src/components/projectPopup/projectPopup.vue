<template>
    <div class="root">
        <div class="popup__wrapper">
            <div class="popup__header">
                <h2 class="header__title">{{ popupTitle }}</h2>
            </div>
            <div class="popup__form">
                <form action="" id="submit" @submit="submitProject">
                    <p class="project__code">Код <span>*</span></p>
                    <inputText
                    v-model="Body.Code"
                    class="projectCodeInput"
                    />
                    <p class="project__name">Название <span>*</span></p>
                    <inputText
                    v-model="Body.Name"
                    class="projectCodeName"
                    />
                </form>
            </div>
            <div class="popup__buttons">
                <Buttons 
                    :btnText="`Отмена`"
                    :class="`secondary-button`"
                    class="cancel__btn"
                    @click.native="goToBack"
                />
                <Buttons 
                    :btnText="popupBtnText"
                    :class="`primary-button`"
                    type="submit"
                    form="submit"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Buttons from '../Buttons/Buttons.vue'
import inputText from '../inputText/inputText.vue'
export default {
    components:{
        inputText,
        Buttons
    },
    props:{
        popupTitle:{
            type: String
        },
        popupBtnText:{
            type: String
        }
    },
    data(){
        return{
            Body:{
                Name: "",
                Code: ""
            },
        }
    },
    methods:{
        submitProject(event){
            event.preventDefault();
            this.$api.createProject.createProject({
                name: this.Body.Name,
                code: this.Body.Code
            }).then(({data}) => {
                this.goToBack()
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
        },
        goToBack(){
            this.$router.go(0);
        }
    }

}
</script>

<style lang="scss" scoped>
.root{
    display: flex;
    align-content: center;
    justify-content: center;
}
.popup__wrapper{
    position: absolute;
    width: 640px;
    height: 362px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);
}
.popup__header{
    padding: 16px;
    .header__title{
        text-align: left;
    }
}
.popup__form{
    border-top: 1px solid $border-default;
    border-bottom: 1px solid $border-default;
    padding: 24px;
    .project__code, .project__name{
        margin-bottom: 8px;
    }
    .projectCodeInput{
        margin-bottom: 24px;
    }
}
.popup__form span {
    color: $error-color;
}
.popup__buttons{
    padding: 24px 24px 0 0;
    display: flex;
    justify-content: end;
}
.cancel__btn{
    margin-right: 8px;
}
</style>