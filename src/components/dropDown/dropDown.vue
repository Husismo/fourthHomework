<template>
    <ul class="dropDown">
        <DropDownItem
            @click="onClick(item)"
            v-for="(item, index) in items"
            :key="item.text"
        >
            {{ item.text }}
        </DropDownItem>
    </ul>
</template>

<script>
import DropDownItem from "@/components/dropDown/dropDownItem";
export default {
    name: "dropDown",
    components:{
        DropDownItem
    },
    props:{
        items:{
            type: Array,
        },
    },
    methods:{
        onClick(item) {
        item.click();
    },
    }
}
</script>

<style lang="scss" scoped>
.dropDown{
    padding: 8px 0px;
    background-color: $bg-secondary;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}
</style>