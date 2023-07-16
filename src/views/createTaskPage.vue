<template>
    <div class="createTaskPage">
        <h2 class="taskPage__title">Создание задачи</h2>
        <div class="taskPage__wrapper">
            <form class="taskPage__form" id="createTask" @submit="submitForm">
                <div class="form-name__wrapper">
                    <p class="form-name">Название<span>*</span></p>
                    <inputText 
                    :placeHolderText="`Введите текст...`"
                    v-model="taskData.name"
                    />
                </div>
                <div class="fomr-desc__wrapper">
                    <p class="form-desc">Описание</p>
                    <customTextArea 
                    :areaPlaceHolder="`Введите текст...`"
                    v-model="taskData.desc"
                    />
                </div>
                <div class="form-select-project__wrapper">
                    <p class="form-project">Проект<span>*</span></p>
                    <inputSelect 
                    
                    :options="selectProject" 
                    @select="optionSelectProject" 
                    :selected="taskData.selectedProject"
                    />
                </div>
                <div class="form-select-author__wrapper">
                    <p class="form-author">Исполнитель</p>
                    <inputSelect 
                    :options="selectAuthor" 
                    @select="optionSelectAuthor" 
                    :selected="taskData.selectedAuthor"
                    />
                </div>
            </form>
            <div class="taskPage__buttons-wrapper">
                <router-link to="/tasks" class="cancelBtn">
                    <Buttons 
                    :class="`secondary-button`" 
                    :btnText="`Отмена`"
                    />
                </router-link>

                
                <Buttons 
                :class="`primary-button`" 
                :btnText="`Создать`"
                form="createTask"
                type="submit"
                />
                
            </div>
        </div>
    </div>
</template>

<script>
import Buttons from '@/components/Buttons/Buttons.vue';
import inputText from '@/components/inputText/inputText.vue';
import customTextArea from '@/components/customTextArea/customTextArea.vue';
import inputSelect from '@/components/inputSelect/inputSelect.vue';
export default {
    
    name: `createTaskPage`,
    components:{
        Buttons,
        inputText,
        customTextArea,
        inputSelect
    },
    data(){
        return{
            selectAuthor: [],
            selectProject:[],
            taskData: {
                name: "",
                desc: "",
                selectedProject: "Выберите проект",
                selectedAuthor: "Выберите автора",
                projectId: '',
                executor: ''
            }
        }
    },
    methods: {
        optionSelectAuthor(option){
            this.taskData.selectedAuthor = option.name
            this.taskData.projectId = option._id
        },
        optionSelectProject(option){
            this.taskData.selectedProject = option.name
            this.taskData.executor = option.executor
        },
        submitForm(event){
            console.log(this.taskData)
            event.preventDefault();
            this.$api.createTask.createTask({
                name: this.taskData.name,
                description: this.taskData.desc,
                projectId: this.taskData.projectId,
                // executor: this.taskData.executor
            }).then(({data}) => {
                this.goToBack()
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
        },
        goToBack(){
            this.$router.go(-1);
        },
        getAllUsers(){
            this.$api.getAllUsers.getAllUsers({
                limit: 9999,
            }).then(({data}) => {
                this.selectAuthor = data.users
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
        },
        getAllProjects(){
            this.$api.getAllProjects.getAllProjects({
                limit: 9999,
            }).then(({data}) => {
                this.selectProject = data.projects
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
        },
    },
    mounted(){
        this.getAllUsers(),
        this.getAllProjects()
    },
    beforeRouteEnter(to, from, next) {
        let auth = localStorage.getItem("auth");
        if (auth === "false") {
            next("/login");
        } else {
            next();
        }
    }
}
</script>

<style lang="scss">
.createTaskPage {
    margin: 24px;
    border-radius: 4px;
    border: 1px solid $border-default;
    padding: 24px;
    height: 80vh;
}
.taskPage__title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 90px;
    position: relative;
    text-align: left;
}
.taskPage__title::after{
    content: "";
    border-bottom: 1px solid $border-default;
    position: absolute;
    left: 0;
    width: 100%;
    bottom: -44px;
}
.taskPage__buttons-wrapper::before{
    content: "";
    border-bottom: 1px solid $border-default;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 110px;
}
.taskPage__wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
}
.taskPage__form {
    flex-grow: 2;
    height: 65vh;
}
.form-name{
    margin-right: 50px;
}
.form-desc{
    margin-right: 59px;
}
.form-project{
    margin-right: 67px;
}
.form-author{
    margin-right: 36px;
}
.form-name, .form-desc, .form-project, .form-author {
    color: $font-disabled;
    span{
        color: $error-color;
    }
}
.form-name__wrapper, .fomr-desc__wrapper, .form-select-project__wrapper, .form-select-author__wrapper{
    display: flex;
    margin-top: 24px;
}
.taskPage__buttons-wrapper {
    display: flex;
    align-self: stretch;
    justify-content: flex-end;
    flex-grow: 1;
}
.cancelBtn{
    margin-right: 24px;
}

</style>