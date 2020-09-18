<template>
  <button role="button" class="nav-item">
    <BaseIcon :iconName="iconName" />
  </button>
</template>

<script>
import BaseIcon from "../components/icons/UiBaseIcon.vue";
export default {
  name: "NavItem",
  props: {
    iconName: { type: String }
  },
  components: { BaseIcon }
};
</script>

<style lang="scss" scoped>
.nav-item {
  padding: 10px 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &:focus {
    box-shadow: none;
    outline: none;
  }
}
</style>