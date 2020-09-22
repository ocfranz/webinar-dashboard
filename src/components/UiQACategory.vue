<template>
  <div class="question-category">
    <BaseIcon :iconName="'hash'" :size="'20px'" />
    <span class="category-name">{{name}}</span>
  </div>
</template>

<script>
import BaseIcon from "./icons/UiBaseIcon.vue";
export default {
  components: { BaseIcon },
  props : { name}

};
</script>

<style lang="scss" scoped>
.question-category{
  display: flex;
  padding: 8px 0px;
  cursor: pointer;
  .ui-icon{
    margin-right: 10px;
  }
  .category-name{
    text-transform: capitalize;
  }
}

</style>