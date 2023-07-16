<template>
        <div class="task__item">
            <router-link class="task__item-wrapper" 
            :to="{
                name: 'task', 
                params: {
                    id: task._id, 
                    name: task.name, 
                    author: task.author,
                    status: task.status,
                    description: task.description
                }}" >
                    <div class="task__item-head">
                        <p class="task__item-title">{{ task.name }}</p>
                        <img src="@/assets/img/user-avatar.png" alt="" class="task__item-avatar">
                    </div>
                    <div class="task__item-content">
                        <div class="task__item-about">
                            <p class="task__item-id">{{ task.id }}</p>
                            <p class="task__item-created">{{task.author}} {{ date }}</p>
                            <p class="task__item-status item-status-draft">{{task.status}}</p>
                        </div>
                        <div class="task__item-content-edited">
                            <p v-show="task.authorEdited">{{  task.authorEdited }} изменил(а) {{dateEdited}}</p>
                        </div>
                    </div>
            </router-link>
            <Buttons
            class="task-button task__item-btn" 
            @click.native="toggleDropDown"
            :class="`small-button-secondary`"
            :middleIcon="true"
            :BtnIconName="`icon-dots`"
            > </Buttons>
            <dropDown :items="dropDownList" v-show="isActive" class="task__drop-down-menu"> </dropDown>
        </div>
</template>

<script>
import icon from "@/components/icon.vue";
import dropDown from '@/components/dropDown/dropDown.vue';
import Buttons from "../Buttons/Buttons.vue";
export default {
  name: 'taskItem',
  components: {
    icon,
    dropDown,
    Buttons
  },
  methods: {
    toggleDropDown(){
        this.isActive = !this.isActive
    },
    deleteTask(){
        this.$api.deleteTask.deleteTask(this.task._id)
        .then(({data}) => {
                this.$router.go(0);
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
    },
    normalDate(){
        let date = Date.parse(this.task.dateCreated);
        let today = new Date().getTime();
        let diff = today - date;
        let min = Math.floor(diff / 60000);
        if (min < 60) {
           this.date = min + ' минут назад';
        };
        let hour = Math.floor(diff / 3600000);
        if (hour < 12 && min > 60) {
            this.date = hour + ' часов назад';
        };
        let day = Math.floor(diff / 36000000);
        if (day < 24 && hour > 12) {
            this.date = day + ' дней назад';
        };
    },
    normalDateEdited(){
        let date = Date.parse(this.task.dateEdited);
        let today = new Date().getTime();
        let diff = today - date;
        let min = Math.floor(diff / 60000);
        if (min < 60) {
           this.dateEdited = min + ' минут назад';
        };
        let hour = Math.floor(diff / 3600000);
        if (hour < 12 && min > 60) {
            this.dateEdited = hour + ' часов назад';
        };
        let day = Math.floor(diff / 36000000);
        if (day < 24 && hour > 12) {
            this.dateEdited = day + ' дней назад';
        };
    }
  },
  data(){
    return {
        isActive: false,
        dropDownList:[
            {text: `Редактировать`},
            {text: `Удалить`, click: this.deleteTask}
        ],
        date: '',
        dateEdited: ''
    }
  },
  props: {
    task: {
        name:{
            type: String,
        },
        id: {
            type: String,
        },
        author: {
            type: String,
        },
        authorEdited:{
            type: String
        },
        dateCreated:{
            type: String
        },
        task:{
            type: String
        },
        status:{
            type: String
        },
        description:{
            type: String
        },
        dateEdited:{
            type: String
        }
    },
  },
  mounted(){
    this.normalDate(),
    this.normalDateEdited()
  }
}
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: $border-active;
    }

    .task__item {
    margin: 24px;
    min-width: 1024px;
    border-bottom: 1px solid #1C1C1C;
    padding: 0px 16px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
}
.task__item:hover .task__item-btn{
    display: block;
}
.task__item-wrapper{
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 16px;
    flex-grow: 2;
}
.task__item-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.task__item-title {
    margin-right: 16px;
}
.task__item-avatar {
    border-radius: 50%;
}
.task__item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.task__item-about {
    display: flex;
}
.task__item-id {
    margin-right: 16px;
}
.task__item-created {
    margin-right: 16px;
    color: $font-disabled;
}
.task__item-status {
    color: #fff;
    padding: 0 8px;
    border-radius: 4px;
}
.item-status-draft{
    background-color: $bronze-color;
}
.item-status-completed {
    background-color: $bg-primary-default;
}
.item-status-deleted {
    background-color: $error-color;
}
.item-status-disabled{
    background-color: $font-disabled;
}
.task__item-content-edited {
    color: $font-disabled;
}
.task__item-btn{
    display: none;
    svg{
        height: 24px;
        width: 24px;
    }
}

.task__drop-down-menu{
    background-color: #fff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    right: 15px;
    top: 53px;
    z-index: 1;
}
.task__drop-down-text + .task__drop-down-text{
    margin-top: 16px;
    color: $error-color;
}
.task-button-active{
    background-color: $bg-secondary-active;
    border-color:$border-active;
    display: block;
}
</style>