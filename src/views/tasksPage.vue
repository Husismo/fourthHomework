<template>
    <div class="taskpage">
        <div class="search__wrapper" v-show="!isCreatePopupActive && !isEditPopupActive">
                <inputText 
                v-show="!isCreatePopupActive && !isEditPopupActive"
                class="projectsPages__searh"
                :iconClear="true"
                :iconSearch="true"
                @click="taskSearch"
                v-model="searchData"
                />
                <router-link to="/createTask">
                    <Buttons 
                    v-show="!isCreatePopupActive && !isEditPopupActive"
                    class="createProjectBtn"
                    :class="`secondary-button`"
                    :btnText="`Добавить`"
                    />
                </router-link>
            </div>
        <taskItem 
        :task="item"
        v-for="item in tasks"/>
        <notCreated v-if="isEmptyArray" 
        :notCreatedText="`Не создан ни одна задача`"/>
        <h1 v-show="!isCreatePopupActive && !isEditPopupActive" v-if="isEmptySearch">Ни один проект не соответствует результатам поиска</h1>
    </div>
</template>

<script>
import navigation from "@/components/navigation/navigation.vue";
import taskItem from '@/components/taskItem/taskItem.vue';
import notCreated from "@/components/notCreated/notCreated.vue";
import inputText from "@/components/inputText/inputText.vue";
import Buttons from "@/components/Buttons/Buttons.vue";


export default {
    name: "tasks-page",
    components: { 
        taskItem,
        navigation,
        notCreated,
        inputText,
        Buttons 
    },
    methods:{
        getAllProjects(){
            this.$api.getAllTasks.getAllTasks({
                limit: 9999,
            }).then(({data}) => {
                console.log(data)
                if(data.tasks.length == 0){
                    this.isEmptyArray = true
                }else {
                    this.tasks = data.tasks
                }
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
        },
        taskSearch(){
            this.$api.getAllTasks.getAllTasks({
                limit: 9999,
                filter:{
                    name: this.searchData
                }
            }).then(({data}) => {
                console.log(data)
                if(data.tasks.length == 0){
                    this.tasks = data.tasks
                    this.isEmptySearch = true
                }else{
                    this.tasks = data.tasks
                    this.isEmptySearch = false
                }
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
        },
        
    },
    mounted(){
        this.getAllProjects()
    },
    data(){
        return{
            tasks: [],
            isCreatePopupActive: false,
            isEditPopupActive: false,
            searchData: '',
            isEmptySearch: false,
            isEmptyArray: false,
        }
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

</style>