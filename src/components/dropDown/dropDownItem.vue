<template>
    <li :class="['item']"> 
    <slot></slot>
    </li>
</template>
<script>
export default {
  name: "DropDownItem",
  props: {
    text: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.item{
    list-style: none;
    padding: 0 16px;
    height: 35px;
    cursor: pointer;
    &:hover {
        background-color: $bg-secondary-hover;
    }

    &:active {
        background-color: $bg-secondary-active;
    }
}
</style>