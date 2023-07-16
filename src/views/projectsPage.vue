<template>
    <div class="projects-page">
            <projectPopup
            :popupTitle="`Создание проекта`"
            :popupBtnText="`Создать проект`"
            v-show="isCreatePopupActive"
            />
            <projectPopup
            :popupTitle="`Редактирование проекта`"
            :popupBtnText="`Сохранить`"
            v-show="isEditPopupActive"
            />
            <div class="search__wrapper" v-show="!isCreatePopupActive && !isEditPopupActive">
                <inputText 
                v-show="!isCreatePopupActive && !isEditPopupActive"
                class="projectsPages__searh"
                :iconClear="true"
                :iconSearch="true"
                @click="projectSearch"
                v-model="searchData"
                />
                <Buttons 
                v-show="!isCreatePopupActive && !isEditPopupActive"
                class="createProjectBtn"
                :class="`secondary-button`"
                :btnText="`Добавить`"
                @click.native="isCreatePopupActive = !isCreatePopupActive"
                />
            </div>
            <projectItem
            v-show="!isCreatePopupActive && !isEditPopupActive"
            :project="item"
            v-for="item in allProjects" 
            />
            <notCreated 
            v-if="isEmptyArray" 
            :notCreatedText="`Не создан ни один проект`"/>
            <h1 v-show="!isCreatePopupActive && !isEditPopupActive" v-if="isEmptySearch">Ни один проект не соответствует результатам поиска</h1>
    </div>
</template>

<script>
import notCreated from "@/components/notCreated/notCreated";
import navigation from "@/components/navigation/navigation.vue";
import projectItem from '@/components/projectItem/projectItem';
import inputText from "@/components/inputText/inputText.vue";
import Buttons from "@/components/Buttons/Buttons.vue";
import projectPopup from '@/components/projectPopup/projectPopup.vue';
export default {
    name: "projects-page",
    components:{
        navigation,
        projectItem,
        notCreated,
        inputText,
        Buttons,
        projectPopup
    },
    data(){
        return{
            allProjects: [],
            searchData: '',
            isEmptyArray: false,
            isEmptySearch: false,
            isCreatePopupActive: false,
            isEditPopupActive: false,
        }
    },
    methods:{
        getAllProjects(){
            this.$api.getAllProjects.getAllProjects({
                limit: 9999,
            }).then(({data}) => {
                console.log(data.projects)
                if(data.projects.length == 0){
                    this.isEmptyArray = true   
                }else {
                    this.allProjects = data.projects;
                    this.isEmptyArray = false
                }
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
        },
        projectSearch(){
            this.$api.getAllProjects.getAllProjects({
                limit: 9999,
                filter:{
                    name: this.searchData
                }
            }).then(({data}) => {
                console.log(data.projects)
                if (data.projects.length == 0){
                    this.isEmptySearch = true
                    this.allProjects = data.projects;
                }else{
                    this.allProjects = data.projects;
                    this.isEmptySearch = false

                }
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
        }
        
    },
    mounted(){
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

<style>
.search__wrapper{
    display: flex;
    align-items: center;
}
.projectsPages__searh input{
    margin: 24px;
    width: 60%;
}
.createProjectBtn{
    margin-right: 24px;
}
</style>