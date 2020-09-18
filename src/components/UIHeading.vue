<template>
  <span class="heading">{{children}}</span>
</template>

<script>
export default {
  name: "heading",
  props: {
    children: String
  }
};
</script>

<style lang="scss" scoped>
.heading {
  font-size: 20px;
  font-weight: bold;
}
</style>