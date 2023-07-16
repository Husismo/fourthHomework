<template>
        <div class="project__item">
            <div class="project__item-wrapper">
                <p class="project__item-title">{{ project.name }}</p>
                <div class="project__item-content">
                    <div class="project__item-about">
                        <p class="project__item-id">{{ project._id }}</p>
                        <p class="project__item-created">{{project.author}} создал(а) {{date}}</p>
                    </div>
                    <div class="project__item-content-edited">
                        <p>{{project.authorEdited}}</p>
                    </div>
                </div>
            </div>
            <Buttons
            class="project-button project__item-btn"
            :class="`small-button-secondary`"
            :middleIcon="true"
            :BtnIconName="`icon-dots`"
            @click.native="toggleDropDown"
            >
                
            </Buttons>
            <dropDown :items="dropDownList" v-show="isActive" class="project__drop-down-menu"> </dropDown>
        </div>
</template>

<script>
import icon from "@/components/icon.vue";
import dropDown from '@/components/dropDown/dropDown.vue';
import Buttons from "../Buttons/Buttons.vue";
export default {
  name: 'projectItem',
  components: {
            icon,
            dropDown,
            Buttons
        },
  props: {
    project: {
        name:{
            type: String,
        },
        _id: {
            type: String,
        },
        author: {
            type: String,
        },
        dateCreated:{
            type: String,
        },
        authorEdited:{
            type: String,
        },
    },
    dateCreated:{
        type: String
    },
    isEditPopupActive:{
            type: Boolean,
            default: false
        }
  },
  methods:{
    normalDate(){
        
    },
    toggleDropDown(){
        this.isActive = !this.isActive
    },
    deleteProject(){
        this.$api.deleteProject.deleteProject(this.project._id)
        .then(({data}) => {
                this.$router.go(0);
			})
			.catch(e => {
				console.log(e)
                this.error = true
			})
    },
    editProject(){
        this.isEditPopupActive = !this.isEditPopupActive
    },
  },
  data(){
    return {
        isActive: false,
        dropDownList: [
            {text: `Редактировать`, click: this.editProject},
            {text: `Удалить`, click: this.deleteProject}
        ],
        date: ''
    }
  },
  mounted(){
    let date = Date.parse(this.project.dateCreated);
    let today = new Date().getTime();
    let diff = today - date;
        let min = Math.floor(diff / 60000);
        if (min < 60) {
            this.date = min + ' минут назад';
        };
        let hour = Math.floor(diff / 3600000);
        if (hour < 12) {
            this.date = hour + ' часов назад';
        };
        let day = Math.floor(diff / 36000000);
        if (day < 24 && hour > 12) {
            this.date = day + ' дней назад';
        };
  }
}
</script>

<style lang="scss" scoped>
@import "@/components/projectItem/projectItem.scss";
</style>