<template>
        <div class="project__item">
            <div class="project__item-wrapper">
                <p class="project__item-title">{{ project.projectName }}</p>
                <div class="project__item-content">
                    <div class="project__item-about">
                        <p class="project__item-id">{{ project.projectId }}</p>
                        <p class="project__item-created">{{project.projectAuthor}} {{project.dataCreated}}</p>
                    </div>
                    <div class="project__item-content-edited">
                        <p>{{project.projectAuthorEditer}}</p>
                    </div>
                </div>
            </div>
            <primaryButton
            class="project-button project__item-btn"
            :class="`small-button-secondary`"
            :icon="true"
            :BtnIconName="`icon-dots`"
            @click.native="toggleDropDown"
            >
                
            </primaryButton>
            <dropDown :items="dropDownList" v-show="isActive" class="project__drop-down-menu"> </dropDown>
        </div>
</template>

<script>
import icon from "@/components/icon.vue";
import dropDown from '@/components/dropDown/dropDown.vue';
import primaryButton from "../primaryButton/primaryButton.vue";
export default {
  name: 'projectItem',
  components: {
            icon,
            dropDown,
            primaryButton
        },
  props: {
    project: {
        projectName:{
            type: String,
        },
        projectId: {
            type: String,
        },
        projectAuthor: {
            type: String,
        },
        dataCreated:{
            type: String,
        },
        projectAuthorEditer:{
            type: String,
        }
    }
  },
  methods:{
    toggleDropDown(){
        this.isActive = !this.isActive
    }
  },
  data(){
    return {
        isActive: false,
        dropDownList: [
            {text: `Редактировать`},
            {text: `Удалить`}
        ]
    }
  }
}
</script>

<style lang="scss">
@import "@/components/projectItem/projectItem.scss";
</style>